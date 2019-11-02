import P5 from 'p5'

let yoff = 0.0
const sketch = function (p: P5) {
  const drawVertex = () => {
    p.push()
    p.background(255)
    p.fill(255)
    p.beginShape()
    const halfHeight = p.windowHeight / 2
    let xoff = 0
    for (let x = 0; x <= p.windowWidth + 10; x += 10) {
      const y = p.map(p.noise(xoff, yoff), 0, 1, halfHeight + 150, halfHeight + 50)
      p.vertex(x, y)
      xoff += 0.05
    }
    p.vertex(p.windowWidth, halfHeight + p.random(98, 102))
    p.vertex(p.windowWidth, p.windowHeight)
    yoff += 0.01
    p.vertex(p.windowWidth, p.windowHeight)
    p.vertex(0, p.windowHeight)
    p.endShape(p.CLOSE)
    p.pop()
    p.push()
    p.fill(255)
    p.beginShape()
    for (let x = 0; x <= p.windowWidth; x += 10) {
      const y = p.map(p.noise(xoff, yoff), 0, 1, halfHeight + 150, halfHeight + 50)
      p.vertex(x, y)
      xoff += 0.05
    }
    p.vertex(p.windowWidth, halfHeight + p.random(96, 100))
    yoff += 0.01
    p.vertex(p.windowWidth, p.windowHeight)
    p.vertex(0, p.windowHeight)
    p.endShape(p.CLOSE)
    p.pop()
  }
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }
  p.draw = () => {
    p.clear()
    drawVertex()
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    drawVertex()
  }
}

export default sketch
