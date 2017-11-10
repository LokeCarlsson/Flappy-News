import { Tween, autoPlay } from 'es6-tween'
import { Sprite, Texture, ticker } from 'pixi.js'
import Store from '../../stores/Store'
import PAPER1 from './paper-1.png'
import PAPER2 from './paper-2.png'
import PAPER3 from './paper-3.png'
import PAPER4 from './paper-4.png'

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Hero
 * @extends Sprite
 */
export default class Hero extends Sprite {
  constructor() {
    const paper1 = Texture.fromImage(PAPER1)
    const paper2 = Texture.fromImage(PAPER2)
    const paper3 = Texture.fromImage(PAPER3)
    const paper4 = Texture.fromImage(PAPER4)
    super(paper1)
    this.life = 3
    this.anchor.x = 0.5
    this.anchor.y = 1
    this.interactive = true
    this.scale.x = 0.35
    this.scale.y = 0.35
    
    this.collided = false
    this.flap = false
    this.speedX = 0
    this.speedY = 5
    
    // window.addEventListener('click', this.collision.bind(this))
    window.addEventListener('keypress', this.flappy.bind(this))

    Store.subscribe(() => {
      this.animate(paper1, paper2, paper3, paper4)
      this.move()
      this.gravity()
    })
  }

  animate(paper1, paper2, paper3, paper4) {
    if (this.speedY > 4) {
      this.texture = paper4
    } else if (this.speedY >= 0) {
      this.texture = paper3
    } else if (this.speedY >= -4) {
      this.texture = paper2
    } else {
      this.texture = paper1
    }
  }

  collision() {
    this.collided = true
  }

  flappy() {
    this.flap = true
  }
  
  decreaseLife() {
    this.life--
  }

  gravity() {
    if (this.flap) {
      this.decreaseSpeedY()
      this.fall()
    } else {
      this.increaseSpeedY()
    }
    this.position.y += this.speedY
  }

  fall() {
    if (this.speedY <= -5) {
      this.flap = false
    }
  }

  move() {
    if (this.collided) {
      this.decreaseSpeedX()
      this.removeCollided()
    } else {
      this.increaseSpeedX()
    }
    this.position.x += this.speedX
  }

  removeCollided() {
    if (this.speedX <= -5) {
      this.collided = false
    }
  }

  decreaseSpeedX() {
    if (this.speedX > 4) {
      this.speedX -= 20
    } else if (this.speedX > 2) {
      this.speedX -= 1
    } else {
      this.speedX -= 0.1
    }
  }

  increaseSpeedX() {
    if (this.speedX <= 0) {
      this.speedX += 0.2
    }
  }

  decreaseSpeedY() {
    if (this.speedY > 4) {
      this.speedY -= 20
    } else if (this.speedY > 2) {
      this.speedY -= 1
    } else {
      this.speedY -= 0.1
    }
  }

  increaseSpeedY() {
    if (this.speedY < 2) {
      this.speedY += 0.5
    } else if (this.speedY < 4) {
      this.speedY += 1
    } else if (this.speedY <= 5) {
      this.speedY += 0.2
    }
  }
}
