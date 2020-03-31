module.exports = {
	dist: __dirname + '/../public/',
	release: __dirname + '/../release/',
	assets: __dirname + '/../public/assets/',
	assets_copy: process.env.MOTEGI_ASSETS_CP ? false : true,
	directories: [
		[
			'/globalnavi/',
			'/dokidoki/',
			'/hellowoods/',
			'/itadaki/',
			'/mobipark_m/',
			'/sumika/',
						'/hoteltwinring/',
			'/top/'
		],[
			'/hellowoods/program/',
			'/hellowoods/zip-line/',
			'/mobipark_m/attractions/',
						'/hoteltwinring/familyroom/',
						'/hoteltwinring/granroom/',
						'/hoteltwinring/information/',
						'/hoteltwinring/nozominoyu/',
						'/hoteltwinring/standardroom/'
		]
	],
	commonParts: {
		directory: '/globalnavi/',
		files: [
			'header_utf.html',
			'trm_header.html',
			'footer_utf.html',
			'trm_footer.html',
			'test.html'
		]
	},
	tag: {
		header: {
			start: '<!-- START GLOBAL HEADER -->',
			end: '<!-- END GLOBAL HEADER -->'
		},
		footer: {
			start: '<!-- START GLOBAL FOOTER -->',
			end: '<!-- END GLOBAL FOOTER -->'
		},
		gtmHeader: {
			start: '<!-- START GTM HEADER -->',
			end: '<!-- END GTM HEADER -->'
		},
		gtmFooter: {
			start: '<!-- START GTM FOOTER -->',
			end: '<!-- END GTM FOOTER -->'
		},
		closed: '</html>'
	},
	scp: {

		host: process.env.MOTEGI_SCP_HOST,
		username: process.env.MOTEGI_SCP_USERNAME,
		password: process.env.MOTEGI_SCP_PASSWORD,
		top: {
			src: './release/top',
			dist:'top'
		},
			sumika: {
				src: '',
				dist:''
			},
			itadaki: {
				src: '',
				dist:''
			},
			dokidoki: {
				src: './release/dokidoki',
				dist:'dokidoki-test'
			},
			hellowoods: {
				src: '',
				dist:''
			},
			mobipark_m: {
				src: '',
				dist:''
			},
			hoteltwinring: {
				src: '',
				dist:''
			}

		//path: process.env.MOTEGI_SCP_DIST_PATH
	}
}