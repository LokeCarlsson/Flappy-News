import { Sprite, Texture } from 'pixi.js';
import PIPES from './pipes.jpg';

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Pipes
 * @extends Sprite
 */
export default class Bunny extends Sprite {

  constructor(...args) {
    super(args);
    this.interactive = true;
  }


}
