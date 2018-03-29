var buyCart = document.querySelector('.buy');
var popup = document.querySelector('.modal-add');
var close = popup.querySelector('.modal-close');

buyCart.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');

});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
});
