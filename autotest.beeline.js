window.onload = function() {

  let formMissingReminder = false;

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
      if ( fontsArray[i] !== 'Open Sans' && fontsArray[i] !== 'sans-serif' ) {
        console.error(`Используется кастомный шрифт!`);
        return;
      }
    }
    console.log(`Шрифты - ок! ( Везде Open Sans )`);
  }

  checkFonts( detectFonts() );


  // проверка кнопки
  let btn;

  if ( document.getElementById('activation-btn') ) {
    btn = document.getElementById('activation-btn');

    if ( btn.tagName === 'BUTTON' ) {
      console.log(`Кнопка - ок ( button )`);
    } else {
      console.error(`Кнопка - не button!`);
    }

    // проверка текста в кнопке
    let btnText;
    let btnFontSize;

    if ( btn.querySelector('.activation-btn-text') ) {
      btnText = btn.querySelector('.activation-btn-text');
      btnFontSize = parseInt(getComputedStyle(btnText).fontSize);
    } else {
      console.error(`отсутствует класс 'activation-btn-text'`);
    }

    if ( btn && btnText && btnFontSize >= 32 ) {
      console.log(`Шрифт на кнопке - ок ( ${ btnFontSize }px )`);
    } else if ( !btnText ) {
      console.error(`Отсутствует текст на кнопке`);
    } else {
      console.error(`Шрифт на кнопке меньше 32px!`);
    }

    // проверка атрибута текста на кнопке
    if ( btnText ) {
      const btnTextAttr = btnText.getAttribute('th:text');
      const btnTextAttrValue = "${useSmsLink == null || useSmsLink == 'false' ? '" + btnText.innerText + "' : 'Получить SMS' }";

      if ( btnTextAttr === btnTextAttrValue ) {
        console.log(`Атрибут у текста на кнопке - ок`);
      } else {
        console.error(`Атрибут th:text у текста на кнопке отсутствует`);
      }
    }

    // проверка размеров кнопки
    let btnWidth;
    let btnHeight;

    btnWidth = Math.floor(parseFloat(getComputedStyle(btn).width));
    btnHeight = Math.floor(parseFloat(getComputedStyle(btn).height));

    if ( btnWidth === Math.floor( window.innerWidth * 0.8 ) &&
      btnHeight === Math.floor( window.innerHeight * 0.175 ) ) {
      console.log(`Размеры кнопки - ок ( 17.5x80 )`);
    } else {
      console.error(`Размер кнопки не 17.5x80!`);
    }

    // проверка иконки на кнопке
    if ( btnText ) {
      const btnIconMargin = parseFloat(getComputedStyle(btnText, '::after').marginLeft);

      if ( btnIconMargin >= 7 ) {
        console.log(`Расстояние иконки до текста  - ок ( ${btnIconMargin}px )`);
      } else {
        console.error(`Расстояние иконки до текста меньше 7px`);
      }
    } else {
      console.error(`Отсутствует текст на кнопке`);
    }

    // проверка центровки текста на кнопке
    let btnTextStyles;
    if ( btnText ) {
      btnTextStyles = getComputedStyle(btnText);

      if ( btnTextStyles.transform !== 'translate(-50%, -50%)' &&
        btnTextStyles.position !== 'absolute' &&
        btnTextStyles.top !== '50%' &&
        btnTextStyles.left !== '50%' ) {
        console.error(`текст на центральной кнопке не отцентрован`);
      } else {
        console.log(`текст на центральной кнопке отцентрован - ок`);
      }
    } else {
      console.error(`Отсутствует текст на кнопке`);
    }
  } else {
    console.error(`отсутствует кнопка или id='activation-btn' у кнопки`);
  }

  // проверка цены
  if (document.querySelector('.info-block-text .price .line2')) {
    let price = document.querySelector('.info-block-text .price .line2');
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
  } else {
    console.error(`Отсутствует цена под кнопкой`);
  }

  // проверка футера
  const footerElems = document.querySelectorAll('#footer-block *');
  let footerElemsFontCheck = true;

  for (let i = 0; i < footerElems.length; i++) {
    let footerElemFontSize = parseInt(getComputedStyle(footerElems[i]).fontSize);
    if ( footerElemFontSize < 16 ) {
      console.error(`Размер шрифта в футере меньше 16px`);
      footerElemsFontCheck = false;
      break;
    }
  }

  if ( footerElemsFontCheck ) {
    console.log(`Размер шрифта в футере - ок`);
  }

  // проверка head
  const head = document.querySelector('head');
  const title = "<title th:text=\"${isWebRequest} == false ? 'Подтверждение оплаты с баланса телефона' : 'Подтверждение оплаты с баланса телефона шаг 2 из 2'\">Подтверждение оплаты с баланса телефона</title>";
  const headMeta1 = "<meta th:if=\"${isWebRequest} == false\" name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=no\">";
  const headMeta2 = "<meta th:if=\"${isWebRequest} == false\" name=\"MobileOptimized\" content=\"width\">";
  const headMeta3 = "<meta th:if=\"${isWebRequest} == false\" name=\"HandheldFriendly\" content=\"true\">";
  const headMeta4 = "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";

  const headMetas = head.querySelectorAll('meta');
  const headTitle = head.querySelector('title');
  let headMetasCounter = 0;

  for (let i = 0; i < headMetas.length; i++) {
    if ( headMetas[i].outerHTML === headMeta1 || headMetas[i].outerHTML === headMeta2 || headMetas[i].outerHTML === headMeta3 || headMetas[i].outerHTML === headMeta4 ) {
      headMetasCounter++;
    }
  }

  if ( headMetasCounter === 4 ) {
    console.log('Метатеги верные');
  } else {
    console.error('Неверные meta-теги в head! Скопировать из референса билайн');
  }

  if ( headTitle.outerHTML !== title ) {
    console.error('Неверный <title> в head! Скопировать из референса билайн');
  } else {
    console.log('<title> верный');
  }


  // проверка формы в теле body
  if ( document.body.firstElementChild === document.forms[0] ) {
    console.log('Форма в body есть - ок!');
  } else {
    if ( !formMissingReminder ) {
      formMissingReminder = true;
      console.error('Отсутствует форма в body!');
    }
  }

  // проверка аттрибутов тега body
  if ( document.body.id !== 'resize' ) {
    console.error(`ID у body дожен быть "resize"`);
  } else if ( !document.body.classList.contains('background') ) {
    console.error(`class у body дожен содержать "background"`);
  } else {
    console.log(`класс и id у body - ок`);
  }

  const bodyThAttr = document.body.getAttribute('th:if');
  if ( bodyThAttr === '${isWebRequest} == false' ) {
    console.log('Атрибут у body - ок')
  } else {
    console.error('У body должен присутствовать атрибут th:if="${isWebRequest}" == false')
  }


  // проверка наличия кнопок в LP
  const btns = document.querySelectorAll('button');

  if ( !btns.length ) {
    console.error(`Отсутствует кнопка`)
  } else if ( btns.length !== 1 && btns[0].id !== 'activation-btn' ) {
    console.error(`В lp только центральная кнопка должна быть BUTTON, остальные все - div`);
  } else {
    console.log(`Только центральная кнопка - BUTTON - ок`)
  }

  // проверка наличия пользовательского соглашения
  if ( document.forms[0] ) {
    if ( document.forms[0].nextElementSibling.id === 'overlay' ) {
      console.log(`имеется пользовательское соглашение - ок`);
    } else {
      console.error(`отсутсвует пользовательское соглашение`);
    }
  } else {
    if ( !formMissingReminder ) {
      formMissingReminder = true;
      console.error('отсутствует форма в body!');
    }
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
    } else if ( footerTelAttrs[i].name === 'th:text' && footerTelAttrs[i].value === "${(#strings.arraySplit(partnerContact, ','))[1]}" || footerTelAttrs[i].name === 'th:href' && footerTelAttrs[i].value === "${'tel:' + (#strings.arraySplit(partnerContact, ','))[1]}" ) {
      telMacroses++;
      continue;
    } else {
      continue;
    }
  }

  if ( telMacroses === 2 ) {
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

  // напоминание base64
  console.info('Проверь все картинки и шрифты в одном файле в base64!');
};
