var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('views', function buildHTML() {
    return gulp.src('./views/*.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('./dest/views'))
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('pug:watch', function () {
    gulp.watch('./views/**/*.pug', ['views']);
});

gulp.task('build', ['pug:watch', 'sass:watch'], function () {
    console.log('build...')
})

gulp.task('default', ['build']);