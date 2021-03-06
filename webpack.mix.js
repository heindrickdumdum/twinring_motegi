const mix = require('laravel-mix')
const fs = require('fs-extra')
const multimatch = require('multimatch')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
require('laravel-mix-polyfill')
require('laravel-mix-copy-watched')
require('laravel-mix-eslint')
require('laravel-mix-stylelint')
require('laravel-mix-imagemin')
require('laravel-mix-ejs')

const srcRelativePath =
  (process.env.MIX_SRC_RELATIVE_PATH || 'resources')
    .replace(/\/$/, '')
const distRelativePath =
  (process.env.MIX_DIST_RELATIVE_PATH || 'public')
    .replace(/\/$/, '')
const basePath =
  (process.env.MIX_BASE_PATH || '')
    .replace(/\/$/, '')

fs.removeSync(distRelativePath)

mix
  .setPublicPath(distRelativePath)
  .polyfill()
  .js(
    `${srcRelativePath}/assets/js/header.js`,
    `${distRelativePath}/assets/js`,
  )
  .js(
    `${srcRelativePath}/assets/js/app.js`,
    `${distRelativePath}/assets/js`,
  )
  .js(
    `${srcRelativePath}/assets/js/index.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/gallery-thumb.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/mobipark.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/carbike.js`,
    `${distRelativePath}/assets/js`,
  )

  

  .js(
    `${srcRelativePath}/assets/js/accordion.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/labo.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/components/collapse-button.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/granroom.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/restaurant-slider.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/tabs.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/tabs-faq.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/program-details.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/toya.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/read-more.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/bbq.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/marcherant.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/access.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/mobipark-guide.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/tabs-goods.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/racing-kart.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/events.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/assets/js/common-slider.js`,
    `${distRelativePath}/assets/js`,
  )

  .js(
    `${srcRelativePath}/com/js/components/slider.js`,
    `${distRelativePath}/com/js/components`,
  )

  .js(
    `${srcRelativePath}/com/js/common-slider.js`,
    `${distRelativePath}/com/js`,
  )

  .js(
    `${srcRelativePath}/com/js/common-slider.js`,
    `${distRelativePath}/com-test/js`,
  )

  .js(
    `${srcRelativePath}/com/js/components/slider.js`,
    `${distRelativePath}/com-test/js/components`,
  )

  .eslint()
  .webpackConfig({
    plugins: [
      new SVGSpritemapPlugin(
        `${srcRelativePath}/assets/svg/sprite/*.svg`,
        {
          output: {
            filename: 'assets/svg/sprite.svg',
            chunk: {
              name: 'assets/js/.svg-dummy-module',
              keep: true
            },
            svgo: {
              plugins: [
                { addClassesToSVGElement: { className: 'svg-sprite' } }
              ]
            },
            svg4everybody: true
          }
        }
      )
    ]
  })
  .sass(
    `${srcRelativePath}/assets/css/header.scss`,
    `${distRelativePath}/assets/css`
  )
  .sass(//all footer scss
    `${srcRelativePath}/assets/css/footer.scss`,
    `${distRelativePath}/assets/css`
  )
  .sass(
    `${srcRelativePath}/assets/css/app.scss`,
    `${distRelativePath}/assets/css`
  )
  .stylelint({ context: srcRelativePath })
  .options({ processCssUrls: false })

  .copyWatched(
    [
      `${srcRelativePath}/assets/svg/!(sprite)`,
      `${srcRelativePath}/assets/svg/!(sprite)/**/*`
    ],
    `${distRelativePath}/assets/svg`,
    { base: `${srcRelativePath}/assets/svg` }
  )
  .copyWatched(
    `${srcRelativePath}/assets/lib/fonts`,
    `${distRelativePath}/assets/lib/fonts`,
    { base: `${srcRelativePath}/assets/lib/fonts` }
  )
  .copyWatched(
    `${srcRelativePath}/assets/lib/test`,
    `${distRelativePath}/assets/lib/test`,
    { base: `${srcRelativePath}/assets/lib/test` }
  )
  
  .copyWatched(
    `${srcRelativePath}/com/img`,
    `${distRelativePath}/com/img`,
    { base: `${srcRelativePath}/com/img` }
  )

  .copyWatched(
    `${srcRelativePath}/com/img`,
    `${distRelativePath}/com-test/img`,
    { base: `${srcRelativePath}/com/img` }
  )

  .copyWatched(
    `${srcRelativePath}/com/common-parts.json`,
    `${distRelativePath}/com/common-parts.json`,
    { base: `${srcRelativePath}/com/common-parts.json` }
  )

  .copyWatched(
    `${srcRelativePath}/com/common-parts.json`,
    `${distRelativePath}/com-test/common-parts.json`,
    { base: `${srcRelativePath}/com/common-parts.json` }
  )

  .copyWatched(
    `${srcRelativePath}/com/.htaccess`,
    `${distRelativePath}/com/.htaccess`,
    { base: `${srcRelativePath}/com/.htaccess` }
  )

  

  // .copyWatched(
  //   `${srcRelativePath}/views/hours_m/`,
  //   `${distRelativePath}/hours_m-test/`,
  //   { base: `${srcRelativePath}/views/hours_m/` }
  // )



  .browserSync({
    open: true,
    host: process.env.MIX_BROWSER_SYNC_HOST || 'localhost',
    port: process.env.MIX_BROWSER_SYNC_PORT || 3000,
    proxy: false,
    server: distRelativePath,
    files: [
      `${distRelativePath}/assets/**/*`,
      `${distRelativePath}/**/*.html`
    ],
    https:
      process.env.MIX_BROWSER_SYNC_HTTPS_CERT &&
      process.env.MIX_BROWSER_SYNC_HTTPS_KEY
        ? {
          cert: process.env.MIX_BROWSER_SYNC_HTTPS_CERT,
          key: process.env.MIX_BROWSER_SYNC_HTTPS_KEY
        }
        : false
  })
  .sourceMaps(false, 'inline-cheap-module-source-map')
  .ejs(
    `${srcRelativePath}/views`,
    distRelativePath,
    {
      mix: (filePath = '') =>
        process.env.NODE_ENV === 'production'
          ? basePath + filePath + '?id=' + Date.now()
          : basePath + filePath,
      svgSprite: (filePath = '', id = '') =>
        process.env.NODE_ENV === 'production'
          ? id
          : basePath + filePath + id
    },
    {
      base: `${srcRelativePath}/views`,
      root: `${srcRelativePath}/views`,
      partials: `${srcRelativePath}/views/partials`
    }
  )

  .ejs(
    `${srcRelativePath}/views`,
    distRelativePath,
    {
      mix: (filePath = '') =>
        process.env.NODE_ENV === 'production'
          ? basePath + filePath + '?id=' + Date.now()
          : basePath + filePath,
      svgSprite: (filePath = '', id = '') =>
        process.env.NODE_ENV === 'production'
          ? id
          : basePath + filePath + id
    }
  )

   // TEST DIRECTORIES
  .copyWatched(
    `${distRelativePath}/collection-hall/`,
    `${distRelativePath}/collection-hall-test/`,
    { base: `${distRelativePath}/collection-hall/` }
  )
  .copyWatched(
    `${distRelativePath}/hours_m/`,
    `${distRelativePath}/hours_m-test/`,
    { base: `${distRelativePath}/hours_m/` }
  )
  .copyWatched(
    `${distRelativePath}/foods_m/`,
    `${distRelativePath}/foods_m-test/`,
    { base: `${distRelativePath}/foods_m/` }
  )
 

if (process.env.NODE_ENV === 'production') {
  mix
    .imagemin(
      [ 'assets/images/**/*' ],
      { context: srcRelativePath },
      {
        test: filePath => !!multimatch(filePath, [ 'assets/images/**/*' ]).length,
        pngquant: { strip: true, quality: 100-100 }, // 0 ~ 100
        gifsicle: { optimizationLevel: 1 }, // 1 ~ 3
        plugins: [ require('imagemin-mozjpeg')({ quality: 100 }) ] // 0 ~ 100
      }
    )
    .then(() => {
      fs.removeSync(`${distRelativePath}/assets/js/.svg-dummy-module.js`)
      fs.removeSync(`${distRelativePath}/mix-manifest.json`)
    })
}

else {
  mix
    .copyWatched(
      `${srcRelativePath}/assets/images`,
      `${distRelativePath}/assets/images`,
      { base: `${srcRelativePath}/assets/images` }
    )
}
