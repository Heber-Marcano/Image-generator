class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(newColor) {
      this.color = newColor
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color); // call the super class constructor and pass in the name parameter
    }
  
    render() {
      return `<polygon points="200,10 290,210 120,210"  stroke="${this.color}" fill="${this.color}" stroke-width="5" />`
    }
  }
  const myShape = new Triangle("blue")
  console.log(myShape.color)
  myShape.setColor("red")
  console.log(myShape.color)

  module.exports = {Shape, Triangle}