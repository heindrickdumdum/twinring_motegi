module.exports = {
	dist: __dirname + '/../public',
	release: __dirname + '/../release',
	assets: __dirname + '/../public/assets',
	directories: [
		[
			'/globalnavi',
			'/dokidoki',
			'/hellowoods',
			'/itadaki',
			'/mobipark_m',
			'/sumika',
			'/top'
		],
		[
			'/hellowoods/program',
			'/hellowoods/zip-line',
			'/mobipark_m/attractions'
		]
	],
	commonParts: {
		directory: '/globalnavi',
		files: [
			'trm_header.html',
			'footer_utf.html',
			'header_utf.html',
			'test.html',
			'trm_footer.html'
		]
	}
}