const images = {
  tosh: "images/image copy.png",
  qaychi: "images/image copy 2.png",
  qogoz: "images/image.png"
};

const choices = Object.keys(images);

const playerImg = document.getElementById("playerImg");
const botImg = document.getElementById("botImg");
const result = document.getElementById("result");


const audio = {
  win: document.getElementById("audio-win"),
  lose: document.getElementById("audio-lose"),
  draw: document.getElementById("audio-draw")
};


function play(playerChoice) {
  const botChoice = choices[Math.floor(Math.random() * choices.length)];

  setImage(playerImg, images[playerChoice]);
  setImage(botImg, images[botChoice]);

  if (playerChoice === botChoice) {
    showResult("🤝 Durrang!", "#b34040");
    celebrate1();
    playAudio(audio.draw);
  } else if (
    (playerChoice === "tosh" && botChoice === "qaychi") ||
    (playerChoice === "qaychi" && botChoice === "qogoz") ||
    (playerChoice === "qogoz" && botChoice === "tosh")
  ) {
    showResult("🔥 SEN YUTDING!", "#00d9ffd3");
    celebrate();
    playAudio(audio.win);
  } else {
    showResult("😈 BOT YUTDI!", "#cc00ff");
    celebrate1();
    playAudio(audio.lose);
  }
}


function setImage(imgEl, src) {
  imgEl.style.animation = "none"; 
  imgEl.offsetHeight; 
  imgEl.src = src;
  imgEl.style.animation = "show 0.4s ease forwards";
}


function showResult(text, color) {
  result.textContent = text;
  result.style.color = color;
}


function celebrate() {
  result.classList.add("celebrate");
  setTimeout(() => result.classList.remove("celebrate"), 1200);

  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}



function celebrate1(){
  result.classList.add("celebrate1");
  setTimeout(() => result.classList.remove("celebrate1"), 1200);

  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti1";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}

function playAudio(audioEl) {
  audioEl.currentTime = 0;
  audioEl.play();
}
