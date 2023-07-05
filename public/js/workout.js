const pastBtn = $("#archive-button");
const pastContainer = $("#past-workouts");

//fetch call for past workouts
async function getPastWorkouts() {
  const response = await fetch("/api/workout/past-workouts");
  const data = await response.json();

  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  displayWorkouts(data);
}

//workouts passed in is data retrieved from fetch call
function displayWorkouts(workouts) {
  const recentWorkouts = workouts.slice(0, 5);
  pastContainer.empty();
  //looping through the workouts array for each workout
  recentWorkouts.forEach((workout) => {
    const createdAt = new Date(workout.createdAt);
    const formattedDate = `${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}-${createdAt.getFullYear()}`;

    const workoutElement = `<p> WorkoutID ${workout.id} -Date: ${formattedDate}  - Duration: ${workout.duration} minutes, Calories Burned: ${workout.calories_burned}</p>`;

    pastContainer.append(workoutElement);
    //looping through exercises array inside the workout loop to display exercise data
    workout.exercises.forEach((exercise) => {
      const exerciseElement = `<li>Exercise: ${exercise.exercise_name}, ${exercise.personalBest.record_value} ${exercise.personalBest.record_unit}</li>`;
      pastContainer.append(exerciseElement);
    });
  });
}

pastBtn.click(getPastWorkouts);

$("#save-workout").click(function (e) {
  e.preventDefault();
  //get the input values from the workout form
  const comments = $("#commentsInput").val();
  const duration = $("#durationInput").val();
  const caloriesBurned = $("#caloriesInput").val();
  //empty arry to store exercise input values
  let exercises = [];
  //this loops through each exercise input field to get their values
  for (let i = 1; i <= exerciseCount; i++) {
    if ($(`#exerciseInput${i}`).length) {
      let exercise = {
        id: $(`#exerciseInput${i}`).val(),
        record_value: $(`#valueInput${i}`).val(),
        record_unit: $(`#unitInput${i}`).val(),
      };
      exercises.push(exercise);
    }
  }
  //uses ajax to save the workout using a post request
  $.ajax({
    type: "POST",
    url: "/api/workout/new-workout",
    data: {
      comments: comments,
      duration: duration,
      calories_burned: caloriesBurned,
      exercises: exercises,
    },
    success: function (data) {
      $("#commentsInput").val("");
      $("#durationInput").val("");
      $("#caloriesInput").val("");
      for (let i = 1; i <= exerciseCount; i++) {
        if ($(`#exerciseInput${i}`).length) {
          $(`#exerciseInput${i}`).val("");
          $(`#valueInput${i}`).val("");
          $(`#unitInput${i}`).val("");
        }
        alert("Workout saved!");
      }

      $("#createWorkout").modal("hide");
    },
    error: function () {
      alert("error");
    },
  });
});
//keep track of how many exercises a user adds
let exerciseCount = 0;
//event listener for an add-exercise button
$("#add-exercise").click(function (e) {
  e.preventDefault();
  exerciseCount++;
  //append new exercise input fields to exercise-group div
  $("#exercises-group").append(`
    <div id="exercise${exerciseCount}" class="form-group">
      <label for="exerciseInput${exerciseCount}">Exercise</label>
      <select name="exercise_id" class="form-control" id="exerciseInput${exerciseCount}" required></select>
      <label for="valueInput${exerciseCount}">Value</label>
      <input type="number" name="record_value" class="form-control" id="valueInput${exerciseCount}" required />
      <label for="unitInput${exerciseCount}">Units(lbs, miles, reps)</label>
      <input type="text" name="record_unit" class="form-control" id="unitInput${exerciseCount}" required />
      <button type="button" class="remove-exercise" id="add-exercise" data-exercise="${exerciseCount}">Remove</button>
    </div>
  `);
  $.ajax({
    type: "GET",
    url: "/api/exercise",
    success: function (exercises) {
      exercises.forEach(function (exercise) {
        const option = `<option value="${exercise.id}">${exercise.exercise_name}</option>`;
        $(`#exerciseInput${exerciseCount}`).append(option);
      });
    },
    error: function () {
      alert("error loading exercises");
    },
  });
});
//event listener for removing an exercise in the group of exercises
$("#exercises-group").on("click", ".remove-exercise", function (e) {
  e.preventDefault();
  const exerciseNumber = $(this).data("exercise");
  $(`#exercise${exerciseNumber}`).remove();
});
