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

    //high permanent
    const pipe = new Pipes()
    pipe.position.x = x - 25
    pipe.position.y = y - 610
    pipe.width = 40
    pipe.length = 10
    this.addChild(pipe)

    //high moving
    const hole = Math.round(Math.random() * -160) - 400  
    const pipe4 = new Pipes()
    pipe4.position.x = x -25
    pipe4.position.y = y + hole
    pipe4.width = 40
    pipe4.length = 40
    this.addChild(pipe4)

    //low permanent
    const pipe2 = new Pipes()
    pipe2.position.x = x - 25
    pipe2.position.y = y + 300
    pipe2.width = 40
    pipe2.length = 40
    this.addChild(pipe2)

    //low moving
    const hole2 = Math.round(Math.random() * 400) + 60 
    const pipe3= new Pipes()
    pipe3.position.x = x -25
    pipe3.position.y = y + hole2
    pipe3.width = 40
    pipe3.length = 10
    this.addChild(pipe3)

    
    
  }

    // username = document.createElement('INPUT')
    // username.type = 'text'
    // username.name = 'username'
    // username.value = 'Write your name here'

}
