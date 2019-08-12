window.onload = function() {

	// Проверка doctype

	const docsDoctype = `<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">`;

	const nodeDoctype = document.doctype;
	const pageDoctype = `<!DOCTYPE ${nodeDoctype.name} PUBLIC "${nodeDoctype.publicId}" "${nodeDoctype.systemId}">`;

	if ( docsDoctype !== pageDoctype ) {
		console.error('Неверный doctype');
	}


//	Проверка кнопки

	const btn = document.querySelector('.btn-wrapper .btn');

	if ( btn.tagName !== 'A' ) {
		console.error('Кнопка должна быть <a>');
	}

	if ( btn.attributes.href.value !== '{{ url }}' ) {
		console.error('Href у кнопки должен быть {{ url }}');
	}

	if ( getComputedStyle(btn.firstElementChild).fontFamily.indexOf(`"Open Sans", sans-serif`) == -1 ) {
		console.error('Шрифт на кноке должен быть Open Sans');
	}

	if ( parseInt(getComputedStyle(btn.firstElementChild).fontSize) < 32 ) {
		console.error('Шрифт на кноке должен быть не менее 32px');
	}

	if ( getComputedStyle(btn).borderRadius === '50%' ) {
		console.error('Круглая кнопка запрещена');
	}

	const btnWidth = Math.floor(parseFloat(getComputedStyle(btn).width));
	const btnHeight = Math.floor(parseFloat(getComputedStyle(btn).height));

	if ( btnWidth > Math.floor( window.innerWidth * 0.8 ) || btnHeight > Math.floor( window.innerHeight * 0.3 ) ) {
		console.error(`Размер кнопки не 30x80!`);
	}


	// проверка шрифтов на странице (везде должен использоваться Open Sans)

	function detectFonts () {

		let fonts = [];
		for (let node of document.querySelectorAll('*')) {

			if (!node.style) continue;

			for (let pseudo of ['', ':before', ':after']) {
				let fontFamily = getComputedStyle(node, pseudo).fontFamily;
				fonts = fonts.concat(fontFamily.split(/\n*,\n*/g));
			}
		}

		// Remove duplicate elements from fonts array
		// and remove the surrounding quotes around elements
		return [...new Set(fonts)].map(font => font.replace(/^\s*['"]([^'"]*)['"]\s*$/, '$1').trim());
	}

	function checkFonts( fontsArray ) {
		for ( let i = 0; i < fontsArray.length; i++ ) {
			if ( fontsArray[i] === 'Open Sans' || fontsArray[i] === 'serif' || fontsArray[i] === 'sans-serif' ) {
				continue;
			} else {
				console.error(`Используется кастомный шрифт!`);
				return;
			}
		}
	}

	checkFonts( detectFonts() );

//	Проверка цены

	const priceText = document.querySelector('.price span');

	if ( parseInt(getComputedStyle(priceText).fontSize) < 16 ) {
		console.error('Размер шрифта у цены должен быть не меньше 16px');
	}

	if ( parseInt(getComputedStyle(priceText).marginTop) !== 5 ) {
		console.error('Расстояние между ценой и кнопкой должно быть 5px');
	}

	if ( getComputedStyle(priceText).backgroundColor === 'none' ) {
		console.error('Цена должна иметь непрозрачную заливку фона');
	}

//	Проверка футера
	const footerText = document.querySelector('.rules p');

	if ( parseInt(getComputedStyle(footerText).fontSize) < 16 ) {
		console.error('Размер шрифта в футере должен быть не меньше 16px');
	}

	if ( getComputedStyle(footerText).fontFamily.indexOf(`"Open Sans", sans-serif`) == -1 ) {
		console.error('Шрифт футере должен быть "Open Sans, sans-serif"');
	}

	// проверка изображений ( только png и jpg. svg запрещён ) + проверка отсутствия анимации

	const allElems = document.querySelectorAll('body *');
	const bgImageElems = [];
	let imagesCheck = true;
	let hasAnimation = false;

	for ( let i = 0; i < allElems.length; i++ ) {
		let elemBg = getComputedStyle(allElems[i]).backgroundImage;
		let elemBgAfter = getComputedStyle(allElems[i], ':after').backgroundImage;
		let elemBgBefore = getComputedStyle(allElems[i], ':before').backgroundImage;

		if ( elemBg !== 'none' && elemBg.indexOf('linear-gradient') == -1 ) {
			bgImageElems.push( allElems[i] );
		}
		if ( elemBgAfter !== 'none' && elemBgAfter.indexOf('linear-gradient') == -1 ) {
			bgImageElems.push( allElems[i] );
		}
		if ( elemBgBefore !== 'none' && elemBgBefore.indexOf('linear-gradient') == -1 ) {
			bgImageElems.push( allElems[i] );
		}

		hasAnimation = getComputedStyle(allElems[i]).transitionDuration !== '0s' &&
			getComputedStyle(allElems[i], ':after').transitionDuration !== '0s' &&
			getComputedStyle(allElems[i], ':before').transitionDuration !== '0s';
	}

	if ( hasAnimation ) {
		console.error('На странице присутствует анимация');
	}

	for ( let i = 0; i < bgImageElems.length; i++ ) {
		let elemBg = getComputedStyle(bgImageElems[i]).backgroundImage;
		let elemBgAfter = getComputedStyle(bgImageElems[i], ':after').backgroundImage;
		let elemBgBefore = getComputedStyle(bgImageElems[i], ':before').backgroundImage;

		if ( elemBg.indexOf('.png') !== -1 ||
			elemBg.indexOf('.jpg') !== -1 ||
			elemBg.indexOf('.jpeg') !== -1 ) {
			continue;
		} else if ( elemBgAfter.indexOf('.png') !== -1 ||
			elemBgAfter.indexOf('.jpg') !== -1 ||
			elemBgAfter.indexOf('.jpeg') !== -1 ) {
			continue;
		} else if ( elemBgBefore.indexOf('.png') !== -1 ||
			elemBgBefore.indexOf('.jpg') !== -1 ||
			elemBgBefore.indexOf('.jpeg') !== -1 ) {
			continue;
		} else {
			imagesCheck = false;
			console.error('Имеются инлайновые картинки или картинки в ином формате ( допускается только png и jpg )');
			break;
		}
	}


//	Проверка отсутствия скриптов

	const scripts = document.querySelectorAll('script');

	if ( !!scripts.length ) {
		console.error('Присутствуют скрипты');
	}


};
