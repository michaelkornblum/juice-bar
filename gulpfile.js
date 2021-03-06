var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var Roots = require('roots');
var path = require('path');
var coffeeScript = require('coffee-script/register');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
var svgSymbols = require('gulp-svg-symbols');


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
  return require('child_process').exec('roots compile', {cwd: './roots'}).on('exit', function(){
    browserSync.init({
      server : {
        baseDir : './roots/public/'
      }
    })
  });
});

gulp.task('roots:recompile', function(){
  return require('child_process').exec('roots compile', {cwd: './roots'}).on('exit', function(){browserSync.reload()});
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
  return gulp.src(['./images/**/*.png', '/images/**/*.jpg', 'images/**/*.gif', 'images/**/*.svg', '/images/**/*.jpeg'])
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
    .pipe($.svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(gulp.dest('./roots/views/'));
});

//watch files for changes
gulp.task('watch', function(){
  gulp.watch([
    'roots/views/**/*',
    'roots/assets/**/*',
    'roots/app.coffee',
    'roots/app.production.coffee',
    '!roots/public/**/*'],
    ['roots:recompile']);
  gulp.watch('images/*', ['images']);
  gulp.watch('svg/*.svg', ['vectors']);
});

//main gulp task
gulp.task('default', function(){
  runSequence('clean', 'images', 'vectors', 'roots:compile', 'watch');
});
