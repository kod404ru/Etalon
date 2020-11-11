document.addEventListener('DOMContentLoaded', function (event) {
	"use strict"
	//Проверка является ли устройство пользователя смартфоном==================================

	// 	let isMobile = {
	// 	Android: function() {return navigator.userAgent.match(/Android/i);},
	// 	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	// 	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	// 	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	// 	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	// 	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
	// };


	//header buger===============================================================
	const headerBurgerBtn = document.querySelector('#headerBurgerBtn'),
		headerBlock = document.querySelector('#headerBlock'),
		mainPage = document.querySelector('#page')

	headerBurgerBtn.addEventListener('click', function () {
		this.classList.toggle('on')
		if (this.classList.contains('on')) {
			headerBlock.classList.add('on')
			document.body.classList.add('body-lock')
			mainPage.classList.add('shadow')
		} else {
			headerBlock.classList.remove('on')
			document.body.classList.remove('body-lock')
			mainPage.classList.remove('shadow')
		}
	})

	mainPage.addEventListener('click', function () {
		if (this.classList.contains('shadow')) {
			headerBurgerBtn.classList.remove('on')
			headerBlock.classList.remove('on')
			document.body.classList.remove('body-lock')
			this.classList.remove('shadow')
		}
	})
	//price-tab===============================================================================
	const priceSwitchList = document.querySelectorAll('.price__switch'),
		priceSlideList = document.querySelectorAll('.slide-price')


	for (let i of priceSwitchList) {
		i.addEventListener('click', function () {
			for (let j of priceSwitchList) {
				j.classList.remove('active')
			}
			this.classList.add('active')
			let slideNumber = this.dataset.number
			for (let a of priceSlideList) {
				a.classList.remove('active')
			}
			priceSlideList[slideNumber].classList.add('active')
		})
	}






});