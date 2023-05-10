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
  class Square extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return`
        <rect width="100" height="100" stroke="${this.color}" fill=${this.color}" stroke-width= 3  />`
    }
  }
  class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return`
        <circle cx="25" cy="75" r="20" stroke="${this.color}" fill=${this.color}" stroke-width= 3  />`
    }
  }
  const myShape1 = new Triangle("blue")
  const myShape2 = new Square("")
  const myShape3 = new Circle("")
//   console.log(myShape.color)
//   myShape.setColor("red")
//   console.log(myShape.color)

  module.exports = {Shape, Triangle, Square, Circle}