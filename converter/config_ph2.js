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
		contents: [
			{
				contentName: 'top',
				src: './release/top',
				dist:'top'
			},
			{
				contentName: 'dokidoki',
				src: './release/',
				dist:'dokidoki-test'
			},
			{
				contentName: 'itadaki',
				src: './release/itadaki',
				dist:'itadaki-test'
			},
			{
				contentName: 'sumika',
				src: './release/sumika',
				dist:'sumika-test'
			},
			{
				contentName: 'hellowoods',
				src: './release/hellowoods',
				dist:'hellowoods-test'
			},
			{
				contentName: 'mobipark_m',
				src: './release/mobipark_m',
				dist:'mobipark_m-test'
			},
			{
				contentName: 'hoteltwinring',
				src: './release/hoteltwinring',
				dist:'hoteltwinring-test'
			},
			{
				contentName: 'globalnavi',
				src: './release/globalnavi',
				dist:'globalnavi-test'
			},
		]
		//path: process.env.MOTEGI_SCP_DIST_PATH
	}
}