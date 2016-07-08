const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('web/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('web/styles/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('web/styles/sass/**/*.scss', [sass]);
});
