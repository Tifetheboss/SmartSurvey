function removeQuestions() {
  this.parentElement.remove();
}

var questionCounter = 1;

function addInputArea() {
  var inputContainer = document.getElementById("input-container");

  var newInputArea = document.createElement("div");
  newInputArea.className = "input-area";

  var questionInput = document.createElement("input");
  questionInput.type = "text";
  questionInput.className = "question-input";
  questionInput.placeholder = "Enter Question";

  var addOptionButton = document.createElement("button");
  addOptionButton.className = "add-option-btn";
  addOptionButton.textContent = "Add Option";

  const deleteQuestion = document.createElement("a");
  deleteQuestion.className = "remove-question";
  deleteQuestion.innerHTML = "&times";

  deleteQuestion.addEventListener("click", removeQuestions);

  // const toggleContainer = document.createElement("div");
  // toggleContainer.className = "toggle-container";

  // const toggle = document.createElement("div");
  // toggle.className = "toggle";

  // function animateToggle() {
  // toggle.classList.toggle("active");
  // if (toggle.classList.contains("active")) {
  // questionInput.required = "required";
  // } else {
  // }
  // }

  // toggle.addEventListener("click", animateToggle);

  // const toggleBtn = document.createElement("div");
  // toggleBtn.className = "toggle-btn";

  // const required = document.createElement("div");
  // required.className = "required";
  // required.innerHTML = "required";

  // newInputArea.appendChild(toggleContainer);
  // toggleContainer.appendChild(toggle);
  // toggle.appendChild(toggleBtn);
  // toggleContainer.appendChild(required);

  const flex2 = document.createElement("div");
  flex2.className = "flex2";
  flex2.id = "flex";

  flex2.appendChild(newInputArea);
  newInputArea.appendChild(deleteQuestion);
  newInputArea.appendChild(questionInput);
  newInputArea.appendChild(addOptionButton);
  inputContainer.appendChild(newInputArea);
}

function submitForm() {
  var questionInputs = document.getElementsByClassName("question-input");
  var titleInput = document.getElementsByClassName("title-input");

  var titles = [];
  for (var i = 0; i < titleInput.length; i++) {
    var title = titleInput[i].value;

    titles.push({ title: title });
  }

  var options = [];
  for (var i = 0; i < questionInputs.length; i++) {
    var question = questionInputs[i].value;
    var optionsContainer = questionInputs[i].parentNode;
    var optionInputs = optionsContainer.getElementsByClassName("option-input");

    var questionOptions = [];
    for (var j = 0; j < optionInputs.length; j++) {
      questionOptions.push(optionInputs[j].value);
    }

    options.push({ title: question, options: questionOptions });
  }

  localStorage.setItem("options", JSON.stringify(options));
  localStorage.setItem("titles", JSON.stringify(titles));

  window.location.href = "preview.html";
}

function removeOptions() {
  this.parentElement.remove();
}

function addOption(event) {
  event.preventDefault();
  var optionsContainer = event.target.parentNode;
  var optionInput = document.createElement("input");
  optionInput.type = "text";
  optionInput.className = "option-input";
  optionInput.placeholder = "Enter option";

  var deleteOption = document.createElement("a");
  deleteOption.className = "remove-option";
  deleteOption.innerHTML = "&times";

  deleteOption.addEventListener("click", removeOptions);

  const flex = document.createElement("div");
  flex.className = "span";

  optionsContainer.appendChild(flex);
  flex.appendChild(optionInput);
  flex.appendChild(deleteOption);
}

document
  .getElementById("add-question-btn")
  .addEventListener("click", addInputArea);
document.getElementById("submit-btn").addEventListener("click", submitForm);
document.addEventListener("click", function (event) {
  if (event.target && event.target.className === "add-option-btn") {
    addOption(event);
  }
});
