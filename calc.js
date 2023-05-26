let disp = document.getElementById('display')
document.getElementsByTagName('body')[0].addEventListener('keypress', (e) => {
	// console.log(e.key)
	if (/[0-9]/.test(e.key) || /[-/*+]/.test(e.key)) {
		disp.value += e.key
	}
	if (e.keyCode === 13) {
		disp.value = eval(disp.value)
	}
})
function back() {
	disp.value = disp.value.slice(0, disp.value.length - 1)
}
function clearDisplay() {
	disp.value = ""
}
function buttonClick(btn) {
	disp.value += btn
}
function total() {
	disp.value = eval(disp.value)
}