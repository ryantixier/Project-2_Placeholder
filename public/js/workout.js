const pastBtn = $("#archive-button");
const pastContainer = $("#past-workouts");
const saveBtn = $("#save-workout");
const addExerciseBtn = $("#add-exercise");
const removeExerciseBtn = $("#exercises-group");
const workoutCompleteBtn = $("#workout-completed");
//keep track of how many exercises a user adds
let exerciseCount = 0;

//load in current workout if one in local storage
$(document).ready(function () {
  const workout = JSON.parse(localStorage.getItem("currentWorkout"));
  if (workout) {
    displayWorkout(workout);
  }
});
$(document).ready(selectDropdownItems);

// pertains to selecting the item in the dropdown
function selectDropdownItems() {
  const dropdownItems = $(".dropdown-item");
  dropdownItems.each((index, item) => {
    $(item).click(reflectText);
  });
}

// after selectDropdownItems completes, reflects selected item's text
function reflectText() {
  const selectedItemText = $(this).text().trim();
  const dropdownButton = $("#dropdownMenuButton");
  dropdownButton.text(selectedItemText);
}

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

    const workoutElement = `
    <div class="mt-4">
      <h5 class="text-center">Date: ${formattedDate}</h5>
      <p>Duration: ${workout.duration} minutes</p>
      <p>Calories Burned: ${workout.calories_burned}</p>
      <ul>`;

    pastContainer.append(workoutElement);
    //looping through exercises array inside the workout loop to display exercise data
    workout.exercises.forEach((exercise) => {
      const exerciseElement = `<li>Exercise: ${exercise.exercise_name}, ${exercise.personalBest.record_value} ${exercise.personalBest.record_unit}</li>`;
      pastContainer.append(exerciseElement);
    });
    pastContainer.append(`<hr></ul></div>`);
  });
}

//display current workout
function displayWorkout(workout) {
  const currentContainer = $("#current-workout");
  const completedButton = $("#workout-completed");
  currentContainer.empty();

  const createdAt = new Date(workout.createdAt);
  const formattedDate = `${
    createdAt.getMonth() + 1
  }-${createdAt.getDate()}-${createdAt.getFullYear()}`;

  const workoutElem = `
  <div class="card mb-3">
    <div class="card-header">
      Current Workout - Date: ${formattedDate}
    </div>
    <div class="card-body">
      <h5 class="card-title">Duration: ${workout.duration} minutes</h5>
      <p class="card-text">Calories Burned: ${workout.calories_burned}</p>
    </div>
  </div>`;

  //store the current workout in local storage
  localStorage.setItem("currentWorkout", JSON.stringify(workout));

  currentContainer.append(workoutElem);
  workout.exercises.forEach((exercise) => {
    const exerciseElem = `
    <div class="card mb-3">
      <div class="card-header">
        Exercise: ${exercise.exercise_name}
      </div>
      <div class="card-body">
        <p class="card-text">${exercise.exercise_desc}</p>
        <p class="card-text">Goal: ${exercise.personalBest.record_value} ${exercise.personalBest.record_unit}</p>
      </div>
    </div>`;
    currentContainer.append(exerciseElem);
  });
  completedButton.show();
}

workoutCompleteBtn.click(function () {
  $("#current-workout").empty();
  $(this).hide();
  localStorage.removeItem("currentWorkout");
});

pastBtn.click(getPastWorkouts);

saveBtn.click(function (e) {
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
        $.ajax({
          type: "GET",
          url: `/api/workout/${data.id}`,
          success: function (workout) {
            displayWorkout(workout);
          },
          error: function () {
            alert("error loading the workout");
          },
        });
      }

      $("#createWorkout").modal("hide");
    },
    error: function () {
      alert("error saving workout");
    },
  });
});

//event listener for an add-exercise button
addExerciseBtn.click(function (e) {
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
removeExerciseBtn.on("click", ".remove-exercise", function (e) {
  e.preventDefault();
  const exerciseNumber = $(this).data("exercise");
  $(`#exercise${exerciseNumber}`).remove();
});
