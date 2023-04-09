const { it, expect } = require('@jest/globals');

const { shuffle } = require('./shuffle');

it('should random array', () => {
    //prepare
    const array = [
        { img: './static/1.png', name: '1' },
        { img: './static/2.png', name: '2' },
        { img: './static/3.png', name: '3' },
    ];
    //action
    const expected = shuffle(array);

    //check
    expect(expected).not.toEqual(array);
});
