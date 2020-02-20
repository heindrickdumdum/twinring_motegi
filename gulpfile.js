var gulp = require( 'gulp' ),
    replace = require( 'gulp-replace' ),
    convertEncoding = require( 'gulp-convert-encoding' );

gulp.task('build-shift-jis', function() {
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

//gulp.task('default', ['task2']);