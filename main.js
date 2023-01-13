// Requirements For The Energy Progress Card Animation
let energyProgressBar = document.querySelector(
  ".full-purple .circular-progress"
);
let energyProgressNumber = document.querySelector(
  ".full-purple .progress-number"
);
let energyIndicator = document.querySelector(".full-purple .indicator");
let energyValue = 0;
let energyEndValue = 45;

// Requirements For The Range Progress Card Animation
let rangeProgressBar = document.querySelector(".pink .circular-progress");
let rangeProgressNumber = document.querySelector(".pink .progress-number");
let rangeIndicator = document.querySelector(".pink .indicator");
let rangeValue = 0;
let rangeEndValue = 52;

// Requirements For The Break-fluid Progress Card Animation
let brFluidProgressBar = document.querySelector(".purple .circular-progress");
let brFluidProgressNumber = document.querySelector(".purple .progress-number");
let brFluidIndicator = document.querySelector(".purple .indicator");
let brFluidValue = 0;
let brFluidEndValue = 9;

// Requirements For The Tire-wear Progress Card Animation
let tireWearProgressBar = document.querySelector(".yellow .circular-progress");
let tireWearProgressNumber = document.querySelector(".yellow .progress-number");
let tireWearIndicator = document.querySelector(".yellow .indicator");
let tireWearValue = 0;
let tireWearEndValue = 25;

let speed = 20; // Speed Of The Percentage Animation

let energyProgress = setInterval(() => {
  energyValue++;
  energyProgressNumber.innerHTML = `${energyValue}%`;
  energyIndicator.style.transform = `rotate(${energyValue * 2.7}deg)`;
  energyProgressBar.style.background = `conic-gradient(
    white ${energyValue * 2.7}deg,
    #b37efc ${energyValue * 2.7}deg 270deg,
    #A162F7 270deg 360deg
    )`;
  if (energyValue === energyEndValue) clearInterval(energyProgress);
}, speed);

let rangeProgress = setInterval(() => {
  rangeValue++;
  rangeProgressNumber.innerHTML = `${rangeValue + 105}k%`;
  rangeIndicator.style.transform = `rotate(${rangeValue * 2.7}deg)`;
  rangeProgressBar.style.background = `conic-gradient(
    #FF7E86 ${rangeValue * 2.7}deg,
    #F4F5F9 ${rangeValue * 2.7}deg 270deg,
    white 270deg 360deg
    )`;
  if (rangeValue === rangeEndValue) clearInterval(rangeProgress);
}, speed);

let brFluidProgress = setInterval(() => {
  brFluidValue++;
  brFluidProgressNumber.innerHTML = `${brFluidValue}%`;
  brFluidIndicator.style.transform = `rotate(${brFluidValue * 2.7}deg)`;
  brFluidProgressBar.style.background = `conic-gradient(
    #a162f7 ${brFluidValue * 2.7}deg,
    #F4F5F9 ${brFluidValue * 2.7}deg 270deg,
    white 270deg 360deg
    )`;
  if (brFluidValue === brFluidEndValue) clearInterval(brFluidProgress);
}, speed);

let tireWearProgress = setInterval(() => {
  tireWearValue++;
  tireWearProgressNumber.innerHTML = `${tireWearValue}%`;
  tireWearIndicator.style.transform = `rotate(${tireWearValue * 2.7}deg)`;
  tireWearProgressBar.style.background = `conic-gradient(
    #f6cc0d ${tireWearValue * 2.7}deg,
    #F4F5F9 ${tireWearValue * 2.7}deg 270deg,
    white 270deg 360deg
    )`;
  if (tireWearValue === tireWearEndValue) clearInterval(tireWearProgress);
}, speed);
