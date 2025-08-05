const workouts = {
  "2025-08-05": "2 mile run for time",
  // Add more dates and workouts here
};

const trainingMenu = [
  "Dynamic Warm-Up",
  "Muscle Focus",
  "Speed, Agility, Strength",
  "Plyometric Exercises"
];

function getTodayWorkout() {
  const today = new Date().toISOString().split("T")[0];
  const workout = workouts[today] || "No workout assigned today.";
  document.getElementById("workout-details").innerText = workout;
}

function markComplete() {
  alert("Workout marked as completed!");
}

function toggleMenu() {
  const menu = document.getElementById("training-menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.innerHTML = trainingMenu.map(item => `<li>${item}</li>`).join("");
  } else {
    menu.style.display = "none";
  }
}

function saveLog() {
  const entry = document.getElementById("log-entry").value;
  const history = document.getElementById("log-history");
  const date = new Date().toLocaleDateString();
  history.innerHTML += `<p><strong>${date}:</strong> ${entry}</p>`;
  document.getElementById("log-entry").value = "";
}

getTodayWorkout();
