const DEFAULT_THEME_CLASS = 'theme_color_project-default';
const INVERSE_THEME_CLASS = 'theme_color_project-inverse';

const switchAllBlocksTheme = () => {
	const themedItems = document.querySelectorAll(`.${DEFAULT_THEME_CLASS}, .${INVERSE_THEME_CLASS}`);

	themedItems.forEach(themedItem => {
		if (themedItem.classList.contains(DEFAULT_THEME_CLASS)) {
			themedItem.classList.remove(DEFAULT_THEME_CLASS);
			themedItem.classList.add(INVERSE_THEME_CLASS);
		}else {
			themedItem.classList.remove(INVERSE_THEME_CLASS);
			themedItem.classList.add(DEFAULT_THEME_CLASS);
		}
	});
};

export default e => {
	const switcher = e.target.closest('.onoffswitch');
	if (switcher) {
		switcher.classList.toggle('onoffswitch_checked');

		switchAllBlocksTheme();
	}
};
