import Hero from '../displayobjects/Hero/Hero.js'
import {
  Container
} from 'pixi.js';
import Store from '../stores/Store';
import BunnyGroup from '../displayobjects/BunnyGroup/BunnyGroup.js';
import Bunny from '../displayobjects/Bunny/Bunny.js';
import PipeContainer from '../displayobjects/Pipes/PipeContainer.js';
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
    super(...args)

    this.addChild(new Background())
    this.addHero()
    this.addChild(new PipeContainer())

    this.counter = 0;

    Store.subscribe(() => {
      this.counter++
      if (this.counter % 300 == 0) {
        this.addChild(new PipeContainer())
      }
    })
  }

  addHero() {
    const {
      canvasCenter
    } = Store.getState().Renderer
    const hero = new Hero()
    const { x, y } = canvasCenter
    hero.position.x = x - 750 
    hero.position.y = y
    this.addChild(hero)
  }


}
