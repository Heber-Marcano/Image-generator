const inquirer = require("inquirer")
const fs = require("fs")
const {Shape, Triangle, Circle, Square} = require("./lib/shape")

inquirer.prompt([
    { type: "input",
      name: "text",
      message: "Enter 3 characters"
    },
    { type: "input",
      name: "color",
      message: "What color wich you like (enter color or hexadecimal #)?"
    },
    { type: "list",
      name: "shape",
      message: "What shape do you want your SVG?",
      choices:["Tiangle", "Circle", "Square"]
    },
    { type: "input",
      name: "color",
      message: "What color do you want your shape to be?"
    },
])

.then((answers) => {
    console.log(answers)
    if(answers.Shape === "Triangle"){
        const userShape = new Triangle
    }if(answers.Shape === "Circle"){
        const userShape = new Circle
    }if(answers.Shape === new Square){
       const userShape = "Square" 
    }if(answers.color === color){
        const userColor = new color
    }
    

fs.writeFile('logo.svg', data, (err) =>
  err ? console.log(err) : console.log('Successfully created a logo!')
);
})