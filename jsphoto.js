/**
 * Номер слайда.
 *
 * @type {number}
 */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i = 1;
	var slides = document.getElementsByClassName('mySlides');
	console.log(slides);
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}

	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

/**
 * Функция, которая показывает слайд с выбранным индексом.
 *
 * @param {number} index      индекс слайда.
 *
 * @return {void}
 */
const showSlide = index => {
	/**
	 * Массив слайдов в галлерее.
	 *
	 * @type {NodeListOf<Element>}
	 */
	const slides = document.querySelectorAll('.mySlides');

	/**
	 * Массив точек (тех, которые переключают слайды).
	 *
	 * @type {NodeListOf<Element>}
	 */
	const dots = document.querySelectorAll('.dot');

	/**
	 * Индекс, на который мы будем опираться.
	 *
	 * @type {number}
	 */
	let targetIndex = index;

	/**
	 * Если целевой индекс вышел за рамки массива слайдов, став слишком большим,
	 * то делаем его равным 1.
	 *
	 * Тем самым реализуем переход с последнего слайда на первый.
	 */
	if (targetIndex > slides.length) {
		targetIndex = 1;
	}

	/**
	 * Если целевой индекс вышел за рамки массива слайдов, став слишком маленьким,
	 * то делаем его равным длине массива слайдов.
	 *
	 * Тем самым реализуем переход с первого слайда на последний.
	 */
	if (targetIndex < 1) {
		targetIndex = slides.length;
	}

	/**
	 * Проходимся по всем слайдам и применяем стили.
	 */
	slides.forEach((slide, index) => {
		/**
		 * Если индекс слайда совпадает с целевым индексом,
		 * то применям следующие стили:
		 */
		if (index === targetIndex) {
			slide.setAttribute('style', 'display: block;');
			return;
		}

		/**
		 * Иначе применяем следующие стили:
		 */
		slide.setAttribute('style', 'display: none;');
	});

	dots.forEach((dot, index) => {
		if (index === targetIndex) {
			dot.classList.add('active');
			return;
		}
	});
};
