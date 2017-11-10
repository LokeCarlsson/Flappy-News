import { Container, Sprite, BLEND_MODES } from 'pixi.js';
import BG from './BG.png';
import FG from './FG.png';
import Store from '../../stores/Store'

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends Container
 */
export default class Background extends Container {

  constructor() {
    super();

    this.bg = Sprite.fromImage(BG);
    this.fg = Sprite.fromImage(FG);

    this.animate()

    this.addChild(this.bg);
    this.addChild(this.fg);
  }

  animate() {
    Store.subscribe(() => {
      this.fg.position.x -= 2;
    })
  }
}
