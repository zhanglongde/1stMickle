var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('./dest'))
});
gulp.task('build', ['views'], function () {
    console.log('ok...')
})

gulp.task('default', ['build']);