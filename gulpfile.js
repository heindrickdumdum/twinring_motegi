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

gulp.task('replace-char-ejs', function() {
    return gulp.src([
        'resources/**.ejs'
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

gulp.task('cp-to-workspace', function() {
    return gulp.src('public/**')
    .pipe(gulp.dest('work/'));
});

gulp.task('cp-tmp', function() {
    return gulp.src('release_UTF8_STG/**')
    .pipe(gulp.dest('release_STG_TMP/'));
});

gulp.task('cp-tmp-to-current', function() {
    return gulp.src('release_STG3/**')
    .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('cp-html', function() {
    return gulp.src([
        'work/**.html',
        'work/**/*.html'
        ],{
      base: 'work/'
      })
      .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('cp-assets', function() {
    return gulp.src([
        'work/assets/**'
        ],{
      base: 'work/'
      })
      .pipe(gulp.dest('release_UTF8_STG/'))
      .pipe(gulp.dest('release_UTF8_STG/dokidoki'))
      .pipe(gulp.dest('release_UTF8_STG/hellowoods'))
      .pipe(gulp.dest('release_UTF8_STG/itadaki'))
      .pipe(gulp.dest('release_UTF8_STG/mobipark_m'))
      .pipe(gulp.dest('release_UTF8_STG/sumika'));
});

gulp.task('cp-js', function() {
    return gulp.src([
        'work/assets/js/*.js'
        ],{
      base: 'work/assets/js/'
      })
      // for UTF8
      .pipe(gulp.dest('release_UTF8_STG/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/globalnavi/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/dokidoki/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/hellowoods/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/itadaki/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/mobipark_m/assets/js'))
      .pipe(gulp.dest('release_UTF8_STG/sumika/assets/js'))
      // for SJIS(Release
      .pipe(gulp.dest('release_STG/assets/js'))
      .pipe(gulp.dest('release_STG/globalnavi/assets/js'))
      .pipe(gulp.dest('release_STG/dokidoki/assets/js'))
      .pipe(gulp.dest('release_STG/hellowoods/assets/js'))
      .pipe(gulp.dest('release_STG/itadaki/assets/js'))
      .pipe(gulp.dest('release_STG/mobipark_m/assets/js'))
      .pipe(gulp.dest('release_STG/sumika/assets/js'));
});

gulp.task('cp-assets-sjis', function() {
    return gulp.src([
        'work/assets/**'
        ],{
      base: 'work/'
      })
      .pipe(gulp.dest('release_SJIS_STG/'))
      .pipe(gulp.dest('release_SJIS_STG/dokidoki'))
      .pipe(gulp.dest('release_SJIS_STG/hellowoods'))
      .pipe(gulp.dest('release_SJIS_STG/itadaki'))
      .pipe(gulp.dest('release_SJIS_STG/mobipark_m'))
      .pipe(gulp.dest('release_SJIS_STG/sumika'));
});

gulp.task('del-unuse-assets', function(cb) {
    return gulp.src([
        'release_UTF8_STG/dokidoki',
        'release_UTF8_STG/hellowoods',
        'release_UTF8_STG/itadaki',
        'release_UTF8_STG/mobipark_m',
        'release_UTF8_STG/sumika'
        ]);
//      .pipe(gulp.dest('release_UTF8_STG/'))
//      .pipe(gulp.dest('release_UTF8_STG/dokidoki'))
//      .pipe(gulp.dest('release_UTF8_STG/hellowoods'))
//      .pipe(gulp.dest('release_UTF8_STG/itadaki'))
//      .pipe(gulp.dest('release_UTF8_STG/mobipark_m'))
//      .pipe(gulp.dest('release_UTF8_STG/sumika'));
});

gulp.task('replace-path-css', function() {
    return gulp.src([
        'work/assets/css/app.css'
        ],{
      base: 'work/assets/css/'
      })
      .pipe(replace('/assets/', '../'))
      // for UTF8
      .pipe(gulp.dest('release_UTF8_STG/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/globalnavi/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/dokidoki/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/hellowoods/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/itadaki/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/mobipark_m/assets/css'))
      .pipe(gulp.dest('release_UTF8_STG/sumika/assets/css'))
      // for SJIS(Release
      .pipe(gulp.dest('release_STG/assets/css'))
      .pipe(gulp.dest('release_STG/globalnavi/assets/css'))
      .pipe(gulp.dest('release_STG/dokidoki/assets/css'))
      .pipe(gulp.dest('release_STG/hellowoods/assets/css'))
      .pipe(gulp.dest('release_STG/itadaki/assets/css'))
      .pipe(gulp.dest('release_STG/mobipark_m/assets/css'))
      .pipe(gulp.dest('release_STG/sumika/assets/css'));
});

gulp.task('replace-path-html1', function() {
    return gulp.src([
        '!release_UTF8_STG/globalnavi/*.html',
        'release_UTF8_STG/*.html',
        'release_UTF8_STG/*/*.html'
        ],{
      base: 'release_UTF8_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('replace-path-html2', function() {
    return gulp.src([
        '!release_UTF8_STG/globalnavi/*.html',
        'release_UTF8_STG/*/*/*.html'
        ],{
      base: 'release_UTF8_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      .pipe(replace('./assets/', './../assets/'))
      .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('replace-path-html3', function() {
    return gulp.src([
        '!release_UTF8_STG/globalnavi/*.html',
        'release_UTF8_STG/*/*/*/*.html'
        ],{
      base: 'release_UTF8_STG/'
      })
      .pipe(replace('/assets/', './assets/'))
      .pipe(replace('assets/', './assets/'))
      .pipe(replace('../', './'))
      .pipe(replace('././', './'))
      .pipe(replace('./assets/', './../../assets/'))
      .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
      //.pipe(replace('assets/css/images', 'assets/images'))
      .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('replace-globalnavi', function() {
    return gulp.src([
        'release_UTF8_STG/globalnavi/*.html'
        ],{
        base: 'release_UTF8_STG/globalnavi/'
        })
        .pipe(replace('/assets/', '/globalnavi/assets/'))
        .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
        .pipe(replace('START DELETE FOOTER CONTENTS', ''))
        .pipe(replace('START DELETE HEADER CONTENTS', ''))
        .pipe(replace('END DELETE FOOTER CONTENTS', ''))
        .pipe(replace('END DELETE HEADER CONTENTS', ''))
        .pipe(gulp.dest('release_UTF8_STG_1/globalnavi/'))
        .pipe(gulp.dest('release_UTF8_STG/globalnavi/'));
});

gulp.task('create-sjis-header', function() {
    return gulp.src([
        'release_UTF8_STG/globalnavi/header_utf.html'
        ],{
      base: 'release_UTF8_STG/'
      })
        .pipe(rename('header_utf.html'))
        .pipe(gulp.dest('release_UTF8_STG/globalnavi/'));
});

gulp.task('create-sjis-footer', function() {
    return gulp.src([
        'release_UTF8_STG/footer_utf.html'
        ],{
      base: 'release_UTF8_STG/'
      })
        .pipe(rename('trm_header.html'))
        .pipe(gulp.dest('release_UTF8_STG/globalnavi/'));
});

gulp.task('del-unuse-contents-top', function() {
    return gulp.src([
        '!release_UTF8_STG/globalnavi/*.html',
        'release_UTF8_STG/*.html'
        ],{
      base: 'release_UTF8_STG/'
      })
    //Sample
    //.pipe(replace("/*dev*/", "")) // deletes occurence of "/*dev*/ whateverXYZ /*dev*/"
    //.pipe(replace("//debug", "//debug_end", "")) // deletes occurence of "//debug whateverXYZ //debug_end"
    //.pipe(replace("<!--", "-->", ""))
        .pipe(tagContentReplace("<!-- START DELETE HEADER CONTENTS -->", "<!-- END DELETE HEADER CONTENTS -->", ""))
        .pipe(tagContentReplace("<!-- START DELETE FOOTER CONTENTS -->", "<!-- END DELETE FOOTER CONTENTS -->", ""))
        //.pipe(replace('<!DOCTYPE html>', ''))
        .pipe(replace('<html lang="en">', ''))
        .pipe(replace('</body>', ''))
        .pipe(replace('</html>', ''))
        .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
        .pipe(gulp.dest('release_UTF8_STG/'));
});

gulp.task('del-unuse-contents-sub', function() {
    return gulp.src([
        '!release_UTF8_STG/globalnavi/*.html',
        'release_UTF8_STG/*/**/*.html'
        ],{
      base: 'release_UTF8_STG/'
      })
    //Sample
    //.pipe(replace("/*dev*/", "")) // deletes occurence of "/*dev*/ whateverXYZ /*dev*/"
    //.pipe(replace("//debug", "//debug_end", "")) // deletes occurence of "//debug whateverXYZ //debug_end"
    //.pipe(replace("<!--", "-->", ""))
        .pipe(tagContentReplace("<!-- START DELETE HEADER CONTENTS FOR SUB -->", "<!-- END DELETE HEADER CONTENTS FOR SUB -->", ""))
        .pipe(tagContentReplace("<!-- START DELETE FOOTER CONTENTS -->", "<!-- END DELETE FOOTER CONTENTS -->", ""))
        .pipe(tagContentReplace("<!-- START DELETE HEADER CONTENTS -->", "<!-- END DELETE HEADER CONTENTS -->", ""))
        .pipe(replace('<!DOCTYPE html>', ''))
        .pipe(replace('<html lang="en">', ''))
        .pipe(replace('</body>', ''))
        .pipe(replace('</html>', ''))
        .pipe(replace('href="https://www.twinring.jp/', 'href="/'))
        .pipe(gulp.dest('release_UTF8_STG/'));
});


gulp.task('build-shift-jis-stg', function() {
    return gulp.src([
      'release_UTF8_STG/**/*.html',
      '!release_UTF8_STG/**/*utf.html'
      ],{
      base: 'release_UTF8_STG/'
      })
      .pipe(replace('UTF-8', 'Shift_JIS'))
      .pipe(convertEncoding({to: 'Shift_JIS'}))
      .pipe(gulp.dest('release_STG/'));
});


gulp.task("default",
    gulp.series(
        "replace-char",
        "cp-to-workspace",
        "cp-html",
        "replace-path-html1",
        "replace-path-html2",
        "replace-path-html3",
        "replace-globalnavi",
        "cp-assets",
        "replace-path-css",
        "del-unuse-assets",
        "del-unuse-contents-top",
        "del-unuse-contents-sub",
        "build-shift-jis-stg"
    )
);
