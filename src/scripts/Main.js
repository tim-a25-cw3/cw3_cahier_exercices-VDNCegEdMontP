import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.js-swiper', {
 speed: 400,
});

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    

  }
}
new Main();
