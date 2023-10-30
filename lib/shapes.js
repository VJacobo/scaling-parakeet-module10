// "this.color" is allowing it to be whatever color is chosen
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}
// Class is giving attributes the the possible chosen shapes.
// "render" is calling a function to render the shape attributes, like the style and color that is chosen by the user 
// logic applies to (line 14 - 36)
class Triangle extends Shape {
    render() {
        return (
            <polygon points="150,50,50,150,250,150" style={{ fill: this.color }} />
        );
    }
}

class Circle extends Shape {
    render() {
        return (
            <circle cx="150" cy="150" r="100" style={{ fill: this.color }} />
        );
    }
}

class Square extends Shape {
    render() {
        return (
            <rect x="50" y="50" width="200" height="200" style={{ fill: this.color }} />
        );
    }
}
