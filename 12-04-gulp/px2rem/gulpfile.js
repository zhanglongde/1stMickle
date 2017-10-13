// https://github.com/songsiqi/px2rem
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');

gulp.task('sass', function () {
    var processors = [px2rem({remUnit: 75})];
    return gulp.src('./sass/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css/')).pipe(livereload());
});