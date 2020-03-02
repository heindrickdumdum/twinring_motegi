var gulp = require( 'gulp' );
var async = require( 'async' );
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");
var replace = require( 'gulp-replace' );
var convertEncoding = require( 'gulp-convert-encoding' );
var del = require('del');



gulp.task('replace-char', function() {
    return gulp.src([
      'resources/views/**'
      ],{
      base: 'resources/views/'
      })
      .pipe(replace('™', '&trade;'))
      .pipe(replace('〜', '～'))
      .pipe(gulp.dest('resources/views/'));
});

gulp.task('copy', function() {
    return gulp.src('public/**')
    .pipe(gulp.dest('release_bk/'))
    .pipe(gulp.dest('release/'));
});

//gulp.task('build-shift-jis', function() {
//      return gulp.src([
//          'release/dokidoki/**',
//          'release/hellowoods/**',
//          'release/itadaki/**',
//          'release/mobipark_m/**',
//          'release/sumika/**',
//          'release/*.html'
//          ],{
//        base: 'release/'
//        })
//        .pipe(replace('UTF-8', 'Shift_JIS'))
//        .pipe(convertEncoding({to: 'Shift_JIS'}))
//        //.pipe(replace('/assets/', './'))
//        //.pipe(replace('assets/', './'))
//        .pipe(gulp.dest('release_sjis/'));
//});

gulp.task('build-copy-assets', function() {
    return gulp.src([
        'release/assets/**'
        ],{
      base: 'release/'
      })
      //.pipe(replace('/assets/', './'))
      //.pipe(replace('assets/', './'))
      .pipe(gulp.dest('release_STG/'))
      .pipe(gulp.dest('release_STG/dokidoki'))
      .pipe(gulp.dest('release_STG/hellowoods'))
      .pipe(gulp.dest('release_STG/itadaki'))
      .pipe(gulp.dest('release_STG/mobipark_m'))
      .pipe(gulp.dest('release_STG/sumika'));
});

gulp.task('replace-path-sumika', function() {
    return gulp.src([
        'release/sumika/**.html',
        'release/sumika/**.css'
        ],{
      base: 'release/sumika'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_STG/sumika'));
});

gulp.task('replace-path-html', function() {
    return gulp.src([
        'release/**.html',
        'release/**/*.html'
        ],{
      base: 'release/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('replace-path-css', function() {
    return gulp.src([
        'release/assets/css/app.css'
        ],{
      base: 'release/assets/css/'
      })
      .pipe(replace('/assets/', '../'))
      .pipe(gulp.dest('release_STG/assets/css.app'))
      .pipe(gulp.dest('release_STG/dokidoki/assets/css.app'))
      .pipe(gulp.dest('release_STG/hellowoods/assets/css.app'))
      .pipe(gulp.dest('release_STG/itadaki/assets/css.app'))
      .pipe(gulp.dest('release_STG/mobipark_m/assets/css.app'))
      .pipe(gulp.dest('release_STG/sumika/assets/css.app'));
});

//gulp.task('replace-path-html-mobipark', function() {
//    return gulp.src([
//        'release_STG/**.html',
//        'release_STG/**/*.html'
//        ],{
//      base: 'release/'
//      })
//      .pipe(replace('/assets/', './assets/'))
//      .pipe(replace('assets/', './assets/'))
//      .pipe(replace('../', './'))
//      .pipe(replace('././', './'))
//      //.pipe(replace('assets/css/images', 'assets/images'))
//      .pipe(gulp.dest('release_STG/'));
//});


gulp.task('build-shift-jis-stg', function() {
    return gulp.src([
      'release_STG/**/*.html',
      '!release_STG/**/*utf.html'
      ],{
      base: 'release_STG/'
      })
      .pipe(replace('UTF-8', 'Shift_JIS'))
      .pipe(convertEncoding({to: 'Shift_JIS'}))
      .pipe(gulp.dest('release_STG/'));
});


////Sass
//gulp.task( "sass", function () {
//    return gulp.src( 'sass/*.scss' )
//        .pipe( sass().on( 'error', sass.logError ) )
//        .pipe( autoprefixer( {
//            browsers: [ 'last 2 version', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2' ],
//        }))
//        .pipe( gulp.dest( './css' ));
//});
//
//// EJS
//gulp.task( "ejs", function () {
//    return gulp.src(["ejs/**/*.ejs", '!' + "ejs/**/_*.ejs"])
//        .pipe(ejs({}, {}, { ext: '.html' }))
//        .pipe( gulp.dest( "./" ) );
//});

gulp.task("default",
    gulp.series(
        "copy"
    )
);
