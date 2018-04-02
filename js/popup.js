var popup = document.querySelector(".modal-add");
var catalogItem = document.querySelectorAll(".catalog-item");

// Модальное окно с сообщением о добавлении в корзину
if (catalogItem) {
	for (var i = 0; i < catalogItem.length; i++) {
		var buyCart = catalogItem[i].querySelector(".buy");

		buyCart.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
		});
	}
}

if (popup) {
	var popupClose = popup.querySelector(".modal-close");

	if (popupClose) {
		popupClose.addEventListener("click", function(evt) {
			evt.preventDefault();

			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
			}
		});
	}
}

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});

// Блок карты
var mapLink = document.querySelector(".img-map");
var mapPopup = document.querySelector(".modal-map");

if (mapLink) {
	mapLink.addEventListener("click", function(evt) {
		evt.preventDefault();

		if (mapPopup) {
			mapPopup.classList.add("modal-show");
		}
	});
}

if (mapPopup) {
	var mapClose = mapPopup.querySelector(".modal-close");

	mapClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});
}

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
			mapPopup.classList.remove("modal-error");
		}
	}
});

// Local storage
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

// Форма обратной связи
var openLetter = document.querySelector(".btn-write");
var popupLetter = document.querySelector(".modal-letter");
var login = popupLetter.querySelector("[name=name]");

if (openLetter) {
	openLetter.addEventListener("click", function(evt) {
		evt.preventDefault();

		if (popupLetter) {
			var closeLetter = popupLetter.querySelector(".modal-close");

			popupLetter.classList.add("modal-show");

			if (storage) {
				login.value = storage;
			} else {
				login.focus();
			}
		}

		if (closeLetter) {
			closeLetter.addEventListener("click", function(evt) {
				evt.preventDefault();
				popupLetter.classList.remove("modal-show");
				popupLetter.classList.remove("modal-error");
			});
		}
	});
}

if (popupLetter) {
	var form = popupLetter.querySelector(".letter-form");
	var text = popupLetter.querySelector("[name=mail]");

	if (form) {
		form.addEventListener("submit", function(evt) {
			if (!login.value || !text.value) {
				evt.preventDefault();
				popupLetter.classList.remove("modal-error");
				popupLetter.offsetWidth = popupLetter.offsetWidth;
				popupLetter.classList.add("modal-error");
			} else {
				if (isStorageSupport) {
					localStorage.setItem("login", login.value);
				}
			}
		});
	}
}

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupLetter.classList.contains("modal-show")) {
			popupLetter.classList.remove("modal-show");
			popupLetter.classList.remove("modal-error");
		}
	}
});
