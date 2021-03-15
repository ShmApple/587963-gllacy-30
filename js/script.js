const feedbackLink = document.querySelector(".contacts__feedback");
if (feedbackLink) {
  const feedbackPopup = document.querySelector(".feedback-modal");
  const feedbackPopupWrapper = feedbackPopup.querySelector(".modal__wrapper");
  const feedbackClose = feedbackPopup.querySelector(".modal__close-btn");
  const feedbackForm = feedbackPopup.querySelector(".feedback-modal__form");
  const feedbackName = feedbackPopup.querySelector("#user-name");
  const feedbackEmale = feedbackPopup.querySelector("#feedback-email");
  const feedbackText = feedbackPopup.querySelector("#textarea-feedback");

  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal--shown")
    feedbackName.focus();
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal--shown");
    loginPopup.classList.remove("modal-error");
  });

  feedbackForm.addEventListener("submit", function (evt) {
      if (!feedbackName.value || !feedbackEmale.value || !feedbackText.value) {
      evt.preventDefault();
      feedbackPopupWrapper.classList.remove("modal__wrapper--error");
      feedbackPopupWrapper.offsetWidth = feedbackPopupWrapper.offsetWidth;
      feedbackPopupWrapper.classList.add("modal__wrapper--error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal--shown")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal--shown");
        feedbackPopupWrapper.classList.remove("modal__wrapper--error");
      }
    }
  });
}

const loginPopup = document.querySelector(".nav-buttons__dropdown--login");
if (loginPopup) {
  const loginForm = loginPopup.querySelector(".dropdown__form");
  const loginLogin = loginPopup.querySelector("#login");
  const loginPassword = loginPopup.querySelector("#password");

  loginForm.addEventListener("submit", function (evt) {
      if (!loginLogin.value || !loginPassword.value) {
      evt.preventDefault();
      loginPopup.classList.remove("modal__wrapper--error");
      loginPopup.offsetWidth = loginPopup.offsetWidth;
      loginPopup.classList.add("modal__wrapper--error");
    }
  });
}

const searchPopup = document.querySelector(".nav-buttons__dropdown--search");
if (searchPopup) {
  const searchForm = searchPopup.querySelector(".dropdown__form");
  const searchText = searchForm.querySelector("#search");

  searchForm.addEventListener("submit", function (evt) {
      if (!searchText.value) {
      evt.preventDefault();
      searchPopup.classList.remove("modal__wrapper--error");
      searchPopup.offsetWidth = loginPopup.offsetWidth;
      searchPopup.classList.add("modal__wrapper--error");
    }
  });
}

const yaMap = document.querySelector("#map");
if (yaMap) {
  ymaps.ready(init);
  var myMap;

  function init() {
    const mapImg = document.querySelector(".contacts__map");
    mapImg.addEventListener("click", function (evt) {
      evt.preventDefault();
    });

    myMap = new ymaps.Map("map", {
      center: [59.939437, 30.329669],
      zoom: 16
    });

    myMap.controls.add(
      new ymaps.control.ZoomControl()
    );

    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {hintContent: 'ул. Большая Конюшенная, 19/8',}, {
  	iconLayout: "default#image",
  	iconImageHref: "img/icons/pin-map.svg",
  	iconImageSize: [80, 140],
  	iconImageOffset: [-30, -153]
  });

  myMap.geoObjects.add(myPlacemark);

  };
}

const resolveWidth = (field) => {
   const {length} = field.value.toString();
   field.style.width = `${length * 8}px`;
};

for (const field of document.querySelectorAll('.filter-form__input--price')) {
  resolveWidth(field);

  field.addEventListener('input', () => resolveWidth(field));
}
