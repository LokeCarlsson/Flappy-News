import { Sprite, Texture } from 'pixi.js';
import PIPES from './schredder1.png';

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Pipes
 * @extends Sprite
 */
    export default class Pipe extends Sprite {
      constructor() {
        const texture = Texture.fromImage(PIPES)
        super(texture)

        this.interactive = true;

    }    
  }

