// Creating the variables for Shape. The 3 variables are a triangle, circle, and a square.
import React from 'react';
import { Shape, Triangle, Circle, Square } from './shapes';

describe('Shape', () => {
    it('Should set the color of the shape', () => {
        const shape = new Shape();
        shape.setColor('Green');
        expect(shape.color).toEqual('Green');
    });
});

// Setting up 3 seperate functions for the 3 shapes previous stated.
// "decrible is setting up the function"
// "const" is stating that each time the "Triangle" will be a new one.
// ".setColor" is setting up for the Triangle to be red.
// const Expected is calling what dimentions the shapes themselveds should be
// This logic applies to (line 18 - 49)
describe('Triangle', () => {
    it('Should make a Red Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        const expected = (
            <polygon points="150,50,50,150,250,150" style={{ fill: 'red' }} />
        );
        console.log('Actual', triangle.render());
        console.log('Expected', expected);
        expect(triangle.render()).toEqual(expected);
    });
});

describe('Circle', () => {
    it('Should make an Orange Circle', () => {
        const circle = new Circle();
        circle.setColor('orange');
        const expected = (
            <circle cx="150" cy="150" r="100" style={{ fill: 'orange' }} />
        );
        expect(circle.render()).toEqual(expected);
    });
});

describe('Square', () => {
    it('Should make a Blue Square', () => {
        const square = new Square();
        square.setColor('blue');
        const expected = (
            <rect x="50" y="50" width="200" height="200" style={{ fill: 'blue' }} />
        );
        expect(square.render()).toEqual(expected);
    });
});
