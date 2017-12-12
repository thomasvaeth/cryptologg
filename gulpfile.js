'use strict';

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

gulp.task('fileinclude', () => {
  return gulp.src('./src/pages/index.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('build', ['fileinclude']);

gulp.task('watch', () => {
  gulp.watch('./src/pages/**/*.html', ['fileinclude']);
});

gulp.task('default', ['build', 'watch']);
