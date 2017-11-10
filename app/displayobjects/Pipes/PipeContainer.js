import Pipe from './Pipe.js';
import Store from '../../stores/Store';
import {
  Sprite,
  Texture
} from 'pixi.js';

export default class PipeContainer extends Sprite {
  constructor() {
    super()

    const {
      height,
      width,
      canvasCenter
    } = Store.getState().Renderer;

    const {
      x,
      y
    } = canvasCenter;

    this.pipe1 = new Pipe()
    this.pipe2 = new Pipe()

    this.addChild(this.pipe1)
    this.addChild(this.pipe2)
    

    Store.subscribe(() => {
      this.pipe1.position.x -= 2;
      this.pipe2.position.x -= 2;
    })

    this.rngInt = this.randomizeHeight()

    this.interactive = true;
    this.position.x = x + x - 200
    this.pipe1.position.y = this.rngInt - 1100
    this.pipe2.position.y = this.rngInt
  }

  randomizeHeight() {
    const max = 900
    const min = 400
    const random = Math.floor((Math.random() * ((max + 1) - min)) + min)
    return random
  }
}
