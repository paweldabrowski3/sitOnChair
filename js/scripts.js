//========================================
//main slider
//========================================
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.querySelector('#mainSlider');
		var prev = slider.querySelector(':scope .main-slider-prev');
		var next = slider.querySelector(':scope .main-slider-next');
		var slides = slider.querySelectorAll(':scope .main-slider-slide');
		var currentSlide = 0; //obecny slide - domyslnie pierwszy
		var timer = null; //dla intervala
		var timeDelay = 50000; //czas automatycznego przelaczania

		var timeoutNextSlide = function() {
			timer = setTimeout(function() {
				next.click();
			}, timeDelay);
		};

		var prevSlide = function() {
			//robie petle po slide, wylaczajac im klase active
			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}
			currentSlide--;

			//jezeli licznik jest mniejszy od indeksu pierwszego slide
			//wracamy na ostatni slide (by dzialalo w petli)
			if (currentSlide < 0) {
				currentSlide = slides.length-1;
			}

			//dodaje odpowiedniemu slideowi klase active
			slides[currentSlide].classList.add('active');

			//czyszcze timeout by po recznym kliknieciu zaczac
			//odmiezac czas od poczatku (jezeli tego nie zrobie, to czlowiek
			//kliknie na next, a np w tym samym czasie poleci setTimeout ktory
			//stwierdzi, ze wlasnie przyszla pora sie odpalic
			clearTimeout(timer);
			timeoutNextSlide();
		};

		var nextSlide = function() {
			//console.log('next');
			//robie petle po slide, wylaczajac im klase active
			for (var i=0; i<slides.length; i++) {
				slides[i].classList.remove('active');
			}

			//zwiekszam licznik
			currentSlide++;

			//jezeli licznik jest wiekszy od indeksu ostatniego slide
			//wracamy do poczatku (by dzialalo w petli)
			if (currentSlide > slides.length-1) {
				currentSlide = 0;
			}
			//dodaje odpowiedniemu slideowi klase active
			slides[currentSlide].classList.add('active');

			//czyszcze timeout by po recznym kliknieciu zaczac
			//odmiezac czas od poczatku (jezeli tego nie zrobie, to czlowiek
			//kliknie na next, a np w tym samym czasie poleci setTimeout ktory
			//stwierdzi, ze wlasnie przyszla pora sie odpalic
			clearTimeout(timer);
			timeoutNextSlide();
		};

		//odpalam timer do automatycznego przelaczania slidow
		timeoutNextSlide();

		//...i oczywiscie podpinam eventy pod strzalki
		prev.addEventListener('click', prevSlide);
		next.addEventListener('click', nextSlide);

	});

})();

//========================================
//main 3 boxes
//========================================
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var boxes = document.querySelectorAll('.picture-cnt');
		var markBox = function(e) {
			e.preventDefault();

			for (var i=0; i<boxes.length; i++) {
				boxes[i].classList.remove('active');
			}
			//e.target = klikniety element - tutaj obrazek w linku
			//e.currentTarget = element, ktory wywolal event - czyli .box - nasz link
			e.currentTarget.classList.add('active');
		};

		for (var i=0; i<boxes.length; i++) {
			boxes[i].addEventListener('click', markBox)
		}
	});
})();

//Ukrywanie bloku z nazwą

document.addEventListener("DOMContentLoaded", function(event) {

	var infoBoxLeft = document.querySelector('.info-box-left');
	var infoBoxRight = document.querySelector('.info-box-right');

	var textBlockLeft = document.querySelector('.text-box-left');
	var textBlockRight = document.querySelector('.text-box-right');

	infoBoxLeft.addEventListener('mouseover', function () {
		textBlockLeft.style.display = 'none';
    });
	infoBoxLeft.addEventListener('mouseout', function () {
		textBlockLeft.style.display = 'inline-block';

    });

    infoBoxRight.addEventListener('mouseover', function () {
        textBlockRight.style.display = 'none';

    });
    infoBoxRight.addEventListener('mouseout', function () {
        textBlockRight.style.display = 'inline-block';
    })

});

document.addEventListener("DOMContentLoaded", function(event) {


	//Wybierz rodzaj krzesła
	var selectTypeArrow = document.querySelector('.select-type-arrow');
	var selectTypeList = document.querySelector('.select-type-ul');

	selectTypeArrow.addEventListener('click', function(){
		selectTypeList.classList.toggle('show-calc');
	});

	// Wybierz kolor
	var selectColorArrow = document.querySelector('.select-color-arrow');
	var selectColorList = document.querySelector('.select-color-ul');

    selectColorArrow.addEventListener('click', function(){
        selectColorList.classList.toggle('show-calc');
    });

    // Wybierz materiał
	var selectMaterialArrow = document.querySelector('.select-material-arrow');
	var selectMaterialList = document.querySelector('.select-material-list');

    selectMaterialArrow.addEventListener('click', function(){
        selectMaterialList.classList.toggle('show-calc');
    });

    // Podsumowanie

	// Elementy
	// Prices:
	var clairPrise = 200;
	var margaritaPrise = 250;
	var selenaPrise = 400;
	var color1Prise = 50;
	var color2Prise = 80;
	var color3Prise = 100;
    var material1Prise = 300;
    var material2Prise = 500;
    var tansportPrise = 80;

	var clair = document.getElementById('clair');
	var margarita = document.getElementById('margarita');
	var selena = document.getElementById('selena');
	var summaryType = document.getElementById('summary-type');
	var sumTypeValue = document.querySelector('.value-type');
	var sumColor = document.querySelector('.color');
	var color1 = document.querySelector('.color-1');
    var color2 = document.querySelector('.color-2');
    var color3 = document.querySelector('.color-3');
	var sumColorValue = document.querySelector('.value-color');
	var material1 = document.querySelector('.material-1');
    var material2 = document.querySelector('.material-2');
    var sumPatternValue = document.querySelector('.value-pattern');
    var sumPattern = document.querySelector('.pattern');
    var selectPatternList = document.querySelector('.select-material-list');
    var sumTransport = document.querySelector('.transport');
    var sumTransportValue = document.querySelector('.value-transport');
    var sumAll = document.querySelector('.sum');
    var typeLabel = document.querySelector('.type-label');
    var colorLabel = document.querySelector('.color-label');
    var materialLabel = document.querySelector('.material-label');
	var checkboxTransport = document.querySelector('.ifChecked');



    var totalType = 0;
    var totalColor = 0;
    var totalPattern = 0;
    var totalTransport = 0;


	clair.addEventListener('click', function (){

		summaryType.innerHTML = 'Clair';
        sumTypeValue.innerHTML = clairPrise;
        selectTypeList.classList.toggle('show-calc');
        typeLabel.innerText = summaryType.innerText;

        totalType = parseInt(sumTypeValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;

	});


    margarita.addEventListener('click', function(){
        summaryType.innerHTML = 'Margarita';
        sumTypeValue.innerHTML = margaritaPrise;
        selectTypeList.classList.toggle('show-calc');
        typeLabel.innerText = summaryType.innerText;

        totalType = parseInt(sumTypeValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;

    });

    selena.addEventListener('click', function(){
        summaryType.innerHTML = 'Selena';
        sumTypeValue.innerHTML = selenaPrise;
        selectTypeList.classList.toggle('show-calc');
        typeLabel.innerText = summaryType.innerText;

        totalType = parseInt(sumTypeValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;

    });

    color1.addEventListener('click', function () {
		sumColor.innerHTML = color1.innerHTML;
		selectColorList.classList.toggle('show-calc');
        sumColorValue.innerHTML = color1Prise;
        colorLabel.innerText = sumColor.innerText;

        totalColor = parseInt(sumColorValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;


    });

    color2.addEventListener('click', function () {
        sumColor.innerHTML = color2.innerHTML;
        selectColorList.classList.toggle('show-calc');
        sumColorValue.innerHTML = color2Prise;
        colorLabel.innerText = sumColor.innerText;

        totalColor = parseInt(sumColorValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;
    });

    color3.addEventListener('click', function () {
        sumColor.innerHTML = color3.innerHTML;
        selectColorList.classList.toggle('show-calc');
        sumColorValue.innerHTML = color3Prise;
        colorLabel.innerText = sumColor.innerText;

        totalColor = parseInt(sumColorValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;
    });

    material1.addEventListener('click', function () {
        sumPattern.innerHTML = material1.innerHTML;
        selectPatternList.classList.toggle('show-calc');
        sumPatternValue.innerHTML = material1Prise;
        materialLabel.innerText = sumPattern.innerText;

        totalPattern = parseInt(sumPatternValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;

    });

    material2.addEventListener('click', function () {
        sumPattern.innerHTML = material2.innerHTML;
        selectPatternList.classList.toggle('show-calc');
        sumPatternValue.innerHTML = material2Prise;
        materialLabel.innerText = sumPattern.innerText;

        totalPattern = parseInt(sumPatternValue.innerText);
        sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;
    });


    var aaa = document.querySelector('.checkbox-calc label');

    aaa.addEventListener('click', function () {







        // sumTransportValue.innerHTML = checkboxTransport.dataset.transportPrice;
        //
        // totalTransport = parseInt(sumTransportValue.innerText);
        // sumAll.innerText = totalType + totalColor + totalPattern + totalTransport;
    });


















});
