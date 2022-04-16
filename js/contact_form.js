const form = document.querySelector('.contact');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('Name', 2)) e.preventDefault();
	if (!isTxt('Lastname', 1)) e.preventDefault();
	if (!isTxt('Subject', 5)) e.preventDefault();
	if (!isTxt('Message', 5)) e.preventDefault();
});

function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value.trim();

	if (txt.length >= len) {
		return true;
	} else {
		alert(`${name}을 ${len}글자 이상 입력하세요`);
		input.focus();
		return false;
	}
}
