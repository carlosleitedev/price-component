var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
const pagesViews = document.getElementById('pagesViews');
const price = document.getElementById('price');

pagesViews.innerHTML = slider.value;
price.innerHTML = 16;

slider.oninput = function () {
	pagesViews.innerHTML = this.value;

	if (this.value > 100) {
		price.innerHTML = 4;
	}
	if (this.value > 200) {
		price.innerHTML = 5;
	}
	if (this.value > 300) {
		price.innerHTML = 10;
	}
	if (this.value > 400) {
		price.innerHTML = 15;
	}
	if (this.value > 600) {
		price.innerHTML = 20;
	}
	if (this.value > 700) {
		price.innerHTML = 25;
	}
	if (this.value > 800) {
		price.innerHTML = 30;
	}
	if (this.value > 900) {
		price.innerHTML = 40;
	}
};
