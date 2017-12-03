"use strict";

/* Requirements */

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("gulp-autoprefixer");
var sassdoc = require("sassdoc");
var cssnano = require("gulp-cssnano");
var sassLint = require("gulp-sass-lint");

/* I/O */

var CSSinput = "./scss/**/*.scss";
var CSSoutput = "./public/css";
var CSSlint = "./public/lint_sass.txt";

/* Options */

var sassOptions = {
    errLogToConsole: true,
    outputStyle: "expanded"
};
var autoprefixerOptions = {
    browsers: [
        "last 2 versions",
        "> 5%",
        "Firefox ESR"
    ]
};
var sassdocOptions = {
    dest: "./public/sassdoc"
};
var cssnanoOptions = {};

/* Tasks */

gulp.task("default", [
    "sass",
    "watch"
]);

gulp.task("sassdoc", function() {
    return gulp
        .src(CSSinput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

gulp.task("sasslint", function () {
    return gulp
        .src(CSSinput)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task("sass", function() {
    return gulp
        .src(CSSinput)
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(CSSoutput));
});

gulp.task("watch", function() {
    return gulp
        .watch(CSSinput, ["sass"])
        .on("change", function(event) {
            console.log("File " + event.path + " was " + event.type + ", running tasks . . .");
        });
});

gulp.task("prod", function() {
    return gulp
        .src(CSSinput)
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano(cssnanoOptions))
        .pipe(gulp.dest(CSSoutput));
});
