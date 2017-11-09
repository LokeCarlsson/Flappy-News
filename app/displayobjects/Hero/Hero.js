import { Tween, autoPlay } from 'es6-tween'
import { Sprite, Texture, ticker } from 'pixi.js'
import Store from '../../stores/Store'
import HERO from './hero.png'

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Hero
 * @extends Sprite
 */
export default class Hero extends Sprite {
  constructor() {
    const texture = Texture.fromImage(HERO)
    super(texture)
    this.life = 3
    this.anchor.x = 0.5
    this.anchor.y = 1
    this.interactive = true

    this.collided = false
    this.speedX = 5 
    
    window.addEventListener('mousemove', this.collision.bind(this))

    Store.subscribe(() => {
      this.move()
    })
  }

  collision() {
    this.collided = true
  }

  decreaseLife() {
    this.life--
  }

  move() {
    if (this.collided) {
      this.decreaseSpeed()
      this.removeCollided()
    } else {
      this.increaseSpeed()
    }
    this.position.x += this.speedX
  }

  decreaseSpeed() {
    if (this.speedX > 4) {
      this.speedX -= 20
    } else if (this.speedX > 2) {
      this.speedX -= 1
    } else {
      this.speedX -= 0.1
    }
  }

  removeCollided() {
    if (this.speedX <= -5) {
      this.collided = false
    }
  }

  increaseSpeed() {
    if (this.speedX < 2) {
      this.speedX += 0.5
    } else if (this.speedX < 4) {
      this.speedX += 1
    } else if (this.speedX <= 5) {
      this.speedX += 0.2
    }
  }
}
