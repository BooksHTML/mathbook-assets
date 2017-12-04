# SASS Guidelines

* General
   - Use variables defined in the config files or in `_typography.scss` whenever possible!
   - Maintain seperation between the ui module and the content module
   - Read and follow the guidelines in the vertical rhythm section below.
* Comments
    - Use `/* comment */` for comments that should be output in the CSS
    - Use `// comment` for comments that should **not** be output in the CSS
* Variables
    - should take the dash-seperated form `$my-variable` (unfortunately standard)
    - should be semantic
        + i.e. `$color-primary` instead of  `$color-red`
    - should go from general to specific
        + i.e. `$link-color-hover` instead of `$hover-link-color`
    - should be defined at the top of their context (generally the file)
* Files
    - Should use the extension `.scss`.
    - Should be prefixed with an underscore `_` if they should not be compiled to a CSS file directly.
    - Should be named with lower-case, dash-seperated names
        + i.e. `_my-partial-file.scss`
* Modules
    - should be a directory containing components and partials describing a complete, standalone portion of an application.
    - should contain a `_module-name_config.scss` file containing `!default` variables used throughout the module.
    - should contain a `_module-name.scss` partial in the module root that imports the entire module.
* Mixins
    - should **not** output CSS when imported.
    - should be grouped together into sets with configurable default variables
    - should be prefixed by the set name
        + i.e. `button-state-hover` and `button-icon`
    - should describe all or part of a standalone, reusable component or pattern that could be dropped into another project
    - should be as lightweight as possible. Let the caller decide anything that isn't essential to the mixin's pattern.
    - should (usually) utilize the set's default variables as parameter defaults
    - should not be overused. See "Placeholders".
* Partials
    - **should** output CSS when they are imported.
    - should describe styles specific to this project
    - should be used to describe the way components are combined to produce the final product
* Placeholders (`%placeholder-selector-name`)
    - should be defined in only one place
    - should occur only in partials
    - can be used to reduce the total CSS output of mixins.

If a mixin is used with the same parameters in more than one place, consider `@include`ing the mixin in a placeholder and `@extend`ing the placeholder instead.

## Examples

### (Sort of) bad:
```sass
// Both of these call the mixin with the same parameters.
// This results in double the CSS.
.my-selector-1 {
    @include my-mixin(a,b);
}

.my-selector-2 {
    @include my-mixin(a,b);
}
```

### Good:
```sass
// With the placeholder selector,
// they will be added to a comma-seperated list in the CSS output
%my-thingy-a-b {
    @include my-mixin(a, b);
}

.my-selector-1 {
    @extend %my-thingy-a-b;
}

.my-selector-2 {
    @extend %my-thingy-a-b;
}
```

### Also good:
```sass
// These use different parameters, so it's okay to create more CSS output.
// They generate only as much CSS as is necessary.
.my-selector-1 {
    @include my-mixin(a,b);
}

.my-selector-2 {
    @include my-mixin(c,d);
}
```

That said, don't worry too much about placeholders vs mixins.
