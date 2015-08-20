var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var Roots = require('roots');
var path = require('path');
var coffeeScript = require('coffee-script/register');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');

//initialize roots instance
gulp.task('roots:init', function(){
  return Roots.new({
    path: path.join(__dirname, 'roots')
  }).done(function() {
    console.log("roots is ready");
  }, function(err){
    console.error("oh no! " + err);
  });
});

//compile roots sites
gulp.task('roots:compile', function(){
  return require('child_process').exec('roots compile', {cwd: './roots'});
});

//deploy site
gulp.task('roots:deploy', function(){
  var project = new Roots(path.join(__dirname, 'roots'));
  return project.deploy({to: 'gh-pages'})
    .done(function(){
      console.log('finished!');
    }, function(err){
      console.log('uh oh... ' + err);
    });
});

//start browser-sync instance
gulp.task('browser-sync', function() {
  browserSync.init({
    server : {
      baseDir : './roots/public/'
    }
  });
});

//clear public directory
gulp.task('clean', function(cb){
  del(['./roots/public/**/*'], cb);
});

//minify images
gulp.task('images', function(){
  return gulp.src('./images/*')
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./roots/assets/img'));
});

//symbolize svgs
gulp.task('vectors', function(){
  return gulp.src('./vectors/*.svg')
    pipe($.symbols({
      templates: ['default-svg']
    }))
    .pipe(gulp.dest('roots/views'));
});

//watch files for changes
gulp.task('watch', function(){
  gulp.watch(['roots/**/*', '!roots/public/**/*'], ['roots:compile']);
  gulp.watch('roots/public/**/*', browserSync.reload);
  gulp.watch('images/**', ['images']);
  gulp.watch('vectors/*.svg', ['vectors']);
});

//main gulp task
gulp.task('default', function(){
  runSequence('clean', ['images', 'vectors'], 'roots:compile', 'browser-sync', 'watch');
});
