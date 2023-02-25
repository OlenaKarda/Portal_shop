// Таби
const tabNavItems = document.querySelectorAll('.tabs-products__button, .tabs-aboutus__button, .tabs-cooperation__button');
const tabItems = document.querySelectorAll('.item-tabs, .aboutus-tabs, .cooperation-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-products__button, .tabs-aboutus__button, .tabs-cooperation__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});


let swiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 1,
	spaceBetween: 10,
	centeredSlides: true,
	freeMode: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 3000,
		disableOneInteraction: false,
	},
	thumbs: {
		swiper: swiper,
	},
});

