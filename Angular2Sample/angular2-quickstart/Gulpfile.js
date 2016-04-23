/// <binding BeforeBuild='clean:js, min:js' />
var gulp = require('gulp'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {};
paths.minJs = ["node_modules/es6-shim/es6-shim.min.js",
               "node_modules/systemjs/dist/system-polyfills.js",
               "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
"node_modules/angular2/bundles/angular2-polyfills.js",
"node_modules/systemjs/dist/system.src.js",
"node_modules/rxjs/bundles/Rx.js",
"node_modules/angular2/bundles/angular2.dev.js",
"app/**/*.js"];
paths.concatJsDest = "js/site.min.js";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb)
});

gulp.task("min:js", function () {
    return gulp.src(paths.minJs, { base: "." })
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});


gulp.task('prod-build', function () {

});