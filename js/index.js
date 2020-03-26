const urls1 = ['./assets/images/1.png', './assets/images/2.png', './assets/images/3.png', './assets/images/4.png'];
const urls2 = ['./assets/images/5.png', './assets/images/6.png', './assets/images/7.png', './assets/images/8.png'];
const urls3 = ['./assets/images/9.png', './assets/images/10.png', './assets/images/11.png', './assets/images/12.png'];

const sliderEle1 = document.getElementById('slider1');
const sliderEle2 = document.getElementById('slider2');
const sliderEle3 = document.getElementById('slider3');

const slider1 = new Slider(sliderEle1.offsetWidth, sliderEle1.offsetHeight, urls1, sliderEle1);
const slider2 = new Slider(sliderEle2.offsetWidth, sliderEle2.offsetHeight, urls2, sliderEle2);
const slider3 = new Slider(sliderEle3.offsetWidth, sliderEle3.offsetHeight, urls3, sliderEle3);
