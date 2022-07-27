// document.querySelectorAll('.modal img').forEach((image) => {
// 	image.addEventListener('click', function (e) {
// 		this.parentNode.classList.add('active');
// 	});
// });

// document.querySelectorAll('.modal').forEach((image) => {
// 	image.addEventListener('click', function (e) {
// 		this.classList.remove('active');
// 		console.log('click');
// 	});
// });

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
	modal.style.display = 'none';
});

// global handler
document.addEventListener('click', function (e) {
	if (e.target.className.indexOf('modal-target') !== -1) {
		var img = e.target;
		var modalImg = document.getElementById('modal-content');
		var captionText = document.getElementById('modal-caption');
		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	}
});
