// setting up the constant variables in the server.js
//pulling express, inquirer, and the file system.
// setting up the shapes.js as a constant variable when pulling code information.
const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square, Triangle, Circle } = require('./lib/shapes');

// Setting up the variable to pull express.
// Will be able to be heard on port 3000.
const app = express();
const port = 3000;

// Used to parse the json data, and URLencoded form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handler
app.get ('/', (req, res) => {
    res.send('This server does not serve web-based content.');
});

// Route Handler for a post request
app.post('./generate-logo', (req, res) => {
    const { text, textColor, Shape, shapeColor } = req.body;

    const x = 150;
    const y = 150;

    const shapeObj = new Shape ();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch (Shape) {
        case 'Triangle':
            const Triangle = new Triangle();
            Triangle.setColor(shapeColor);
            svgElement = Triangle.render();
            break;
        case 'Circle':
            const Circle = new Circle();
            Circle.setColor(shapeColor);
            svgElement = Circle.render();
            break;
        case 'Square':
            const Square = new Square();
            Square.setColor(shapeColor);
            svgElement = Square.render();
            break;

// Creating an else if statement for the shape that may be input by the user.
    }
    if ( Shape === 'Triangle') {
        y = 135;
    } else if ( Shape === 'Square') {
        y = 145;
    }
    
    const finalSVG = `
        <svg xmlns="http://www.w3.org/2000/svg">
        ${svgElement}
        <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-textAnchor='middle'>${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', finalSVG);
    res.download('logo.svg', 'logo.svg');

    console.log('Generated logo SVG!!');
});

// Gets app to listen on the locatHost port 3000.
app.listen(port, () => {
    console.log('Server is running on http://localHost:${port}');
});

