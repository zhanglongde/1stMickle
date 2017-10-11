var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require("gulp-order");

gulp.task('scripts', function() {
    return gulp.src('./src/*.js')
        .pipe(order([
            "c.js",
            "b.js",
            "a.js"
        ]))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['scripts'], function () {
    console.log('ok...')
})

gulp.task('default', ['build']);