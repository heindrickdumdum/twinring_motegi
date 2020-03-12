module.exports = {
	dist: __dirname + '/../public/',
	release: __dirname + '/../release/',
	assets: __dirname + '/../public/assets/',
	directories: [
		[
			'/globalnavi/',
			'/dokidoki/',
			'/hellowoods/',
			'/itadaki/',
			'/mobipark_m/',
			'/sumika/',
			'/top/'
		],[
			'/hellowoods/program/',
			'/hellowoods/zip-line/',
			'/mobipark_m/attractions/'
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
			start: '<header id="lig-header">',
			end: '</header>'
		},
		footer: {
			start: '<footer class="footer" id="lig-footer">',
			end: '</footer>'
		},
		closed: '</html>'
	}
}