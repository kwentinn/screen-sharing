$(document).ready(function () {

	//var socket = io.connect();
	//socket.on('screen-stream', function (data) {});

	navigator.getUserMedia = (navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia);

	if (!navigator.getUserMedia) {
		$('body').html($('<p/>').text("getUserMedia not supported"));
	} else {
		$('#share-screen').click(function () {
			navigator.getUserMedia({
				audio : false,
				video : {
					mandatory : {
						chromeMediaSource : 'screen',
						maxWidth : 1280,
						maxHeight : 720
					},
					optional : []
				}
			}, function (stream) {
				document.getElementById('video').src = window.URL.createObjectURL(stream);
				$('#share-screen').hide();
			}, function () {
				alert('Error, my friend. Screen stream is not available. Try in latest Chrome with Screen sharing enabled in about:flags.');
			})
		});
	}
});
