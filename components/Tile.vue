<template>
  <div id="tile-container" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import P5 from 'p5'
import { TweenLite } from 'gsap'

const even = (n: number): number => {
  return n % 2 !== 0 ? n - 1 : n
}

class Rect {
  public pos = {
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0
  }

  constructor (
    private p: P5,
    public x: number,
    public y: number,
    public gray: number,
    public alpha: number
  ) {
    this.p = p
    this.pos.translateX = x
    this.pos.translateY = y
    this.gray = gray
    this.alpha = alpha
  }

  tween = (x: number) => {
    TweenLite.to(this.pos, this.p.random(0.2, 2.3), { translateX: this.pos.translateX + x })
  }

  draw = () => {
    this.p.push()
    this.p.fill(this.gray, this.alpha)
    this.p.rectMode(this.p.CENTER)
    this.p.translate(this.pos.translateX, this.pos.translateY)
    this.p.rotateY(this.pos.rotateX)
    this.p.rotateX(this.pos.rotateY)
    this.p.noStroke()
    this.p.rect(0, 0, 50, 50)
    this.p.pop()
  }
}

@Component({})
export default class Tile extends Vue {
  mounted () {
    const sketch = function (p: P5) {
      let rects: Rect[] = []

      const setRect = (type: string = '') => {
        const width = p.windowWidth > 750 ? 750 : p.windowWidth
        const tilesNumberWidth = even(Math.floor(width * 0.95 / 50))
        const tilesNumberHeight = even(Math.floor(p.windowHeight * 0.95 / 50))
        const startWidth = 25 - (50 * tilesNumberWidth / 2)
        const startHeight = 25 - (50 * tilesNumberHeight / 2)
        for (let i = 0; i < tilesNumberWidth; i++) {
          const x = type !== 'resize' ? startWidth + i * 50 - p.windowWidth : startWidth + i * 50
          for (let n = 0; n < tilesNumberHeight; n++) {
            rects.push(new Rect(
              p,
              x,
              startHeight + n * 50,
              Math.floor(p.random(30, 150)),
              Math.floor(p.random(50, 210))
            ))
          }
        }
      }

      p.preload = () => {
        setRect()
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        rects.forEach((rect) => {
          rect.tween(p.windowWidth)
          rect.draw()
        })
      }

      p.draw = () => {
        p.clear()
        rects.forEach((rect) => {
          rect.draw()
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        rects = []
        setRect('resize')
        rects.forEach((rect) => {
          rect.draw()
        })
      }

      p.mouseMoved = () => {
        const rotate = p.atan2(p.mouseY - p.windowHeight / 2, p.mouseX - p.windowWidth / 2)
        rects.forEach((rect) => {
          rect.pos.rotateX = rotate
          rect.pos.rotateY = rotate
        })
      }
    }

    // eslint-disable-next-line
    const myp5 = new P5(sketch, 'tile-container')
  }
}
</script>

<style lang="sass" scoped>
#tile-container
    position: fixed
    z-index: 2
</style>
