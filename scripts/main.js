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
		===
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

	$('.bid__unit--slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: false,
		nextArrow: false
	})

	//example section====================================================
	$('.example__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		prevArrow: false,
		nextArrow: false,
		// autoplay: true,
		// autoplaySpeed: 1500,
		cssEase: 'ease',
		responsive: [
			{
				breakpoint: 1207,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})





	//bid section form===============================================================================
	const bidForm = document.querySelector('#bidForm'),
		bidUserNameInput = document.querySelector('#bidUserNameInput'),
		bidUserPhoneInput = document.querySelector('#bidUserTelInput'),
		bidCheckbox = document.querySelector('#bidAgreedCheckbox')

	//maska for phone input===================================================
	let bidUserTelInput = document.querySelectorAll('input[type="tel"]'),
		im = new Inputmask('+7 (999) 999-99-99')
	im.mask(bidUserTelInput)

	//=========================================================================
	bidUserNameInput.addEventListener('focus', function () {
		this.placeholder = ''
		this.classList.remove('valid', 'invalid')
	})

	bidUserNameInput.addEventListener('blur', function () {
		if (this.value.length > 0) {
			this.classList.add('valid')
		} else {
			this.classList.add('invalid')
			this.placeholder = 'Имя'
		}
	})

	bidUserPhoneInput.addEventListener('focus', function () {
		this.classList.remove('valid', 'invalid')
	})
	bidUserPhoneInput.addEventListener('blur', function () {
		let lastSymbol = this.value.slice(17)
		if (this.value.length == 18 && lastSymbol != '_') {
			this.classList.add('valid')
		} else {
			this.classList.add('invalid')
		}
	})

	//====================================================================

	bidForm.addEventListener('submit', function (e) {
		e.preventDefault()

		if (bidCheckbox.checked) {
			bidCheckbox.parentElement.classList.remove('invalid')
			bidCheckbox.classList.add('valid')
		} else {
			bidCheckbox.parentElement.classList.add('invalid')
		}


		if (!bidCheckbox.classList.contains('valid') &&
			!bidUserNameInput.classList.contains('valid') &&
			!bidUserPhoneInput.classList.contains('valid')) {

			switch (true) {
				case !bidCheckbox.classList.contains('valid'):
					bidCheckbox.parentElement.classList.add('invalid')
				case !bidUserNameInput.classList.contains('valid'):
					bidUserNameInput.classList.add('invalid')
				case !bidUserPhoneInput.classList.contains('valid'):
					bidUserPhoneInput.classList.add('invalid')
			}
		}

	})






	//example section=================================================================================
	$('.example__slider').slick('setPosition')


	const exampleBtnList = document.querySelectorAll('.example__btn'),
		exampleSliderList = document.querySelectorAll('.example__slider')

	for (let btn of exampleBtnList) {
		btn.addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				for (let item of exampleBtnList) {
					item.classList.remove('active')
					this.classList.add('active')
					let dataNumber = this.dataset.numb
					for (let i of exampleSliderList) {
						i.classList.remove('active')
					}
					exampleSliderList[dataNumber].classList.add('active')
				}
			}
		})
	}

	const mediaQuery2 = window.matchMedia('(max-width: 992px)')

	function showBackfaceOnTouch(e) {

		if (e.matches) {
			let sliderList = document.querySelectorAll('.unit-example')

			for (let item of sliderList) {
				item.addEventListener('click', function () {

					let sliderItemBackface = document.querySelectorAll('.unit-example__backface'),
						sliderItemTitle = document.querySelectorAll('.unit-example__title')

					if (!this.lastElementChild.classList.contains('active')) {
						for (let i of sliderItemBackface) {
							i.classList.remove('active')
						}
						for (let j of sliderItemTitle) {
							j.classList.remove('hidden')
						}
					}

					this.lastElementChild.classList.toggle('active')
					this.firstElementChild.classList.toggle('hidden')
				})
			}
		}
	}
	mediaQuery2.addEventListener('change', showBackfaceOnTouch)
	showBackfaceOnTouch(mediaQuery2)


	//=====================================================================


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