import "./style.css";
import * as _ from "lodash";

const container = document.querySelector(".container") as HTMLElement;

window.application = {
  screens: {},
  timers: [],
  levels: [],
  stopInterval: function () {
    this.timers.forEach((timer: NodeJS.Timer) => {
      clearInterval(timer);
    });
  },
  time: " ",
  renderScreen: function (screenName: string) {
    if (window.application.screens[screenName]) {
      if (container != null) {
        container.innerHTML = " ";
      }
      this.screens[screenName]();
    } else {
      console.log("Такого экрана не существует");
    }
  },
};

function renderLevelScreen() {
  if (container !== null) {
    container.textContent = "";
  }
  const divContent = document.createElement("div");
  divContent.classList.add("content");
  const title = document.createElement("h1");
  title.textContent = "Выбери сложность";
  title.classList.add("level-title");
  const divLevels = document.createElement("div");
  divLevels.classList.add("level-div");
  const divOne = document.createElement("div");
  divOne.textContent = "1";
  divOne.classList.add("level-number");
  const divTwo = document.createElement("div");
  divTwo.textContent = "2";
  divTwo.classList.add("level-number");
  const divThree = document.createElement("div");
  divThree.textContent = "3";
  divThree.classList.add("level-number");
  const buttonStart = document.createElement("button");
  buttonStart.textContent = "Старт";
  buttonStart.classList.add("level-button");
  if (container != null) {
    container.appendChild(divContent);
  }
  divContent.appendChild(title);
  divContent.appendChild(divLevels);
  divLevels.appendChild(divOne);
  divLevels.appendChild(divTwo);
  divLevels.appendChild(divThree);
  divContent.appendChild(buttonStart);
  levelChange();
  buttonStart.addEventListener("click", function (event) {
    event.preventDefault();
    renderGameScreenDif();
  });
}

window.application.screens["levels"] = renderLevelScreen;

window.application.renderScreen("levels");

function levelChange() {
  const numbers = document.querySelectorAll(".level-number");
  numbers.forEach((numb) => {
    numb.addEventListener("click", function (event) {
      const target = event.target as HTMLElement;
      numbers.forEach((numb) => {
        if (numb.classList.contains("change-level")) {
          numb.classList.remove("change-level");
        }
      });
      if (numb.classList.contains("change-level")) {
        numb.classList.remove("change-level");
      } else {
        numb.classList.add("change-level");
      }
      window.application.levels = target.textContent!;
    });
  });

  console.log(numbers);
}

function renderGameScreenDif() {
  if (container != null) {
    container.innerHTML = " ";
  }

  const gameBoxInfo = document.createElement("div");
  gameBoxInfo.classList.add("game-box-info");
  const timerBox = document.createElement("div");
  timerBox.classList.add("timer-box");
  const timerName = document.createElement("div");
  timerName.classList.add("timer-name");
  const timerMinName = document.createElement("p");
  timerMinName.classList.add("timer-min-name");
  timerMinName.textContent = "min";
  const timerSecName = document.createElement("p");
  timerSecName.classList.add("timer-sec-name");
  timerSecName.textContent = "sec";
  const timerNumb = document.createElement("div");
  timerNumb.classList.add("timer-numb");
  const timerMinNumb = document.createElement("p");
  timerMinNumb.classList.add("timer-min-numb");
  timerMinNumb.textContent = "00.";
  const timerSecNumb = document.createElement("p");
  timerSecNumb.classList.add("timer-sec-numb");
  timerSecNumb.textContent = "00";
  const gameButtonStart = document.createElement("button");
  gameButtonStart.classList.add("game-button-start");
  gameButtonStart.textContent = "Начать заново";
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  if (container != null) {
    container.appendChild(gameBoxInfo);
    container.appendChild(cardsContainer);
  }

  gameBoxInfo.appendChild(timerBox);
  gameBoxInfo.appendChild(gameButtonStart);
  timerBox.appendChild(timerName);
  timerName.appendChild(timerMinName);
  timerName.appendChild(timerSecName);
  timerBox.appendChild(timerNumb);
  timerNumb.appendChild(timerMinNumb);
  timerNumb.appendChild(timerSecNumb);
  const cardsData1 = [
    { img: "./static/1.png", name: "1" },
    { img: "./static/2.png", name: "2" },
    { img: "./static/3.png", name: "3" },
    { img: "./static/4.png", name: "4" },
    { img: "./static/5.png", name: "5" },
    { img: "./static/6.png", name: "6" },
    { img: "./static/7.png", name: "7" },
    { img: "./static/8.png", name: "8" },
    { img: "./static/9.png", name: "9" },
    { img: "./static/10.png", name: "10" },
    { img: "./static/11.png", name: "11" },
    { img: "./static/12.png", name: "12" },
    { img: "./static/13.png", name: "13" },
    { img: "./static/14.png", name: "14" },
    { img: "./static/15.png", name: "15" },
    { img: "./static/16.png", name: "16" },
    { img: "./static/17.png", name: "17" },
    { img: "./static/18.png", name: "18" },
  ];
  let numberOfCards = 0;
  if (window.application.levels === "1") {
    numberOfCards = 4;
  } else if (window.application.levels === "2") {
    numberOfCards = 6;
  } else if (window.application.levels === "3") {
    numberOfCards = 8;
  } else {
    numberOfCards = 8;
  }
  console.log(window.application.levels);
  function shuffle() {
    cardsData1.sort(() => Math.random() - 0.5);
  }
  shuffle();
  const cardsDataNumber = cardsData1.slice(0, numberOfCards);
  const cardsData = () => cardsDataNumber.concat(cardsDataNumber);

  //random
  function random() {
    const cardsBlock = cardsData();
    cardsBlock.sort(() => Math.random() - 0.5);
    return cardsBlock;
  }
  function cardGenerate() {
    const cardsBlock = random();
    cardsBlock.forEach((element) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.add("card");
      face.classList.add("card-face");
      setTimeout(() => {
        back.classList.add("card-back");
      }, 5000);

      cardsContainer.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
      face.src = element.img;
      card.setAttribute("name", element.name);

      card.addEventListener("click", () => {
        card.classList.add("card-flip");
      });
    });
    const cards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let firstCard: null | HTMLElement = null;
    let secondCard: null | HTMLElement = null;
    function flipCard(event: any) {
      const target = event.target;
      target.classList.add("card-flip");
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = target;
      } else {
        hasFlippedCard = false;
        secondCard = target;
        checkMatch();
      }
    }
    function checkMatch() {
      if (firstCard === null || secondCard === null) {
        return;
      }
      if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
        firstCard.style.pointerEvents = "none";
        secondCard.style.pointerEvents = "none";
        const flippedCards = document.querySelectorAll(".card-flip");
        if (flippedCards.length === numberOfCards * 2) {
          renderWinScreen();
        }
      } else {
        renderLoseScreen();
      }
    }
    cards.forEach((card) => {
      card.addEventListener("click", flipCard);
    });
  }
  cardGenerate();
  gameButtonStart.addEventListener("click", () => {
    renderLevelScreen();
  });
  let min = 0;
  let sec = 0;

  function startTimer() {
    setInterval(() => {
      sec++;
      timerSecNumb.textContent = String(sec);
      if (sec < 10) {
        timerSecNumb.textContent = "0" + sec;
      }
      if (sec === 60) {
        sec = 0;
        min++;
        timerMinNumb.textContent = min + ".";
        if (min < 10) {
          timerMinNumb.textContent = "0" + min + ".";
        }
      }
      window.application.time =
        timerMinNumb.textContent + timerSecNumb.textContent;
    }, 1000);
  }
  window.application.timers.push(setTimeout(startTimer, 5000));
}
window.application.screens["game"] = renderGameScreenDif;
function renderWinScreen() {
  if (container != null) {
    container.textContent = " ";
  }
  const infoGameBox = document.createElement("div");
  infoGameBox.classList.add("info-game");
  const winImage = document.createElement("img");
  winImage.src = "../static/win.png";
  winImage.classList.add("win-image");
  const winTitle = document.createElement("h1");
  winTitle.classList.add("win-title");
  winTitle.textContent = "Вы выиграли!";
  const timerTitle = document.createElement("h3");
  timerTitle.classList.add("timer-title");
  timerTitle.textContent = "Затраченное время:";
  const spendTime = document.createElement("h2");
  const timerMinNumb = document.createElement("p");
  timerMinNumb.classList.add("timer-min-numb");

  const timerSecNumb = document.createElement("p");
  timerSecNumb.classList.add("timer-sec-numb");

  spendTime.classList.add("spend-time");
  spendTime.textContent! = window.application.time;
  window.application.stopInterval();

  const winButton = document.createElement("button");
  winButton.classList.add("win-button");
  winButton.textContent = "Играть снова";
  if (container != null) {
    container.appendChild(infoGameBox);
  }
  infoGameBox.appendChild(winImage);
  infoGameBox.appendChild(winTitle);
  infoGameBox.appendChild(timerTitle);
  infoGameBox.appendChild(spendTime);
  spendTime.appendChild(timerMinNumb);
  spendTime.appendChild(timerSecNumb);
  infoGameBox.appendChild(winButton);
  winButton.addEventListener("click", () => {
    window.application.stopInterval();
    renderLevelScreen();
  });
}
window.application.screens["win"] = renderWinScreen;
function renderLoseScreen() {
  if (container != null) {
    container.textContent = " ";
  }
  const infoGameBox = document.createElement("div");
  infoGameBox.classList.add("info-game");
  const winImage = document.createElement("img");
  winImage.src = "../static/lost.png";
  winImage.classList.add("win-image");
  const winTitle = document.createElement("h1");
  winTitle.classList.add("win-title");
  winTitle.textContent = "Вы проиграли!";
  const timerTitle = document.createElement("h3");
  timerTitle.classList.add("timer-title");
  timerTitle.textContent = "Затраченное время:";
  const spendTime = document.createElement("h2");
  const timerMinNumb = document.createElement("p");
  timerMinNumb.classList.add("timer-min-numb");

  const timerSecNumb = document.createElement("p");
  timerSecNumb.classList.add("timer-sec-numb");

  spendTime.classList.add("spend-time");
  spendTime.textContent! = window.application.time;
  window.application.stopInterval();

  const winButton = document.createElement("button");
  winButton.classList.add("win-button");
  winButton.textContent = "Играть снова";
  if (container != null) {
    container.appendChild(infoGameBox);
  }
  infoGameBox.appendChild(winImage);
  infoGameBox.appendChild(winTitle);
  infoGameBox.appendChild(timerTitle);
  infoGameBox.appendChild(spendTime);
  spendTime.appendChild(timerMinNumb);
  spendTime.appendChild(timerSecNumb);
  infoGameBox.appendChild(winButton);
  winButton.addEventListener("click", () => {
    window.application.stopInterval();
    renderLevelScreen();
  });
}
window.application.screens["lose"] = renderLoseScreen;
