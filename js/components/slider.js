class Slider {
  constructor(width, height, urls, div) {
    this.width = width;
    this.height = height;
    this.urls = urls;
    this.div = div;
    this.x = 0;
    this.dx = -1;
    this.totalX = 0;
    this.fps = 1000 / 360;
    this.index = 0;
    this.init();
  }

  init = () => {
    this.container = new Container(this.width, this.height, this.urls, this.div);
    this.leftBtn = this.container.leftBtn;
    this.rightBtn = this.container.rightBtn;
    this.leftBtn.addEventListener('click', this._buttonEvent);
    this.rightBtn.addEventListener('click', this._buttonEvent);
    this.navBtns = this.container.navBtns;
    this.navBtns.forEach(btn => btn.addEventListener('click', this._navBtnEvent));
    this.images = this.urls.map(url => {
      const image = new Image(url, this.container.sliderDiv, this.totalX);
      this.totalX += this.width;
      return image;
    });
    this.interval = setInterval(this.start, this.fps);
  };

  start = () => {
    this.move();
    this.container.draw(this.x);
  };

  move = async () => {
    if (this.x % this.width === 0) {
      this.index = this.x / this.width;
      const unpause = await this._pause();
      if (unpause) this.interval = setInterval(this.start, this.fps);
    }

    this.x += this.dx;
    this._getDirection();
  };

  // This is a private method
  _pause = () => {
    this.container._changeBtnImage(this.index);
    clearInterval(this.interval);
    return new Promise(resolve => {
      this.timeout = setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  // This is a private method
  _buttonEvent = event => {
    // Stop all the intervals and timeouts
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    switch (event.target.id) {
      case 'rightBtn':
        // Check if the index of the image is not less than the total index
        if (this.index > -(this.totalX / this.width - 1)) {
          this.x = --this.index * this.width;
        }
        break;
      case 'leftBtn':
        // Check if the index of the image is not greater than 0
        if (this.index < 0) {
          this.x = ++this.index * this.width;
        }
        break;
    }
    this.index = this.x / this.width;
    this._getDirection();
    // Restart the slider
    this.interval = setInterval(this.start, this.fps);
  };

  // This is a private method
  _navBtnEvent = event => {
    // Stop all the intervals and timeouts
    clearTimeout(this.timeout);
    clearInterval(this.interval);

    // + so that the id is always a number value
    this.x = +event.target.id * this.width;
    this.index = this.x / this.width;
    this._getDirection();
    // Restart the slider
    this.interval = setInterval(this.start, this.fps);
  };

  // This is a private method
  _getDirection = () => {
    if (this.x <= -(this.totalX - this.width)) this.dx = 1;
    if (this.x >= 0) this.dx = -1;
  };
}
