var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('default', function(cb) {
  //run python command that outputs data.json 
  spawn('python', ["./pandulo.py"], {stdio: 'inherit'}).on('close', cb);
});

gulp.watch(['src/**.csv','**.py'], ['default'])