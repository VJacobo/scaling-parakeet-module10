const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
    it('Will set the color of the shape', () => {
        const shape = new Shape();
        shape.setColor('Green');
        expect(shape.color).toEqual('Green');
    });
});

describe('Triangle', => {
    it('Should make a Red Triangle', () => {
    const shape = new Triangle();
    shape.setColor('red');
    const expected = <polygon points="150,50,50,150,250,150" style="fill:red"/>;
    expext(shape.render()).toEqual(expected);
});

describe('Cirlce', => {
    it('Should make a Orange Circle', () => {
    const shape = new Circle();
    shape.setColor('orange');
    const expected = <Circle cx="150" cy="100" r="75" style="fill:orange"/>;
    expext(shape.render()).toEqual(expected);
});

describe('Square', => {
    it('Should make a Blue Square', () => {
    const shape = new Square();
    shape.setColor('blue');
    const expected = <rect x="50" y="50" width="200" style="fill:blue"/>;
    expext(shape.render()).toEqual(expected);
});