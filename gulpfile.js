const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

/**
 * Generate CSS files
 */
gulp.task('sass', function () {
  return gulp.src('web/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('web/styles/css/'));
});

/**
 * Watch SCSS files
 */
gulp.task('watch', function () {
  gulp.watch('web/styles/sass/**/*.scss', ['sass']);
});
