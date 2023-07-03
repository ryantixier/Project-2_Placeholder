const pastBtn = document.getElementById("archive-button");

//fetch call for past workouts
async function getPastWorkouts() {
  const response = await fetch("/api/workout/past-workouts");
  const data = await response.json();

  displayWorkouts(data);
}

//workouts passed in is data retrieved from fetch call
function displayWorkouts(workouts) {
  const workoutContainer = document.querySelector("#past-workouts");
  //looping through the workouts array for each workout
  workouts.forEach((workout) => {
    const createdAt = new Date(workout.createdAt);
    const formattedDate = `${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}-${createdAt.getFullYear()}`;

    const workoutElement = document.createElement("p");

    workoutElement.textContent = `Workout ${workout.id} -Date: ${formattedDate}  - Duration: ${workout.duration} minutes, Calories Burned: ${workout.calories_burned}`;
    workoutContainer.appendChild(workoutElement);
    //looping through exercises array inside the workout loop to display exercise data
    workout.exercises.forEach((exercise) => {
      const exerciseElement = document.createElement("li");
      exerciseElement.textContent = `Exercise: ${exercise.exercise_name}, Personal Best: ${exercise.personalBest.record_value} ${exercise.personalBest.record_unit}`;
      workoutContainer.appendChild(exerciseElement);
    });
  });
}

pastBtn.addEventListener("click", getPastWorkouts);
