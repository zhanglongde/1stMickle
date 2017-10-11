var gulp = require('gulp');
var injectSvg = require('gulp-inject-svg');
var injectSvgOptions = { base: './src' };

gulp.task('injectSvg', function() {
    console.log('inject...')
    return gulp.src('./src/**/*.html')
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest('./dest'));

});

gulp.task('build', ['injectSvg'], function () {
    console.log('ok...')
})

gulp.task('default', ['build']);