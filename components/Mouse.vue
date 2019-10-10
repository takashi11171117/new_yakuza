<template>
  <div id="mouse-container" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import p5 from 'p5'
import 'p5/lib/addons/p5.dom'
import { TweenLite } from 'gsap'

@Component({})
export default class Mouse extends Vue {
  mounted () {
    const sketch = function (p: p5) {
      const mouse = {
        x: 0,
        y: 0
      }
      const mouse2 = {
        x: 0,
        y: 0
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
      }

      p.draw = () => {
        const links = p.selectAll('a')
        links.forEach((link) => {
          link.mouseOver(() => console.log('a'))
        })
        p.clear()
        p.push()
        p.noStroke()
        p.fill(80, 150)
        p.ellipse(mouse2.x, mouse2.y, 25, 25)
        p.fill(255)
        p.ellipse(mouse.x, mouse.y, 10, 10)
        p.pop()
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }

      p.mouseMoved = () => {
        TweenLite.to(mouse, 0.1, { x: p.mouseX, y: p.mouseY })
        TweenLite.to(mouse2, 0.25, { x: p.mouseX, y: p.mouseY })
        return false
      }
    }

    const myp5 = new p5(sketch, 'mouse-container')
    console.log(myp5)
  }
}
</script>

<style lang="sass" scoped>
#mouse-container
    position: fixed
    z-index: 1
</style>
