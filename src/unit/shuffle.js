/* eslint-disable prettier/prettier */
const cardsData1 = [
    { img: './static/1.png', name: '1' },
    { img: './static/2.png', name: '2' },
    { img: './static/3.png', name: '3' },
];
function shuffle() {
    return cardsData1.sort(() => Math.random() - 0.5);
}
shuffle();
module.exports = { shuffle };
