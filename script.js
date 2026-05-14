// =========================
// T20pl Cricket Game Script
// =========================

// LOADING SCREEN

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loadingScreen")
    .style.display = "none";

  }, 3000);

});

// =========================
// AUDIO SYSTEM
// =========================

const crowdSound =
new Audio("assets/audio/crowd.mp3");

const batSound =
new Audio("assets/audio/bat-hit.mp3");

const sixSound =
new Audio("assets/audio/six.mp3");

const wicketSound =
new Audio("assets/audio/wicket.mp3");

const stadiumMusic =
new Audio("assets/audio/stadium-music.mp3");

// Commentary Voice Files

const englishCommentary = [
  new Audio("assets/audio/en1.mp3"),
  new Audio("assets/audio/en2.mp3"),
  new Audio("assets/audio/en3.mp3")
];

const teluguCommentary = [
  new Audio("assets/audio/tel1.mp3"),
  new Audio("assets/audio/tel2.mp3")
];

const hindiCommentary = [
  new Audio("assets/audio/hin1.mp3"),
  new Audio("assets/audio/hin2.mp3")
];

// =========================
// GAME VARIABLES
// =========================

let score = 0;
let wickets = 0;
let balls = 0;

let currentLanguage = "english";

const commentaryText =
document.querySelector(".commentary-text");

// =========================
// MATCH START
// =========================

function startMatch(){

  playCrowd();

  updateCommentary(
    "Match Started!"
  );

}

// =========================
// CROWD SOUND
// =========================

function playCrowd(){

  crowdSound.volume = 0.5;

  crowdSound.loop = true;

  crowdSound.play();

}

// =========================
// STADIUM MUSIC
// =========================

function playMusic(){

  stadiumMusic.volume = 0.3;

  stadiumMusic.loop = true;

  stadiumMusic.play();

}

function stopMusic(){

  stadiumMusic.pause();

}

// =========================
// PLAY SHOT
// =========================

function playShot(){

  batSound.currentTime = 0;

  batSound.play();

  const randomRun =
  Math.floor(Math.random() * 8);

  balls++;

  if(randomRun === 7){

    wickets++;

    wicketSound.play();

    updateScore();

    updateCommentary(
      "Clean Bowled!"
    );

    playVoice("wicket");

    animateWicket();

  }else{

    score += randomRun;

    updateScore();

    if(randomRun === 6){

      sixSound.play();

      updateCommentary(
        "Massive Six!"
      );

      playVoice("six");

      animateSix();

    }else if(randomRun === 4){

      updateCommentary(
        "Beautiful Boundary!"
      );

      playVoice("four");

    }else{

      updateCommentary(
        `${randomRun} Runs Taken`
      );

      playVoice("normal");

    }

  }

  updateOvers();

}

// =========================
// SCOREBOARD UPDATE
// =========================

function updateScore(){

  document.querySelector(".score-value")
  .innerHTML =
  `${score}/${wickets}`;

}

// =========================
// OVERS UPDATE
// =========================

function updateOvers(){

  let over =
  Math.floor(balls / 6);

  let ball =
  balls % 6;

  document.querySelector(".over-value")
  .innerHTML =
  `${over}.${ball}`;

}

// =========================
// COMMENTARY TEXT
// =========================

function updateCommentary(text){

  commentaryText.innerHTML = text;

}

// =========================
// COMMENTARY VOICE
// =========================

function playVoice(type){

  let audioList;

  if(currentLanguage === "english"){

    audioList = englishCommentary;

  }else if(currentLanguage === "telugu"){

    audioList = teluguCommentary;

  }else{

    audioList = hindiCommentary;

  }

  const randomAudio =
  audioList[
    Math.floor(
      Math.random() *
      audioList.length
    )
  ];

  randomAudio.play();

}

// =========================
// CHANGE LANGUAGE
// =========================

function setEnglish(){

  currentLanguage = "english";

  updateCommentary(
    "English Commentary Enabled"
  );

}

function setTelugu(){

  currentLanguage = "telugu";

  updateCommentary(
    "తెలుగు కామెంటరీ ప్రారంభమైంది"
  );

}

function setHindi(){

  currentLanguage = "hindi";

  updateCommentary(
    "हिंदी कमेंट्री शुरू हुई"
  );

}

// =========================
// SIX ANIMATION
// =========================

function animateSix(){

  const sixPopup =
  document.createElement("div");

  sixPopup.classList.add("six-popup");

  sixPopup.innerHTML = "🔥 SIX 🔥";

  document.body.appendChild(sixPopup);

  setTimeout(() => {

    sixPopup.remove();

  }, 2000);

}

// =========================
// WICKET ANIMATION
// =========================

function animateWicket(){

  const wicketPopup =
  document.createElement("div");

  wicketPopup.classList.add("wicket-popup");

  wicketPopup.innerHTML = "💥 WICKET 💥";

  document.body.appendChild(wicketPopup);

  setTimeout(() => {

    wicketPopup.remove();

  }, 2000);

}

// =========================
// DAY / NIGHT MODE
// =========================

function toggleNightMode(){

  document.body.classList
  .toggle("night-mode");

}

// =========================
// MULTIPLAYER PLACEHOLDER
// =========================

function createRoom(){

  alert(
    "Room Created Successfully"
  );

}

function joinRoom(){

  alert(
    "Joining Multiplayer Lobby..."
  );

}

// =========================
// LIVE SCORE POPUP
// =========================

function openLiveScores(){

  document.querySelector(".live-match")
  .scrollIntoView({
    behavior:"smooth"
  });

}

// =========================
// KEYBOARD CONTROLS
// =========================

document.addEventListener(
  "keydown",
  (e) => {

    if(e.code === "Space"){

      playShot();

    }

  }
);

// =========================
// AUTO START MUSIC
// =========================

setTimeout(() => {

  playMusic();

}, 4000);

// =========================
// INTRO COMMENTARY
// =========================

setTimeout(() => {

  updateCommentary(
    "Welcome to T20pl!"
  );

}, 3500);
