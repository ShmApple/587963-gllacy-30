const feedbackLink=document.querySelector(".contacts__feedback");if(feedbackLink){const e=document.querySelector(".feedback-modal"),o=e.querySelector(".modal__wrapper"),s=e.querySelector(".modal__close-btn"),t=e.querySelector(".feedback-modal__form"),a=e.querySelector("#user-name"),r=e.querySelector("#feedback-email"),c=e.querySelector("#textarea-feedback");feedbackLink.addEventListener("click",function(o){o.preventDefault(),e.classList.add("modal--shown"),a.focus()}),s.addEventListener("click",function(o){o.preventDefault(),e.classList.remove("modal--shown"),loginPopup.classList.remove("modal-error")}),t.addEventListener("submit",function(e){a.value&&r.value&&c.value||(e.preventDefault(),o.classList.remove("modal__wrapper--error"),o.offsetWidth=o.offsetWidth,o.classList.add("modal__wrapper--error"))}),window.addEventListener("keydown",function(s){27===s.keyCode&&e.classList.contains("modal--shown")&&(s.preventDefault(),e.classList.remove("modal--shown"),o.classList.remove("modal__wrapper--error"))})}const loginPopup=document.querySelector(".nav-buttons__dropdown--login");if(loginPopup){const e=loginPopup.querySelector(".dropdown__form"),o=loginPopup.querySelector("#login"),s=loginPopup.querySelector("#password");e.addEventListener("submit",function(e){o.value&&s.value||(e.preventDefault(),loginPopup.classList.remove("modal__wrapper--error"),loginPopup.offsetWidth=loginPopup.offsetWidth,loginPopup.classList.add("modal__wrapper--error"))})}const searchPopup=document.querySelector(".nav-buttons__dropdown--search");if(searchPopup){const e=searchPopup.querySelector(".dropdown__form"),o=e.querySelector("#search");e.addEventListener("submit",function(e){o.value||(e.preventDefault(),searchPopup.classList.remove("modal__wrapper--error"),searchPopup.offsetWidth=loginPopup.offsetWidth,searchPopup.classList.add("modal__wrapper--error"))})}const yaMap=document.querySelector("#map");if(yaMap){var myMap;function init(){document.querySelector(".contacts__map").addEventListener("click",function(e){e.preventDefault()}),(myMap=new ymaps.Map("map",{center:[59.939437,30.329669],zoom:16})).controls.add(new ymaps.control.ZoomControl),myMap.behaviors.disable("scrollZoom"),myPlacemark=new ymaps.Placemark([59.938635,30.323118],{hintContent:"ул. Большая Конюшенная, 19/8"},{iconLayout:"default#image",iconImageHref:"img/icons/pin-map.svg",iconImageSize:[80,140],iconImageOffset:[-30,-153]}),myMap.geoObjects.add(myPlacemark)}ymaps.ready(init)}const carousel=document.querySelector(".carousel");if(carousel){const e=carousel.querySelector("#slide-1"),o=carousel.querySelector("#slide-2"),s=carousel.querySelector("#slide-3"),t=carousel.querySelector("#control-1"),a=carousel.querySelector("#control-2"),r=carousel.querySelector("#control-3"),c=document.querySelector(".main-body");t.addEventListener("click",function(l){l.preventDefault(),e.classList.add("carousel-slide--active"),t.classList.add("controls__link--active"),o.classList.remove("carousel-slide--active"),a.classList.remove("controls__link--active"),s.classList.remove("carousel-slide--active"),r.classList.remove("controls__link--active"),c.classList.add("main-body--bg-1"),c.classList.remove("main-body--bg-2"),c.classList.remove("main-body--bg-3")}),a.addEventListener("click",function(l){l.preventDefault(),o.classList.add("carousel-slide--active"),a.classList.add("controls__link--active"),e.classList.remove("carousel-slide--active"),t.classList.remove("controls__link--active"),s.classList.remove("carousel-slide--active"),r.classList.remove("controls__link--active"),c.classList.add("main-body--bg-2"),c.classList.remove("main-body--bg-1"),c.classList.remove("main-body--bg-3")}),r.addEventListener("click",function(l){l.preventDefault(),s.classList.add("carousel-slide--active"),r.classList.add("controls__link--active"),o.classList.remove("carousel-slide--active"),a.classList.remove("controls__link--active"),e.classList.remove("carousel-slide--active"),t.classList.remove("controls__link--active"),c.classList.add("main-body--bg-3"),c.classList.remove("main-body--bg-1"),c.classList.remove("main-body--bg-2")})}const resolveWidth=e=>{const{length:o}=e.value.toString();e.style.width=`${8*o}px`};for(const e of document.querySelectorAll(".filter-form__input--price"))resolveWidth(e),e.addEventListener("input",()=>resolveWidth(e));
