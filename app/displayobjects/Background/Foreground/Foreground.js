import { Sprite, Texture, extras } from 'pixi.js'
import FG from '../FG.png'

export default class Foreground extends Sprite {
  constructor() {
    const texture = Texture.fromImage(FG)
    super(texture)
    // const tiled = new extras.TilingSprite(texture, 1000, 1000)
    // animate()
  }

}