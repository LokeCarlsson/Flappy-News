import { Container, extras, Sprite, Texture, BLEND_MODES } from 'pixi.js';
import BG from './BG.png';
import FG from './FG.png';
import Foreground from './Foreground/Foreground'
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

    this.bg = Sprite.fromImage(BG)
    this.fg = Texture.fromImage(FG)
    this.fore = new extras.TilingSprite(this.fg, 1930, 1080)
    this.animate()
    
    this.addChild(this.bg);
    this.addChild(this.fore);
  }

  animate() {
    Store.subscribe(() => {
      this.fore.tilePosition.x -= 0.5;
    })
  }
}
