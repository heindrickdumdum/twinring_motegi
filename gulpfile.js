var gulp = require( 'gulp' );
var replace = require( 'gulp-replace' );
var convertEncoding = require( 'gulp-convert-encoding' );

gulp.task('build-shift-jis', function() {
      return gulp.src('public/')
        //.pipe(replace('UTF-8', 'Shift_JIS'))
        //.pipe(replace('/assets/', './'))
        //.pipe(replace('assets/', './'))
        //.pipe(convertEncoding({to: 'Shift_JIS'}))
        .pipe(gulp.dest('public/'));

//    return gulp.src([
//      'public/**'
//      ],{
//      base: 'public/'
//      })
//      .pipe(replace('UTF-8', 'Shift_JIS'))
//      //.pipe(replace('/assets/', './'))
//      //.pipe(replace('assets/', './'))
//      .pipe(convertEncoding({to: 'Shift_JIS'}))
//      .pipe(gulp.dest('public_shiftjis/'));
});

gulp.task('build-shift-jis-stg', function() {
    return gulp.src([
      'public/**'
      ],{
      base: 'public/'
      })
      .pipe(replace('UTF-8', 'Shift_JIS'))
      .pipe(replace('/assets/', './'))
      .pipe(replace('assets/', './'))
      .pipe(convertEncoding({to: 'Shift_JIS'}))
      .pipe(gulp.dest('public/'));
});

gulp.task('replace-char-ejs', function() {
    return gulp.src([
        'resources/*.ejs',
        'resources/**/*.ejs'
      ],{
      base: 'resources/'
      })
      .pipe(replace('™', '&trade;'))
      .pipe(replace('〜', '～'))
      .pipe(gulp.dest('resources/'));
});

gulp.task('replace-char', function() {
    return gulp.src([
        'public/*.html',
        'public/**/*.html'
      ],{
      base: 'public/'
      })
      .pipe(replace('™', '&trade;'))
      .pipe(replace('〜', '～'))
      .pipe(gulp.dest('public/'));
});

//gulp.task('default', ['task2']);