import { Sprite, Texture } from 'pixi.js';
import PIPES from './black.jpg';

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Pipes
 * @extends Sprite
 */
export default class Bunny extends Sprite {
  constructor() {
    const texture = Texture.fromImage(PIPES)
    super(texture)

    const hole = Math.floor(Math.random() * 5) + 1
    this.interactive = true
  }
}
