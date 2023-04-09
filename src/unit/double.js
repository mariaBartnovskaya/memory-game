/* eslint-disable prettier/prettier */
const cardsDataNumber = [
    { img: './static/1.png', name: '1' },
    { img: './static/2.png', name: '2' },
    { img: './static/3.png', name: '3' },
];
function cardsData() {
    return cardsDataNumber.concat(cardsDataNumber);
}

module.exports = { cardsData };
