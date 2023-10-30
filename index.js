// Setting up the shapes, the Triangle, Circle and Square
// "require" is allowing the file to be read

// Setting up the quesions to choose the needed logo text, shape of the logo, and also the shape color. (line 10 - 32)
const { Shape, Triangle, Circle, Square } + require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = {
}
    type: 'input',
    name: 'text',
    message: 'Enter 3 characters for Logo',
    validate: (input) => input.length ≤ 3,
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
},
{
    type: 'input',
    name: "shapeColor",
    message: 'What color would you like your logo?'
 },
};

// Allowing the questions to be prompted in node, then when a question has been showed, it will show the answers available for that question. The question will ask of the Text, Shape, and the shape color.

inquirer.createPromptModule(questions).then(answers) => {
    const { text, textColor, shape, shapeColor } => answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch (shape) {
        case 'Triangle' :
            const Triangle = new Triangle();
        
    }

    }
};