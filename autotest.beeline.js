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


// проверка закрытых одиночных тегов
console.info(`Проверь закрытые одиночные теги\n<meta/> <link/> <br/> <img/> <input/> !`);


// проверка кнопки
const btn = document.getElementById('activation-btn');
const btnFontSize = parseInt(getComputedStyle(btn.children[0]).fontSize);
const price = document.querySelector('.info-block-text .price .line2');

(function checkButton(btn) {
  if ( !btn ) {
    console.error(`У кнопки отсутствует id='activation-btn'`);
    return;
  }

  if ( btn.tagName === 'BUTTON') {
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
console.info('Все картинки и шрифты в одном файле');

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
