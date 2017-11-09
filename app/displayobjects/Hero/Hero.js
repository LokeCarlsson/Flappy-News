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
    this.flap = false
    this.speedX = 5
    this.speedY = 5
    
    window.addEventListener('click', this.collision.bind(this))
    window.addEventListener('mousemove', this.flappy.bind(this))

    Store.subscribe(() => {
      this.move()
      this.gravity()
    })
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
    if (this.speedX < 2) {
      this.speedX += 0.5
    } else if (this.speedX < 4) {
      this.speedX += 1
    } else if (this.speedX <= 5) {
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

  // drop() {
  //   Store.subscribe(() => {
  //     const { tick, previousTick } = Store.getState().Animation
  //     if (tick !== previousTick) {
  //       this.position.y -= 0.1
  //     }
  //     if (this.position.y < -12) {
  //       this.position.y = -12
  //     }
  //     if (this.position.y > Store.getState) {
  //       this.position.y= 12
  //     }
  //   })
  // }
}
