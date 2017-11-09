import { Sprite, Texture } from 'pixi.js';
import PIPES from './black.jpg';

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

  // AddPipe() {
  //   //the hole
  //   const hole = Math.floor(Math.random() * 5) + 1;
  
  //   //with one big hole at position 'hole' and 'hole + 1'
  //   for (var i = 0; i < 8; i++){    
  //     if (i != hole && i != hole + 1) {
  //       //pipen 
  //       this.texture(400, i * 60 + 10);
  //     }
  //   }

    
  }

