// Setting up the shapes, the Triangle, Circle and Square
// "require" is allowing the file to be read

// Setting up the quesions to choose the needed logo text, shape of the logo, and also the shape color. (line 10 - 32)
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Enter 3 characters for Logo',
    validate: (input) => input.length <= 3,
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the logo',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo',
    choices: ['Triangle', 'Circle', 'Square'],
},
{
    type: 'input',
    name: "shapeColor",
    message: 'What color would you like your logo?'
    },
];

// Allowing the questions to be prompted in node, then when a question has been showed, it will show the answers available for that question. The question will ask of the Text, Shape, and the shape color.

inquirer.createPromptModule(questions).then(answers) => {
    const { text, textColor, shape, shapeColor } = answers;

        x = 150;
        y = 150;

    const shapeObj = new Shape();
    let svgElement = '';

    // Shape object is first to have an answer to be chosen, then the color of the logo shape will be chosen.
    shapeObj.setColor(shapeColor);

    // the options from top to bottom will be the following:
    // - Triangle
    // - Circle
    // - Square
    // it will then render the input of the user.
    switch (shape) {
        case 'Triangle' :
            const Triangle = new Triangle();
            triangle.setColor(ShapeColor);
            svgElement = Triangle.render();
            break;
        case 'Circle' :
                const Circle = new Circle();
                Circle.setColor(ShapeColor);
                svgElement = Circle.render();
                break;
        case 'Square' :
                const Square = new Square();
                Square.setColor(ShapeColor);
                svgElement = Square.render();
                break;
    };
// the if else statement says that if it is not a Triangle, it will then next choos e the square. If not, it will be a Circle.
    if(shape === 'Triangle') {
        y = 135;
    } else if (shape === Square) {
        y = 145;
    }
    // XML namespace for SVG
        const finalSVG = '<svg xmlns = "https://www.w3.org/2000/svg";        ${svgElement}
        <text x="${x}"  y="${y}"  fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
    </svg>';
// Allowing the file to be interacted with using fs
    fs.writeFileSync('logo-svg', finalSVG);
    console.log('Generated Logo-SVG');
});