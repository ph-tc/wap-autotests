// проверка наличия определённых ID и классов у тегов

if ( document.getElementById('header-block') ) {
	console.log(`присутствует элемент с id="header-block"`);
} else {
	console.error(`отсутствует элемент с id="header-block"`);
}

if ( document.querySelector('.header-text') ) {
	console.log(`присутствует элемент с классом "header-text"`);
} else {
	console.error(`отсутствует элемент с классом "header-text"`);
}

if ( document.querySelector('.age-limit') ) {
	console.log(`присутствует элемент с классом "age-limit"`);
} else {
	console.error(`отсутствует элемент с классом "age-limit"`);
}

if ( document.getElementById('main-block') ) {
	console.log(`присутствует элемент с id="main-block"`);
} else {
	console.error(`отсутствует элемент с id="main-block"`);
}

if ( document.getElementById('info-block') ) {
	console.log(`присутствует элемент с id="info-block"`);
} else {
	console.error(`отсутствует элемент с id="info-block"`);
}

if ( document.querySelector('.info-block-text') ) {
	console.log(`присутствует элемент с классом "info-block-text"`);
} else {
	console.error(`отсутствует элемент с классом "info-block-text"`);
}

if ( document.getElementById('footer-block') ) {
	console.log(`присутствует элемент с id="footer-block"`);
} else {
	console.error(`отсутствует элемент с id="footer-block"`);
}

if ( document.querySelector('.footer-text') ) {
	console.log(`присутствует элемент с классом "footer-text"`);
} else {
	console.error(`отсутствует элемент с классом "footer-text"`);
}

// проверка шрифтов на странице (везде должен использоваться Open Sans)

function detectFonts () {

  let fonts = []
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
  console.log(`Шрифты - ок! ( Везде Open Sans )`);
}

checkFonts( detectFonts() );


// проверка кнопки
const btn = document.getElementById('activation-btn');

let btnFontSize;
if (btn) {
  btnFontSize = parseInt(getComputedStyle(btn.children[0]).fontSize); 
} else {
  console.error(`У кнопки отсутствует id='activation-btn'`);
}

const price = document.querySelector('.info-block-text .price .line2');

let btnText;
if (btn) {
  btnText = btn.querySelector('.activation-btn-text'); 
} else {
  console.error(`У кнопки отсутствует id='activation-btn'`);
}

let btnTextStyles;
if (btnText) {
  btnTextStyles = getComputedStyle(btnText);
}

(function checkButton(btn) {
  if ( btn && btn.tagName === 'BUTTON') {
    console.log(`Кнопка - ок ( button )`);
  } else {
    console.error(`Кнопка - не button!`);
  }

  if ( btnFontSize >= 32 ) {
    console.log(`Шрифт на кнопке - ок ( ${ btnFontSize }px )`);
  } else {
    console.error(`Шрифт на кнопке меньше 32px!`);
  }

  const btnWidth = Math.floor(parseFloat(getComputedStyle(btn).width));
  const btnHeight = Math.floor(parseFloat(getComputedStyle(btn).height));

  if ( btnWidth === Math.floor( window.innerWidth * 0.8 ) &&
      btnHeight === Math.floor( window.innerHeight * 0.2 ) ) {
    console.log(`Размеры кнопки - ок ( 20x80 )`);
  } else {
    console.error(`Размер кнопки не 20x80!`);
  }

  const btnIconMargin = parseFloat(getComputedStyle(btn.children[0], '::after').marginLeft);

  if ( btnIconMargin >= 7 ) {
    console.log(`Расстояние иконки до текста  - ок ( ${btnIconMargin}px )`);
  } else {
    console.error(`Расстояние иконки до текста меньше 7px`);
  }

  const priceFontSize = parseInt(getComputedStyle(price).fontSize);

  if ( priceFontSize >= 22 ) {
    console.log(`Размер шрифта цены - ок ( ${priceFontSize}px )`);
  } else {
    console.error(`Размер шрифта цены меньше 22px`);
  }

  const priceMarginTop = parseInt(getComputedStyle(price).marginTop);

  if ( priceMarginTop >= 5 ) {
    console.log(`Расстояние от цены до кнопки - ок ( ${priceMarginTop}px )`);
  } else {
    console.error(`Расстояние от цены до кнопки меньше 5px`);
  }

  const priceBg = getComputedStyle(price).backgroundColor;

  if ( priceBg ) {
    console.log(`Непрозрачный фон у цены - ок`);
  } else {
    console.error(`Непрозрачный фон у цены отсутствует`);
  }

	if ( !btnText ) {
		console.error(`отсутствует элемент с классом "activation-btn-text"`);
	} else if ( btnTextStyles.transform !== 'translate(-50%, -50%)' && btnTextStyles.position !== 'absolute' && 		btnTextStyles.top !== '50%' && btnTextStyles.left !== '50%' ) {
		console.error(`текст на центральной кнопке не отцентрован`);
	} else {
		console.log(`текст на центральной кнопке отцентрован - ок`);
	}
})(btn);


// проверка футера
const footerElems = document.querySelectorAll('#footer-block *');

(function checkFooter() {
  for (let i = 0; i < footerElems.length; i++) {
    let footerElemFontSize = parseInt(getComputedStyle(footerElems[i]).fontSize);
    if ( footerElemFontSize < 16 ) {
      console.error(`Размер шрифта в футере меньше 16px`);
      return;
    }
  }
  console.log(`Размер шрифта в футере - ок`);
})()

// напоминание base64
console.info('Все картинки и шрифты в одном файле в base64');

// проверка head

const head = document.querySelector('head');
const title = "<title th:text=\"${isWebRequest} == false ? 'Подтверждение оплаты с баланса телефона' : 'Подтверждение оплаты с баланса телефона шаг 2 из 2'\">Подтверждение оплаты с баланса телефона</title>";
const headMeta1 = "<meta th:if=\"${isWebRequest} == false\" name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=yes\">";
const headMeta2 = "<meta th:if=\"${isWebRequest} == false\" name=\"MobileOptimized\" content=\"width\">";
const headMeta3 = "<meta th:if=\"${isWebRequest} == false\" name=\"HandheldFriendly\" content=\"true\">";
const headMeta4 = "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";

(function checkHead() {
  const headMetas = head.querySelectorAll('meta');
  const headTitle = head.querySelector('title');

  for (let i = 0; i < headMetas.length; i++) {
    if ( headMetas[i].outerHTML === headMeta1 || headMetas[i].outerHTML === headMeta2 || headMetas[i].outerHTML === headMeta3 || headMetas[i].outerHTML === headMeta4 ) {
      continue;
    } else {
      console.error('Неверные meta-теги в head! Скопировать из референса билайн');
      return;
    }
  }

  console.log('Метатеги верные');

  if ( headTitle.outerHTML !== title ) {
    console.error('Неверный <title> в head! Скопировать из референса билайн');
  } else {
    console.log('<title> верный');
  }
})()


// проверка формы в теле body

if ( document.body.firstElementChild === document.forms[0] ) {
	console.log('Форма в body есть - ок!');
} else {
	console.error('Отсутствует форма в body!');
}

// проверка аттрибутов тега body

if ( document.body.id !== 'resize' ) {
	console.error(`ID у body дожен быть "resize"`);
} else if ( !document.body.classList.contains('background') ) {
	console.error(`class у body дожен содержать "background"`);
} else {
	console.log(`класс и id у body - ок`);
}

const attrs = document.body.attributes;

for ( let i = 0; i < attrs.length; i++ ) {
	if ( attrs[i].name !== 'th:if' && attrs[i].value !== '${isWebRequest} == false' && i === attrs.length - 1 ) {
		console.error(`отсутствует макрос на теге body`);
	} else if ( attrs[i].name !== 'th:if' && attrs[i].value !== '${isWebRequest} == false' ) {
		continue
	} else if ( attrs[i].name === 'th:if' && attrs[i].value === '${isWebRequest} == false' ) {
		console.log(`макрос на теге body - ок`);
		break;
	}
}

// проверка наличия кнопок в LP

const btns = document.querySelectorAll('button');

if ( btns.length !== 1 ) {
	console.error(`В lp только центральная кнопка должна быть BUTTON, остальные все - div`);
} else {
	console.log(`Одна кнопка на странице - ок`);
}

// проверка наличия пользовательского соглашения

if ( document.forms[0].nextElementSibling.id === 'overlay' ) {
	console.log(`имеется пользовательское соглашение - ок`);
} else {
	console.error(`отсутсвует пользовательское соглашение`);
}

// проверка макросов в футере

const footerSpans = document.querySelectorAll('#footer-block span');
const footerTel = document.querySelector('#footer-block .tel');

for (let i = 0; i < footerSpans.length; i++) {
  let spanAttrs = footerSpans[i].attributes;
  if ( spanAttrs.length === 0 ) {
    console.error(`нет макроса в футере`);
    break;
  } else {
    for (let k = 0; k < spanAttrs.length; k++) {
      if ( k === spanAttrs.length - 1 && spanAttrs[k].name !== 'th:text' ) {
        console.error(`нет макроса в футере`);
      } else if ( spanAttrs[k].name !== 'th:text' && spanAttrs[k].value !== "${(#strings.arraySplit(partnerContact, ','))[0]}" || spanAttrs[k].value !== "${(#strings.arraySplit(partnerContact, ','))[2]}" ) {
        continue
      } else {
        break;
      }
    }
  }
}

const footerTelAttrs = footerTel.attributes;
let telMacroses = 0;

for (let i = 0; i < footerTelAttrs.length; i++) {
  if ( i === footerTelAttrs.length - 1 && footerTelAttrs[i].name !== 'th:text' && footerTelAttrs[i].name !== 'th:href') {
    console.error(`нет макроса в футере у телефона`);
    break;
  } else if ( footerTelAttrs[i].name === 'th:text' && footerTelAttrs[i].value === "${(#strings.arraySplit(partnerContact, ','))[1]}" || footerTelAttrs[i].name === 'th:href' &&footerTelAttrs[i].value === "${'tel:' + (#strings.arraySplit(partnerContact, ','))[1]}" ) {
    telMacroses++;
    continue;
  } else {
    continue;
  }
}

if ( telMacroses == 2 ) {
  console.log(`макросы в футере у телефона - ок`);
} else {
  console.error(`отсутствует макрос в футере у телефона`);
}

const footerOffer = document.querySelector('#footer-block a:last-child');

if ( footerOffer.href === 'http://moskva.beeline.ru/customers/products/mobile/services/details/uslugi-na-korotkikh-nomerakh/' ) {
  console.log(`ссылка на соглашение в футере - ок`);
} else {
  console.error(`неверная ссылка на соглашение в футере`);
}

// проверка закрытых одиночных тегов
console.info(`Проверь закрытые одиночные теги\n<meta/> <link/> <br/> <img/> <input/> !`);
