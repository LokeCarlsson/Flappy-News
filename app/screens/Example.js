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
    pipe.position.x = x - 25
    pipe.position.y = y - 575
    pipe.width = 40
    pipe.length = 10
    this.addChild(pipe)

    const pipe2 = new Pipes()
    pipe2.position.x = x - 25
    pipe2.position.y = y + 150
    pipe2.width = 40
    pipe2.length = 40
    this.addChild(pipe2)

    const hole = Math.round(Math.random() * 100) -120  
    const pipe3= new Pipes()
    pipe3.position.x = x - 25
    pipe3.position.y = y + hole 
    pipe3.width = 40
    pipe3.length = 10
    this.addChild(pipe3)

    
    
  }

}
