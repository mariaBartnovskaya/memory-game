const { it, expect } = require('@jest/globals');

const { shuffle } = require('./shuffle');
const { cardsData } = require('./double');

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
it('should double array', () => {
    //prepare
    const array = [
        { img: './static/1.png', name: '1' },
        { img: './static/2.png', name: '2' },
        { img: './static/3.png', name: '3' },
    ];

    //action

    const expected = cardsData(array);

    //check
    expect(expected).toHaveLength(6);
});
