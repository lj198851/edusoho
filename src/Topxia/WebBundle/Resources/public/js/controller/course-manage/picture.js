define(function(require, exports, module) {
	var Notify = require('common/bootstrap-notify');
	var Validator = require('bootstrap.validator');
	require('common/validator-rules').inject(Validator);
	var WebUploader = require('../widget/web-uploader');

	exports.run = function() {

		require('./header').run();

		var uploader = new WebUploader({
			element: '#upload-picture-btn',
			fileVal: 'picture'
		});

		uploader.on('uploadSuccess', function(file, response ) {
			var url = $("#upload-picture-btn").data("gotoUrl");
			Notify.success('上传成功！', 1);
			document.location.href = url+"?file="+response.file;
		});

		$('#upload-picture-btn').click(function(){
			uploader.upload();
		})

	};

});