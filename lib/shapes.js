// Define the Shape class
export class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

module.exports = { Circle, Triangle, Square };