window.onload = function() {

  // проверка кнопки
  const btn = document.querySelector('.btn-wrapper #btn');

  if ( btn ) {
    if ( btn.tagName === 'A') {
      console.log(`Кнопка - ок ( <a> )`);
    } else {
      console.error(`Кнопка - не <a>!`);
    }

		if ( btn.hash === '#%3CTARIF_YES_URL%3E' ) {
			console.log('Атрибут href у кнопки - ок');
		} else {
			console.error('Атрибут href у кнопки неверный или отсутствует ( должен быть #<TARIF_YES_URL> )');
		}

    const btnWidth = Math.floor(parseFloat(getComputedStyle(btn).width));
    const btnHeight = Math.floor(parseFloat(getComputedStyle(btn).height));

    if ( btnWidth === Math.floor( window.innerWidth * 0.9 ) &&
        btnHeight === Math.floor( window.innerHeight * 0.175 ) ) {
      console.log(`Размеры кнопки - ок ( 17.5x90 )`);
    } else {
      console.error(`Размер кнопки не 20x90!`);
    }

    const cancelBtn = btn.nextElementSibling;

		if ( cancelBtn.firstElementChild.tagName === 'A' ) {
			console.log('Кнопка отмены - ок ( <a> )');
		} else {
			console.error('Кнопка отмены не <a>');
		}

		if ( cancelBtn.firstElementChild.hash === '#%3CTARIF_NO_URL%3E' ) {
			console.log('Атрибут href у кнопки отмены - ок');
		} else {
			console.error('Атрибут href у кнопки отмены неверный или отсутствует ( должен быть #<TARIF_NO_URL> )');
		}

		const cancelBtnMargin = parseInt(getComputedStyle(cancelBtn.firstElementChild).marginTop);

		if ( cancelBtnMargin >= 15 && cancelBtnMargin <= 80 ) {
			console.log(`Расстояние между кнопкой и кнопкой отмены - ок ( ${cancelBtnMargin}px )`);
		} else {
			console.error(`Расстояние между кнопкой и кнопкой отмены менее 15px, либо более 80px`);
		}
  }

	// проверка верхней оферты

	const offerTop = document.querySelector('.offer');
	const offerTopPadding = parseInt(getComputedStyle(offerTop).padding);
	const offerTopBG = getComputedStyle(offerTop).backgroundColor;
	const offerTopAlign = getComputedStyle(offerTop).textAlign;

	if ( offerTopPadding >= 2 ) {
		console.log('Паддинг в верхней оферте - ок');
	} else {
		console.error('Паддинг в верхней оферте меньше 2px');
	}

	if ( offerTopBG ) {
		console.log('Фон в верхней оферте - ок');
	} else {
		console.error('Фон в верхней оферте должен быть и быть однотонным');
	}

	if ( offerTopAlign === 'center' ) {
		console.log('Текст в верхней оферте отцентрован');
	} else {
		console.error('Текст в верхней оферте НЕ отцентрован');
	}

	// проверка изображений ( только png и jpg. svg запрещён ) + проверка отсутствия анимации

	const allElems = document.querySelectorAll('body *');
	const bgImageElems = [];
	let imagesCheck = true;
	let hasAnimation = false;

	for ( let i = 0; i < allElems.length; i++ ) {
		if ( getComputedStyle(allElems[i]).backgroundImage !== 'none' ) {
			bgImageElems.push( allElems[i] );
		}
		if ( getComputedStyle(allElems[i], ':after').backgroundImage !== 'none' ) {
			bgImageElems.push( allElems[i] );
		}
		if ( getComputedStyle(allElems[i], ':before').backgroundImage !== 'none' ) {
			bgImageElems.push( allElems[i] );
		}

		if ( getComputedStyle(allElems[i]).transitionDuration !== '0s' &&
			getComputedStyle(allElems[i], ':after').transitionDuration !== '0s' &&
		getComputedStyle(allElems[i], ':before').transitionDuration !== '0s') {
			hasAnimation = true;
		} else {
			hasAnimation = false;
		}
	}

	if ( !hasAnimation ) {
		console.log('Анимация отсутствует - ок');
	} else {
		console.error('На странице присутствует анимация');
	}

	for ( let i = 0; i < bgImageElems.length; i++ ) {
		if ( getComputedStyle(bgImageElems[i]).backgroundImage.indexOf('.png') !== -1 ||
			getComputedStyle(bgImageElems[i]).backgroundImage.indexOf('.jpg') !== -1 ||
		 	getComputedStyle(bgImageElems[i]).backgroundImage.indexOf('.jpeg') !== -1 ) {
				continue;
		} else if ( getComputedStyle(bgImageElems[i], ':after').backgroundImage.indexOf('.png') !== -1 ||
			getComputedStyle(bgImageElems[i], ':after').backgroundImage.indexOf('.jpg') !== -1 ||
		 	getComputedStyle(bgImageElems[i], ':after').backgroundImage.indexOf('.jpeg') !== -1 ) {
				continue;
		} else if ( getComputedStyle(bgImageElems[i], ':before').backgroundImage.indexOf('.png') !== -1 ||
			getComputedStyle(bgImageElems[i], ':before').backgroundImage.indexOf('.jpg') !== -1 ||
		 	getComputedStyle(bgImageElems[i], ':before').backgroundImage.indexOf('.jpeg') !== -1 ) {
				continue;
		} else {
			console.error('Имеются инлайновые картинки или картинки в ином формате ( допускается только png и jpg )');
			break;
			imagesCheck = false;
		}
		imagesCheck = true;
	}

	if ( imagesCheck ) {
		console.log(`Картинки и иконки - ок`);
	}

	// проверка отсутствия скриптов

	const scripts = document.querySelectorAll('script');

	if ( scripts.length !== 0 ) {
		console.log('Скрипты отсутствуют - ок');
	} else {
		console.error('На странице присутствуют скрипты');
	}

	// проверка текста в офертах

	const offerTopText = offerTop.firstElementChild;
	const btnText = btn.querySelector('span').textContent.trim();

	const topText1 = `Нажатием на кнопку "${btnText}" Вы подтверждаете свое согласие с подключением подписки SUBNAME и <a href="http://podpiski.megafon.ru/col/mds4/web/jsp/files/oferta.pdf">Условиями предоставления подписки</a>. Стоимость подписки SUBPRICE.ACCOUNT. Услуга предоставляется Контент-провайдером PROVIDER.`;
	const topText2 = `SERVICEPRICE.ACCOUNT. Доступ до EXPIRE-DATE.`;

	if ( offerTopText.innerHTML === topText1 || offerTopText.innerHTML === topText2 ) {
		console.log('Текст в верхней оферте - ок');
	} else {
		console.error('неверный текст в верхней оферте');
	}

	const offerBottomText = document.querySelector('.rules p').innerHTML;

	const bottomText1 = 'Информация для абонентов - тел. 8 800 500-25-43 (бесплатно в домашнем регионе) | <a href="ВАША ССЫЛКА НА ПРАВИЛА ПОДПИСКИ">Правила подписки поставщика услуг</a> | <a href="#<LK_LINK_URL>">Личный кабинет</a>';

	const bottomText2 = `Нажатием на кнопку "${btnText}" Вы подтверждаете свое согласие с покупкой SERVICENAME и <a href="http://moscow.megafon.ru/download/~federal/oferts/short_numbers/Oferta_Short_numbers_stf.pdf">Условиями предоставления услуги</a>. Услуга предоставляется Контент-провайдером PROVIDER. Информация для абонентов - тел. 8 800 500-25-43 (бесплатно в домашнем регионе) | <a href="ВАША ССЫЛКА НА ПРАВИЛА ПОКУПКИ">Правила покупки поставщика услуг</a> | <a href="#<LK_LINK_URL>">Личный кабинет</a>`;

	if ( offerBottomText === bottomText1 || offerBottomText === bottomText2 ) {
		console.log('Текст в нижней оферте - ок');
	} else {
		console.error('неверный текст в нижней оферте');
	}

  // проверка футера
	const footer = document.querySelector('.rules');
	const footerInner = footer.querySelector('.inner');
  const footerElems = footer.querySelectorAll('*');
	const footerText = footer.querySelector('p');
	const footerPadding = parseInt(getComputedStyle(footerInner).padding);

	if ( getComputedStyle(footerText).textAlign !== 'center' ) {
		console.error('Текст в футере не отцентрован');
	} else {
		console.log('Текст в футере отцентрован - ок');
	}

	if ( getComputedStyle(footerInner).backgroundColor === 'none' ) {
		console.error('Футер должен иметь однотонный фон');
	} else {
		console.log('Фон в футере - ок');
	}

	if ( footerPadding < 2 ) {
		console.error('Паддинг в футере должен быть минимум 2px');
	} else {
		console.log('Паддинг в футере - ок');
	}

  (function checkFooter() {
    for (let i = 0; i < footerElems.length; i++) {
      let footerElemFontSize = parseInt(getComputedStyle(footerElems[i]).fontSize);
      if ( footerElemFontSize < 9 ) {
        console.error(`Размер шрифта в футере меньше 9px`);
        return;
      }
    }
    console.log(`Размер шрифта в футере - ок`);
  })()


}
