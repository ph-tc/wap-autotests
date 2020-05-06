window.onload = function() {

	// Проверка макроса на доктайпе
	const doctypeMacros = '<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n' +
		'<!DOCTYPE html>\n' +
		'<%--<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>--%>';

	if ( document.body.innerHTML.indexOf(doctypeMacros) ) {
		console.log('Макрос на доктайпе - ок');
	} else {
		console.error('Отсутствует или неверный макрос на доктайпе');
	}


	// Проверка отсутствия тега <title>
	if ( document.querySelector('title') ) {
		console.error('Убрать <title> из <head>');
	} else {
		console.log('Тег <title> отсутствует - ок');
	}


	// Проверка кнопки
	const btn = document.querySelector('.btn-wrapper .btn');

	if ( btn.tagName === 'BUTTON' ) {
		console.log('Кнопка - <button> - ок');
	} else {
		console.error('Кнопка - не <button>');
	}

	// Проверка скрипта на кнопке
	const btnScript = 'javascript:frm.ButtonOK.value = \'OK\';javascript:frm.resultForm.value =' +
		' \'OK\';javascript:frm.submit();';

	if ( btn.attributes.onclick && btn.attributes.onclick.value === btnScript ) {
		console.log('Скрипт на кнопке - ок');
	} else {
		console.error('Отсутствет или неверный скрипт на кнопке');
	}

	// Проверка футера
	const footer = document.querySelector('.rules');

	if ( footer.attributes.id.value === 'foot') {
		console.log('У футера id - #foot - ок');
	} else {
		console.error('У футера должен быть id #foot');
	}

	if ( getComputedStyle(footer).fontFamily.indexOf('Arial') !== -1 ) {
		console.log('Шрифт в футере - Arial - ок');
	} else {
		console.error('Шрифт в футере не Arial');
	}

	if ( parseInt(getComputedStyle(footer).fontSize) == 10 ) {
		console.log('Шрифт в футере - 10px - ок');
	} else {
		console.error('Шрифт в футере не 10px');
	}

	// Уведомления о проверке
	console.log('%c Отдельно чекнуть форму и скрипт после футера по чеклисту! ', 'background: #0af; color: #fff;');
};
