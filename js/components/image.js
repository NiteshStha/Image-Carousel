class Image {
  constructor(url, parent, x) {
    this.url = url;
    this.parent = parent;
    this.x = x;

    this.init();
  }

  init = () => {
    this.img = document.createElement('img');
    this.img.src = this.url;
    this.img.alt = 'Slider Image';
    this.img.style.width = '100%';
    this.img.style.height = '100%';
    this.img.style.position = 'absolute';
    this.img.style.left = `${this.x}px`;
    this.parent.appendChild(this.img);
  };
}
