// Import React if needed
import React from 'react';

// Define the Shape class
export class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

// Define other classes (Triangle, Circle, Square) that extend Shape
export class Triangle extends Shape {
    render() {
        return (
            <polygon points="150,50,50,150,250,150" style={{ fill: this.color }} />
        );
    }
}

export class Circle extends Shape {
    render() {
        return (
            <circle cx="150" cy="150" r="100" style={{ fill: this.color }} />
        );
    }
}

export class Square extends Shape {
    render() {
        return (
            <rect x="50" y="50" width="200" height="200" style={{ fill: this.color }} />
        );
    }
}

// Export the classes for use in other modules
export { Shape, Triangle, Circle, Square };
