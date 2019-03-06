const globals = {
	locales: {
		'ru-RU': 'Новая вкладка',
		'en-US': 'New tab',
	}
}

window.onload = () => {
	const title = document.querySelector('title');
	const lang = navigator.browserLanguage || navigator.language || navigator.userLanguage;

	title.innerHTML = globals.locales[lang] || 'New tab';
}