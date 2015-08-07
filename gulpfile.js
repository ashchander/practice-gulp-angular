var gulp = require('gulp');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');

gulp.task('clean', function() {
  return gulp.src('public/app/*.js', {read: false})
        .pipe(clean());
});

gulp.task('watchTS', function() {
  gulp.watch('public/**/*.ts', ['clean', 'compile']);
});

gulp.task('compile', function () {
  var tsResult = gulp.src(['public/**/*.ts'])
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('public/app'));
});

gulp.task('default', ['clean', 'compile', 'watchTS'], function() {
  return nodemon({
      script: 'server.js'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
  })
});
