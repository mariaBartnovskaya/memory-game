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
  container.appendChild(divContent);
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
      const target = event.target;
      window.application.levels = target.textContent;
      console.log(window.application.levels);
    });
  });
  console.log(numbers);
}

function renderGameScreen() {
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
  container.appendChild(gameBoxInfo);
  container.appendChild(cardsContainer);
  gameBoxInfo.appendChild(timerBox);
  gameBoxInfo.appendChild(gameButtonStart);
  timerBox.appendChild(timerName);
  timerName.appendChild(timerMinName);
  timerName.appendChild(timerSecName);
  timerBox.appendChild(timerNumb);
  timerNumb.appendChild(timerMinNumb);
  timerNumb.appendChild(timerSecNumb);

  const cardsData1 = [
    { img: "./img/1.png", name: "1" },
    { img: "./img/2.png", name: "2" },
    { img: "./img/3.png", name: "3" },
    { img: "./img/4.png", name: "4" },
    { img: "./img/5.png", name: "5" },
    { img: "./img/6.png", name: "6" },
    { img: "./img/7.png", name: "7" },
    { img: "./img/8.png", name: "8" },
    { img: "./img/9.png", name: "9" },
    { img: "./img/10.png", name: "10" },
    { img: "./img/11.png", name: "11" },
    { img: "./img/12.png", name: "12" },
  ];
  const cardsData = () => cardsData1.concat(cardsData1);
  console.log(cardsData);
  //random
  function random() {
    const cards = cardsData();
    cards.sort(() => Math.random() - 0.5);
    return cards;
  }
  function cardGenerate() {
    const cards = random();
    cards.forEach((element) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      card.classList.add("card");
      face.classList.add("card-face");
      cardsContainer.appendChild(card);
      card.appendChild(face);
      face.src = element.img;
    });
  }
  cardGenerate();
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
    }, 1000);
  }
  window.application.timers.push(setTimeout(startTimer, 4000));
}
window.application.screens["game"] = renderGameScreen;

function renderGameScreenDif() {
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
  container.appendChild(gameBoxInfo);
  container.appendChild(cardsContainer);
  gameBoxInfo.appendChild(timerBox);
  gameBoxInfo.appendChild(gameButtonStart);
  timerBox.appendChild(timerName);
  timerName.appendChild(timerMinName);
  timerName.appendChild(timerSecName);
  timerBox.appendChild(timerNumb);
  timerNumb.appendChild(timerMinNumb);
  timerNumb.appendChild(timerSecNumb);

  const cardsData1 = [
    { img: "./img/1.png", name: "1" },
    { img: "./img/2.png", name: "2" },
    { img: "./img/3.png", name: "3" },
    { img: "./img/4.png", name: "4" },
    { img: "./img/5.png", name: "5" },
    { img: "./img/6.png", name: "6" },
    { img: "./img/7.png", name: "7" },
    { img: "./img/8.png", name: "8" },
    { img: "./img/9.png", name: "9" },
    { img: "./img/10.png", name: "10" },
    { img: "./img/11.png", name: "11" },
    { img: "./img/12.png", name: "12" },
  ];
  const cardsData = () => cardsData1.concat(cardsData1);
  console.log(cardsData);
  //random
  function random() {
    const cards = cardsData();
    cards.sort(() => Math.random() - 0.5);
    return cards;
  }
  function cardGenerate() {
    const cards = random();
    cards.forEach((element) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.add("card");
      face.classList.add("card-face");
      back.classList.add("card-back");
      cardsContainer.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
      face.src = element.img;

      card.addEventListener("click", () => {
        card.classList.add("card-flip");
      });
    });
  }
  cardGenerate();
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
    }, 1000);
  }
  window.application.timers.push(setTimeout(startTimer, 4000));
}
window.application.screens["game"] = renderGameScreenDif;
