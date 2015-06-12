var gulp = require('gulp');
var shell = require('gulp-shell');

var path = require('path');
var truesass = require('sass-true');

var sassFile = path.join(__dirname, 'test/test.scss');

gulp.task('test', function() {
  truesass.runSass({file: sassFile}, function(){ return true; });
})

gulp.task('default', function() {
  gulp.watch(['sass/**/*.scss', 'test/**/*.scss'], ['test']);
});
