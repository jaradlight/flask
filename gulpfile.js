var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', shell.task([
  'npm test'
]));

gulp.task('default', function() {
  gulp.watch(['sass/**/*.scss', 'test/**/*.scss'], ['test']);
});
