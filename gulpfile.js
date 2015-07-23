var gulp = require('gulp');
var shell = require('gulp-shell');

var path = require('path');
var truesass = require('sass-true');

var mocha = require('gulp-mocha');

var sassFile = path.join(__dirname, 'test/test.scss');

gulp.task('test', function() {
  truesass.runSass({file: sassFile}, function(){ return true; });
});

gulp.task('test:mocha', function() {
  return gulp.src('test/test.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', function() {
  gulp.watch(['sass/**/*.scss', 'test/**/*.scss'], ['test:mocha']);
});
