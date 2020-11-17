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
	//на 3 брейк-поинте перекинуть блок с телефоном и колбэком 
	const headerDataCompanyUnit = document.querySelector('.header__data-company'),
		md3 = window.matchMedia('(max-width: 768px')

	function handleTabletChange(e) {
		if (e.matches) {
			headerBlock.prepend(headerDataCompanyUnit)
		} else {
			headerBurgerBtn.before(headerDataCompanyUnit)
		}
	}

	md3.addEventListener('change', handleTabletChange)
	handleTabletChange(md3)
	//добавление линии для header'a при условии прокрутки страницы
	window.addEventListener('scroll', function () {
		const headerInner = document.querySelector('.header__inner')
		if (window.pageYOffset >= 700) {
			headerInner.classList.add('down')
		} else {
			headerInner.classList.remove('down')
		}
	})
	//price-tab===============================================================================
	const priceSwitchList = document.querySelectorAll('.price__switch'),
		priceSlideList = document.querySelectorAll('.slide-price')


	for (let i of priceSwitchList) {
		i.addEventListener('click', function () {
			if (this.classList.contains('active')) {
			} else {
				for (let j of priceSwitchList) {
					j.classList.remove('active')
				}
				this.classList.add('active')
				let slideNumber = this.dataset.number
				for (let a of priceSlideList) {
					a.classList.remove('active')
				}
				priceSlideList[slideNumber].classList.add('active')
			}
		})
	}

	const bidForm = document.querySelector('#bidForm'),
		bidUserNameInput = document.querySelector('#bidUserNameInput'),
		bidUserPhoneInput = document.querySelector('#bidUserTelInput')


	//slider bid-section=============================================
	$('.clients__slider').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 900,
		prevArrow: false,
		nextArrow: false,
		cssEase: 'ease'
	})




	//кнопка для прокрутки до header'а
	const upToHeaderBtn = document.querySelector('.footer__up-btn')

	upToHeaderBtn.addEventListener('click', function (e) {
		e.preventDefault()
		const intro = document.querySelector('.intro')
		intro.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})




});