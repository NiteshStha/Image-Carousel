class Container {
  constructor(width, height, urls, div) {
    this.width = width;
    this.height = height;
    this.urls = urls;
    this.div = div;

    this.#init();
  }

  #init = () => {
    this.container = document.createElement('div');
    this.container.style.width = `${this.width}px`;
    this.container.style.height = `${this.height}px`;
    this.container.style.margin = '12px';
    this.container.style.backgroundColor = '#222';
    this.container.style.borderRadius = '16px';
    this.container.style.display = 'inline-block';
    this.container.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    this.container.style.overflow = 'hidden';
    this.container.style.position = 'relative';
    this.div.appendChild(this.container);

    this.sliderDiv = document.createElement('div');
    this.sliderDiv.style.display = 'inline-block';
    this.sliderDiv.style.width = `${this.width}px`;
    this.sliderDiv.style.height = `${this.height}px`;
    this.sliderDiv.style.position = 'relative';
    this.sliderDiv.style.marginLeft = `${this.x}px`;
    this.container.appendChild(this.sliderDiv);

    this.leftBtn = document.createElement('img');
    this.leftBtn.src = './assets/slider/left.png';
    this.leftBtn.id = 'leftBtn';
    this.leftBtn.alt = 'Slider Button';
    this.leftBtn.style.position = 'absolute';
    this.leftBtn.style.left = '0px';
    this.leftBtn.style.top = '50%';
    this.leftBtn.style.transform = 'translate(0%, -50%)';
    this.leftBtn.style.zIndex = '100';
    this.leftBtn.style.cursor = 'pointer';
    this.container.appendChild(this.leftBtn);

    this.rightBtn = document.createElement('img');
    this.rightBtn.src = './assets/slider/right.png';
    this.rightBtn.id = 'rightBtn';
    this.rightBtn.alt = 'Slider Button';
    this.rightBtn.style.position = 'absolute';
    this.rightBtn.style.right = '0px';
    this.rightBtn.style.top = '50%';
    this.rightBtn.style.transform = 'translate(0%, -50%)';
    this.rightBtn.style.zIndex = '100';
    this.rightBtn.style.cursor = 'pointer';
    this.container.appendChild(this.rightBtn);

    this.navContainer = document.createElement('div');
    this.navContainer.style.position = 'absolute';
    this.navContainer.style.display = 'flex';
    this.navContainer.style.justifyContent = 'center';
    this.navContainer.style.zIndex = '100';
    this.container.appendChild(this.navContainer);

    this.navBtns = this.urls.map((url, index) => {
      const btn = document.createElement('img');
      btn.src = './assets/slider/dot.png';
      btn.alt = 'Slider Button';
      btn.style.width = '12%';
      btn.style.cursor = 'pointer';
      btn.style.margin = '0px 4px';
      btn.id = -index;
      this.navContainer.appendChild(btn);
      return btn;
    });

    this.navContainer.style.bottom = '10px';
    this.navContainer.style.left = '50%';
    this.navContainer.style.transform = 'translate( -50%, 0%)';
  };

  draw = x => {
    this.sliderDiv.style.marginLeft = `${x}px`;
  };
}
