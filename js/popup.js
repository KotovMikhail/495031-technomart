var buyCart = document.querySelector(".buy");
var popup = document.querySelector(".modal-add");
var close = popup.querySelector(".modal-close");

buyCart.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

var mapLink = document.querySelector(".interactive-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});


var openLetter = document.querySelector(".btn-write");
var popupLetter = document.querySelector(".modal-letter");
var close = popupLetter.querySelector(".modal-close");

var form = popupLetter.querySelector(".letter-form");
var login = popupLetter.querySelector("[name=name]");
var text = popupLetter.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
		storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}


	openLetter.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLetter.classList.add("modal-show");

if (storage) {
	login.value = storage;
	password.focus();
} else {
	login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLetter.classList.remove("modal-show");
	popupLetter.classList.remove("modal-error");
});

 form.addEventListener("submit", function (evt) {
	if (!login.value || !text.value) {
		evt.preventDefault();
		popupLetter.classList.remove("modal-error");
      	popupLetter.offsetWidth = popup.offsetWidth;
		popupLetter.classList.add("modal-error");
	} else {
 	if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popupLetter.classList.contains("modal-show")) {
			popupLetter.classList.remove("modal-show");
			popupLetter.classList.remove("modal-error");
		}
	}
});




