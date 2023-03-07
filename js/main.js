// Student Grades Assignment Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let grades = [60, 50, 34, 70, 80, 25, 40, 65, 90, 83, 35, 42, 20, 68];
let maxGrade = 100; // grade values should be b/t 0 and max

// Display Data
drawArray(grades, maxGrade);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "first40") {
    firstTo40();
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "stats") {
    displayStats();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  } else if (selection === "removeBelow50") {
    removeBelow50();
  }

  // Redraw array to show any changes
  drawArray(grades, maxGrade);
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function firstTo40() {
  grades[0] = 40;
  outputEl.innerHTML = "First grade to 40";
}

function lastTo50() {
  grades[grades.length - 1] = 50;
  outputEl.innerHTML = "Last grade to 50";
}

function randomTo100() {
  grades[randomInt(0, grades.length)] = 100;
  outputEl.innerHTML = "Random grade to 100";
}

function addRandomGrade() {
  grades[grades.length] = randomInt(0, 100);
  outputEl.innerHTML = "Add random grade";
}

function removeLastGrade() {
  grades.pop();
  outputEl.innerHTML = "Remove the last grade";
}

function displayStats() {
  let max = Math.max(...grades);
  let min = Math.min(...grades);
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  let average = total / grades.length;
  outputEl.innerHTML = `Maximum: ${max}, Minimum: ${min}, Average: ${average}`;
}

function countBelow50() {
  let below50 = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      below50++;
    }
  }
  if (below50 === 1) {
    outputEl.innerHTML = `There is 1 grade below 50`;
  } else {
    outputEl.innerHTML = `There are ${below50} grades below 50`;
  }
}

function lowGradesTo50() {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      grades[i] = 50;
    }
  }
  outputEl.innerHTML = "Change low grades to 50";
}

function increaseGradesBy10() {
  for (let i = 0; i < grades.length; i++) {
    grades[i] += 10;
  }
  outputEl.innerHTML = "Increase all grades by 10%";
}

function decreaseGradesBy10() {
  for (let i = 0; i < grades.length; i++) {
    grades[i] -= 10;
  }
  outputEl.innerHTML = "Decrease all grades by 10%";
}

function removeBelow50() { // Oli please why does it not get rid of all of them? 
  // Why do i need to press the button twice?
  console.log(grades);
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      grades.splice(i, 1);
      console.log(i);
    }
  }
  outputEl.innerHTML = "Remove all grades below 50";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
