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
      var { height, canvasCenter } = Store.getState().Renderer;
      var { x, y } = canvasCenter;
      
      var whichHole =  Math.floor((Math.random() * 5) + 1); 

      if(whichHole == 1)
      {
      //high
      var pipe = new Pipes()
      pipe.position.x = x -25
      pipe.position.y = y - 200
      this.addChild(pipe)

      //low 
      var pipe2 = new Pipes()
      pipe2.position.x = x - 25
      pipe2.position.y = y - 270
      this.addChild(pipe2)  
      }
      else if(whichHole == 2)
      {
              
      //high
      var pipe = new Pipes()
      pipe.position.x = x - 25
      pipe.position.y = y -960
      this.addChild(pipe)

      //low 
      var pipe2 = new Pipes()
      pipe2.position.x = x - 25
      pipe2.position.y = y - 0
      this.addChild(pipe2)

      }
      else if(whichHole == 3)
      {
      //high
      var pipe = new Pipes()
      pipe.position.x = x - 25
      pipe.position.y = y - 690
      this.addChild(pipe)

      //low 
      var pipe2 = new Pipes()
      pipe2.position.x = x - 25
      pipe2.position.y = y + 270
      this.addChild(pipe2)
      }
      else if(whichHole == 4)
      {
      //high
      var pipe = new Pipes()
      pipe.position.x = x - 25
      pipe.position.y = y - 420
      this.addChild(pipe)

      //low 
      var pipe2 = new Pipes()
      pipe2.position.x = x - 25
      pipe2.position.y = y - 600
      this.addChild(pipe2)
      }else if(whichHole == 5)
      {
      //high
      var pipe = new Pipes()
      pipe.position.x = x - 25
      pipe.position.y = y - 830
      this.addChild(pipe)

      //low 
      var pipe2 = new Pipes()
      pipe2.position.x = x - 25
      pipe2.position.y = y + 150
      this.addChild(pipe2)
      }
      

    }


}
