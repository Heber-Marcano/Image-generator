const inquirer = require("inquirer")
const fs = require("fs")
const {Shape, Triangle} = require("./lib/shape")

inquirer.prompt([
    { type: "list",
      name: "shape",
      message: "What shape do you want your SVG?",
      choices:["Tiangle", "Circle", "Square"]
    },
    { type: "input",
      name: "color",
      message: "What color do you want your SVG?"
    },
    { type: "input",
      name: "",
      message: "What shape do you want your SVG?"
    },
    { type: "input",
      name: "shape",
      message: "What shape do you want your SVG?"
    },
])

.then((answers) => {
    console.log(answers)
    if(answers.shape === "Triangle"){
        const userShape = new 
    }

fs.writeFile('logo.svg', data, (err) =>
  err ? console.log(err) : console.log('Successfully created a logo!')
);
})