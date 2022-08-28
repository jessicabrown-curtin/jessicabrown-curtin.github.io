const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu //
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

// Image Slider //
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

// Scroll Animation //
const flightPath = {
	curviness: 1.5,
	autoRotate: true,
	values: [{
		x: (window.innerWidth / 8),
		y: -20
	}, {
		x: (window.innerWidth / 8) * 2,
		y: 10
	}, {
		x: (window.innerWidth / 8) * 3,
		y: 100
	}, {
		x: (window.innerWidth / 8) * 4,
		y: -100
	}, {
		x: (window.innerWidth / 8) * 3,
		y: -50
	}, {
		x: (window.innerWidth / 8) * 5,
		y: 100
	}, {
		x: (window.innerWidth / 8) * 7,
		y: 0
	}, {
		x: window.innerWidth + 150,
		y: 100
	}, ]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.plane', 3, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
	triggerElement: '.animation',
	duration: 1500,
	triggerHook: 0
})

.setTween(tween)
	.addIndicators()
	.setPin('.animation')
	.addTo(controller);