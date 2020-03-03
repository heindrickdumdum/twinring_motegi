var gulp = require( 'gulp' );
var async = require( 'async' );
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");
var replace = require( 'gulp-replace' );
var convertEncoding = require( 'gulp-convert-encoding' );
var del = require('del');
var rename = require('gulp-rename');
var htmlsplit = require('gulp-htmlsplit');
var tagContentReplace = require('gulp-tag-content-replace');

//https://github.com/reinerBa/gulp-tag-content-replace

//cont constData = {};


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

gulp.task('cp-to-workspace', function() {
    return gulp.src('public/**')
    .pipe(gulp.dest('release_bk/'))
    .pipe(gulp.dest('release/'));
});

gulp.task('cp-tmp', function() {
    return gulp.src('release_STG/**')
    .pipe(gulp.dest('release_STG_TMP/'));
});

gulp.task('cp-tmp-to-current', function() {
    return gulp.src('release_STG3/**')
    .pipe(gulp.dest('release_STG/'));
});

gulp.task('cp-html', function() {
    return gulp.src([
        'release/**.html',
        'release/**/*.html'
        ],{
      base: 'release/'
      })
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('cp-assets', function() {
    return gulp.src([
        'release/assets/**'
        ],{
      base: 'release/'
      })
      .pipe(gulp.dest('release_STG/'))
      .pipe(gulp.dest('release_STG/dokidoki'))
      .pipe(gulp.dest('release_STG/hellowoods'))
      .pipe(gulp.dest('release_STG/itadaki'))
      .pipe(gulp.dest('release_STG/mobipark_m'))
      .pipe(gulp.dest('release_STG/sumika'));
});

gulp.task('cp-assets-sjis', function() {
    return gulp.src([
        'release/assets/**'
        ],{
      base: 'release/'
      })
      .pipe(gulp.dest('release_SJIS_STG/'))
      .pipe(gulp.dest('release_SJIS_STG/dokidoki'))
      .pipe(gulp.dest('release_SJIS_STG/hellowoods'))
      .pipe(gulp.dest('release_SJIS_STG/itadaki'))
      .pipe(gulp.dest('release_SJIS_STG/mobipark_m'))
      .pipe(gulp.dest('release_SJIS_STG/sumika'));
});

gulp.task('del-unuse-assets', function(cb) {
    return gulp.del([
        'release_STG/dokidoki',
        'release_STG/hellowoods',
        'release_STG/itadaki',
        'release_STG/mobipark_m',
        'release_STG/sumika'
        ]);
//      .pipe(gulp.dest('release_STG/'))
//      .pipe(gulp.dest('release_STG/dokidoki'))
//      .pipe(gulp.dest('release_STG/hellowoods'))
//      .pipe(gulp.dest('release_STG/itadaki'))
//      .pipe(gulp.dest('release_STG/mobipark_m'))
//      .pipe(gulp.dest('release_STG/sumika'));
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

gulp.task('replace-path-html1', function() {
    return gulp.src([
        'release_STG/*.html',
        'release_STG/*/*.html'
        ],{
      base: 'release_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('replace-path-html2', function() {
    return gulp.src([
        'release_STG/*/*/*.html'
        ],{
      base: 'release_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      .pipe(replace('./assets/', './../assets/'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('replace-path-html3', function() {
    return gulp.src([
        'release_STG/*/*/*/*.html'
        ],{
      base: 'release_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      .pipe(replace('./assets/', './../../assets/'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('create-header-footer-base', function() {
    return gulp.src([
        'release_STG/index.html'
        ])
      .pipe(rename('trm_header.html'))
      .pipe(gulp.dest('release_STG/trm_header.html'))
      .pipe(rename('trm_footer.html'))
      .pipe(gulp.dest('release_STG/trm_footer.html'));
});

gulp.task('create-utf8header', function() {
    return gulp.src([
        'release_STG/trm_header.html'
        ],{
      base: 'release_STG/'
      })
      .pipe(gulp.dest('release_STG/header_utf.html'));
});

gulp.task('create-utf8footer', function() {
    return gulp.src([
        'release_STG/trm_footer.html'
        ],{
      base: 'release_STG/'
      })
      .pipe(gulp.dest('release_STG/footer_utf.html'));
});



gulp.task('del-unuse-contents', function() {
    return gulp.src([
        'release_STG/**.html',
        'release_STG/**/*.html'
        ],{
      base: 'release_STG/'
      })
    //Sample
    //.pipe(replace("/*dev*/", "")) // deletes occurence of "/*dev*/ whateverXYZ /*dev*/"
    //.pipe(replace("//debug", "//debug_end", "")) // deletes occurence of "//debug whateverXYZ //debug_end"
    //.pipe(replace("<!--", "-->", ""))
        .pipe(tagContentReplace("<!-- START DELETE CONTENTS -->", "<!-- END DELETE CONTENTS -->", ""))
        .pipe(gulp.dest('release_STG/'));
});

gulp.task('fix-bug', function() {
    return gulp.src([
      'release_STG/*.html',
      'release_STG/**/*.html',
      '!release_STG/**/*utf.html'
      ],{
      base: 'release_STG/'
      })
      // fix code
      .pipe(replace('<section class="bottom-slider"', '<section class="bottom-slider" style="height: 515px;"'))
      .pipe(replace('<section class="top-slide l-section"', '<section class="top-slide l-section" style="height: 510px;"'))
      .pipe(replace('<section class="forest l-section"', '<section class="forest l-section" style="height: 705px;"'))
      .pipe(replace('<section class="bottom-slider bottom-slider-pickup"', '<section class="bottom-slider bottom-slider-pickup" style="height: 510px;"'))
      .pipe(replace('<div class="subpage-image-gallery"', '<div class="subpage-image-gallery" style="height: 485px; margin-bottom: 100px;"'))
      .pipe(replace('', ''))
      .pipe(gulp.dest('release_STG/'));
});

gulp.task('fix-bug2', function() {
    return gulp.src([
      'release_STG/*.html',
      'release_STG/**/*.html',
      '!release_STG/**/*utf.html'
      ],{
      base: 'release_STG/'
      })
      // fix code
      .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
      .pipe(replace('lig-', 'trm-renewal-'))
      .pipe(gulp.dest('release_STG/'));
});


gulp.task('fix-bug-index', function() {
    return gulp.src([
      'release_STG/*.html'
      ],{
      base: 'release_STG/'
      })
      // fix code
      .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
      .pipe(replace('<section class="bottom-slider"', '<section class="bottom-slider" style="height: 515px;"'))
      .pipe(replace('<section class="top-slide l-section"', '<section class="top-slide l-section" style="height: 510px;"'))
      .pipe(replace('<section class="forest l-section"', '<section class="forest l-section" style="height: 705px;"'))
      .pipe(replace('<section class="bottom-slider bottom-slider-pickup"', '<section class="bottom-slider bottom-slider-pickup" style="height: 510px;"'))
      .pipe(replace('<div class="subpage-image-gallery"', '<div class="subpage-image-gallery" style="height: 485px; margin-bottom: 100px;"'))
      .pipe(replace('', ''))
      .pipe(gulp.dest('release_STG/'));
});


gulp.task('build-shift-jis-stg', function() {
    return gulp.src([
      'release_STG/**/*.html',
      '!release_STG/**/*utf.html'
      ],{
      base: 'release_STG/'
      })
      .pipe(replace('<!DOCTYPE html>', ''))
      .pipe(replace('<html lang="en">', ''))
      .pipe(replace('</html>', ''))
      .pipe(replace('UTF-8', 'Shift_JIS'))
      .pipe(convertEncoding({to: 'Shift_JIS'}))
      .pipe(gulp.dest('release_SJIS_STG/'));
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

gulp.task('html-split', function() {
    return gulp.src([
        'release/**.html',
        'release/**/*.html'
        ],{
      base: 'release/'
      })
      .pipe(htmlsplit())
      .pipe(gulp.dest('release_split/'));
});

gulp.task('html-tag-replace', function() {
    return gulp.src([
        'release/**.html',
        'release/**/*.html'
        ],{
      base: 'release/'
      })
    //Sample
    //.pipe(replace("/*dev*/", "")) // deletes occurence of "/*dev*/ whateverXYZ /*dev*/"
    //.pipe(replace("//debug", "//debug_end", "")) // deletes occurence of "//debug whateverXYZ //debug_end"
    //.pipe(replace("<!--", "-->", ""))
        .pipe(tagContentReplace("<!-- START DELETE CONTENTS -->", "<!-- END DELETE CONTENTS -->", ""))
        .pipe(gulp.dest('release_tag_replace/'));
});


gulp.task("default",
    gulp.series(
        "cp-to-workspace"
    )
);
