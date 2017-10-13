var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', function() {
    gulp.src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('build', ['fileinclude'], function () {
    console.log('ok...')
})

gulp.task('default', ['build']);