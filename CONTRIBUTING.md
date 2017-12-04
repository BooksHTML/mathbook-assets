# Contributor Guidelines
Welcome to the project!

Below are a few guidelines that help us maintain consistency throughout the codebase.

(_The core team should feel free to edit these as necessary_)

## General Guidelines

*   Be sure to run the `boostrap.sh` script after cloning the repository for the first time.
*   Keep commits focused, especially when preparing pull requests.
*   Use `git merge --no-ff` to merge branches (or use git-flow). 
    This helps us maintain complete branch history. 
    Without `--no-ff` the branch history is all squashed into one timeline.

## Semver and git-flow
It is important that this project utilize [semantic versioning](http://semver.org/)
so that Mathbook generators can reference a copy of these assets by version.
To achieve this, it is **highly recommended** that you use the
[git-flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model.
The best way to do so is to use the [git-flow git plugin](https://github.com/nvie/gitflow).

## Pull Requests and git-flow
If you are contributing via pull requests...

*   **Do not create release branches.**
    The core team will handle that.
*   **Do not merge into develop.**
    Instead, submit your feature/hotfix branch.
*   **Do not use `git-flow hotfix` to create hotfix branches.**
    Instead, manually create _named_ hotfix branches, like so:
    ```bash
    # The `from-tag` refers to the version at which the hotfix needs to be applied.
    # If you are applying the hotfix to the latest version, use `master` as the `from-tag`.
    $ git checkout -b hotfix/my-hotfix <from-tag>
    ```
    When you submit your pull request, please specify the `from-tag` used.
    The core team will handle converting named hotfix branches to versioned hotfix branches, like so:
    ```bash    
    # The `from-tag` must match.
    $ git-flow hotfix start <version-number> <from-tag>
    $ git merge --no-ff hotfix/named-hotfix
    $ git flow hotfix finish version-number
    ```
    The core team will then merge hotfix branches with any upcoming release branches OR develop if there are no release branches.

## Githooks
Be sure to run the `boostrap.sh` script after cloning the repository for the first time.
This will set up githooks that, in turn, manage installing/updating githooks from the `scripts/githooks` directory on pull.

## Editor Config
Use the `.editorconfig` file included in the repository to configure your editor.
See [editorconfig.org](http://editorconfig.org/) to find more information and a plugin for your editor.

## JSHint
It's recommended that you set up JSHint.
Javascript is a finicky language and it's easy to make mistakes without realizing it.
Sometimes seemingly innoucous mistakes (like placing a comma after the last property in an object)
can break your code in less forgiving browsers (*cough* IE).
JSHint lints your javascript to help you catch these mistakes before committing your code to the repository.

To install JSHint, see [jshint.com](http://www.jshint.com/install/).

## Javascript Style Guide
Follow the [Airbnb javascript style guide](https://github.com/airbnb/javascript) with the following exceptions:

*   Use **4 spaces** for indentation

If you use the `.editorconfig` and `.jshintrc` files included in the repo, you won't have to think about it.


## Understanding SASS
This project uses the [SASS](http://sass-lang.com/) css precompiler.
If you are not familiar with SASS, don't worry,
the SCSS syntax is just a strict superset of vanilla CSS with some helpful superpowers.

Start by reading [Sass: Sass Basics](http://sass-lang.com/guide), for a quick overview.

You should also familiarize yourself with

*   [The Almighty Ampersand](http://unakravets.tumblr.com/post/78744593423/sass-snippets-the-almighty-ampersand)
*   [Placeholder selectors](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)
*   [Guarded Variable Assignment](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Variable_Defaults___default)
    (using `!default`)


## SASS Guidelines
Please read through our [SASS guidelines](sass-guidelines.md).

## Vertical Rhythm
**DO NOT** break the vertical rhythm!

*This is the most important part of the design!*

Humans are hard-wired to seek patterns and repetition.
In typography, **vertical rhythm** refers to the consistent vertical spacing of text and other block-level content.
When the spacing is derived from multiples of the text's base line-height the reader can easily find the next line of text.
A consistent rhythm throughout, lends a feeling of balance and structure to the design.

### Follow these very important rules:

*   **Use the vertical rhythm mixins and functions to define all vertical margins/padding/borders.**
    -   These round the `$lines` parameter to the nearest full or half line,
        depending on the value of the variable `$round-to-nearest-half-line`
        set in the main `_config.scss` file).
    -   The mixins then set the margin/padding/border correctly
        (with the units defined in `$rhythm-unit`) using the given font-size.
*   **Use our `typography-heading-size()` mixin to set the font size of headings.**
    -   This sets the correct leader and trailer for headings.
*   **Use `adjust-font-size-to()` to adjust all other font sizes.**
    -   This adjusts the font-size *and* the line-height to ensure alignment with the vertical rhythm.

### Notes

*   It is acceptable for the `height` of tables, figures, and mathematical
    equations to break from the vertical rhythm as long as the vertical rhythm is
    re-established by their margins.
*   While it is not essential that you derive horizontal spacing from the
    vertical rhythm, it often provides a comforting sense of symmetry between the
    vertical and horizontal margins. Either way, you should strive to keep the
    horizontal margins consistent throughout.

## Need Help?
Contact David Farmer
