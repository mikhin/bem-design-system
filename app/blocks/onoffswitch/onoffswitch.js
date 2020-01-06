const DEFAULT_THEME_CLASS = 'theme_color_project-default';
const INVERSE_THEME_CLASS = 'theme_color_project-inverse';

const onoffswitch = () => {
	document.body.addEventListener('click', function (e) {
		if (e.target.classList.contains('onoffswitch')) {
			e.target.classList.toggle('onoffswitch_checked');

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
		}
	});
};

export default onoffswitch;
