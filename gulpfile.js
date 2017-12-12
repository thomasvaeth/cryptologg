'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('fileinclude', () => {
  return gulp.src('./src/pages/index.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('sass', () => {
  return gulp.src('./src/assets/scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('fonts', () => {
  return gulp.src('./src/assets/scss/fonts.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('build', ['fileinclude', 'sass', 'fonts']);

gulp.task('watch', () => {
  gulp.watch('./src/pages/**/*.html', ['fileinclude']);
  gulp.watch('./src/assets/scss/**/*.scss', ['sass', 'fonts']);
});

gulp.task('default', ['build', 'watch']);
