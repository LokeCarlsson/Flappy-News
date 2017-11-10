import {
  Sprite,
  Texture
} from 'pixi.js';
import scredder from './schredder1.png';
import Store from '../../stores/Store';

export default class Pipe extends Sprite {
  constructor() {
    const {
      height,
      width,
      canvasCenter
    } = Store.getState().Renderer;

    const {
      x,
      y
    } = canvasCenter;

    const texture = Texture.fromImage(scredder)
    super(texture)
    this.interactive = true;
  }

  randomizeHeight() {
    return Math.floor((Math.random() * 5) + 1);
  }
}
