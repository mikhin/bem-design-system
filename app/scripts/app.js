import onoffswitch from '../blocks/onoffswitch/onoffswitch';
import history from '../blocks/history/history';

document.addEventListener('DOMContentLoaded', function () {
	document.body.addEventListener('click', function (e) {
		onoffswitch(e);
		history(e);
	});
});
