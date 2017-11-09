import { Container } from 'pixi.js';
import Store from '../stores/Store';
import BunnyGroup from '../displayobjects/BunnyGroup/BunnyGroup.js';
import Bunny from '../displayobjects/Bunny/Bunny.js';
import Pipes from '../displayobjects/Pipes/Pipes.js';
import Background from '../displayobjects/Background/Background.js';

/**
 * Main App Display Object
 *
 * Adds a background and some spinning bunnies
 *
 * @exports App
 * @extends Container
 */
export default class App extends Container {

  constructor(...args) {
    var bg = new Background();

    super(...args);

    this.addChild(bg);
    this.addPipes()
  }

  addPipes() {
    const { height, canvasCenter } = Store.getState().Renderer;
    const { x, y } = canvasCenter;

    const pipe = new Pipes()
    pipe.position.x = x
    pipe.position.y = y
    this.addChild(pipe)
  }

  addBunnies() {
    const { height, canvasCenter } = Store.getState().Renderer;
    const { x, y } = canvasCenter;
    const group1 = new BunnyGroup();
    const b1 = new Bunny();

    b1.position.x = x;
    b1.position.y = y;

    group1.position.x = x;
    group1.position.y = y + (height*.25);

    this.addChild(b1, group1);
  }

}
