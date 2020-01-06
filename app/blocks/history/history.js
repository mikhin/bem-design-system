export default e => {
	const accordion = e.target.closest('.history__transaction');

	if (accordion) {
		accordion.classList.toggle('history__transaction_opened');
	}
};
