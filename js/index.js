'use strict';

const header = document.querySelector('.header');
const scrollDownArrowBtn = document.querySelector('.down-block');
const arrowDown = document.querySelector('#scroll-down');
const arrowUp = document.querySelector('#scroll-up');
const menuDown = document.querySelector('.mobile-menu__pad-img');
const menuUp = document.querySelector('.overlay__pad-img');
const overlay = document.querySelector('.overlay');

function closePadMenu() {
	overlay.style.height = '0%';
	console.log(event.target);
}
function openPadMenu() {
	overlay.style.height = '100%';
}

function hideArrowDownMenu() {
	if ((overlay.style.height = '100%')) {
		menuDown.style.display = 'none';
	}
}

function showArrowDownMenu() {
	if ((overlay.style.height = '0%')) {
		menuDown.style.display = 'block';
	}
}

function addFixedForHeader() {
	if (window.pageYOffset < 1) {
		header.classList.remove('header_active');
	}
	if (window.pageYOffset > 1) {
		header.classList.add('header_active');
	}
}

function scrollDown() {
	if (arrowDown || event.target.closest('.down-block')) {
		if (document.documentElement.clientWidth < 624) {
			window.scrollBy({
				top: 602,
				left: 0,
				behavior: 'smooth',
			});
		}
		if (document.documentElement.clientWidth > 624) {
			window.scrollBy({
				top: 800,
				left: 0,
				behavior: 'smooth',
			});
		}
	}
}

function showFixedUpArrow() {
	if (window.pageYOffset > 500) {
		arrowUp.classList.add('scroll-up');
		arrowUp.firstElementChild.classList.add('scroll-up__btn_active');
	}
	if (window.pageYOffset < 500) {
		arrowUp.classList.remove('scroll-up');
		arrowUp.firstElementChild.classList.remove('scroll-up__btn_active');
	}
}

function scrollUp() {
	if (arrowUp) {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}
}
arrowUp.addEventListener('click', scrollUp);
arrowDown.addEventListener('click', scrollDown);
window.addEventListener('scroll', showFixedUpArrow);
window.addEventListener('scroll', addFixedForHeader);
scrollDownArrowBtn.addEventListener('click', scrollDown);

menuUp.addEventListener('click', showArrowDownMenu);
menuDown.addEventListener('click', hideArrowDownMenu);
menuUp.addEventListener('click', closePadMenu);
menuDown.addEventListener('click', openPadMenu);
