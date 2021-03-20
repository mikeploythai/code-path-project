// Global consts
const clueHoldTime = 300;
const cluePauseTime = 300;
const nextClueWaitTime = 700;

// Global vars
var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var mistakeCount = 3;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

let int = document.getElementById("number");

function startGame() {
  progress = 0;
  mistakeCount = 3;
  int.innerHTML = mistakeCount;
  gamePlaying = true;
  
  // Swap buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("livesCounter").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  
  // Swap buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("livesCounter").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  
  for(let i = 0; i <= progress; i++) {
    console.log("Play single clue: " + pattern[i] + " in " + delay + "ms")
    
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You Lost.")
}

function winGame() {
  stopGame();
  alert("Game Over. You Won!")
}

function guess(btn) {
  console.log("User guessed: " + btn);
  
  if(!gamePlaying) {
    return;
  }
  
  if(pattern[guessCounter] == btn) {
    // Is guess correct? Yes
    if(guessCounter == progress) {
      // Is this the last turn? Yes
      if(progress == pattern.length - 1) {
        winGame();
      } else {
        // Is this the last turn? No
        progress++;
        playClueSequence();
      }
    } else {
      // Is the turn over? No
      guessCounter++;
    }
  } else {
    // Is guess correct? No. Is this the last turn? Yes
    mistakeCount--;
    int.innerHTML = mistakeCount;

    playClueSequence();
    
    if(mistakeCount == 0) {
      loseGame();
      mistakeCount = 3;
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 513.2 // initially 466, wanted to make it half-step higher in pitch
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)