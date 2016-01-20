'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');

var files = [
  '**/*.js',
  '!webpack.config.js',
  '!_js/**/*.*',
  '!js/**/*.*',
  '!node_modules/**/*.*'
];

gulp.task('watch', () => {
  gulp.watch(files, ['eslint']);
});

gulp.task('eslint', () => {
  return gulp.src(files)
    .pipe(cached('linting'))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['eslint', 'watch']);
