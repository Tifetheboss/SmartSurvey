// const option = document.querySelector(".option");
// const addOption = document.querySelector(".more-option");
// const addQuestion = document.querySelector(".more-question");
// const questionsZone = document.querySelector(".questions-zone");
// const form = document.querySelector("form");

// function removeOptions() {
//   this.parentElement.remove();
// }

// function moreOptions() {
//   const radio = document.createElement("input");
//   radio.className = "radio";
//   radio.type = "radio";

//   const optionArea = document.createElement("input");
//   optionArea.type = "text";
//   optionArea.placeholder = "Input Option";
//   optionArea.id = "option";

//   const deleteOption = document.createElement("a");
//   deleteOption.className = "remove-option";
//   deleteOption.innerHTML = "&times";

//   deleteOption.addEventListener("click", removeOptions);

//   const flex = document.createElement("div");
//   flex.className = "span";

//   // const optionPreview = document.querySelector("#option-preview");
//   // flex.className = "option-preview";
 
//   // const optionPreviewChild = document.createElement("div");
//   // flex.className = "option-preview-child";

//   option.appendChild(flex);
//   flex.appendChild(radio);
//   flex.appendChild(optionArea);
//   flex.appendChild(deleteOption);
// };
// addOption.addEventListener("click", moreOptions);

// function removeQuestions() {
//   this.parentElement.remove();
// }

// var counter = 1;
// function moreQuestions() {
//   function moresOptions() {
//     const optionArea = document.createElement("input");
//     optionArea.type = "text";
//     optionArea.placeholder = "Input Option";
//     optionArea.id = "option";

//     const radio = document.createElement("input");
//   radio.className = "radio";
//   radio.type = "radio";

//     const deleteOption = document.createElement("a");
//     deleteOption.className = "remove-option";
//     deleteOption.innerHTML = "&times";

//     deleteOption.addEventListener("click", removeOptions);

//     const flex3 = document.createElement("div");
//     flex3.className = "flex3";

//     optionsChild.appendChild(flex3);
//     flex3.appendChild(radio);
//     flex3.appendChild(optionArea);
//     flex3.appendChild(deleteOption);
//   }

//   const questionArea = document.createElement("input");
//   questionArea.type = "text";
//   questionArea.placeholder = "Input Question";
//   questionArea.id = "question-input";

//   const deleteQuestion = document.createElement("a");
//   deleteQuestion.className = "remove-question";
//   deleteQuestion.innerHTML = "&times";

//   deleteQuestion.addEventListener("click", removeQuestions);

//   const addMoreOptions = document.createElement("div");
//   addMoreOptions.className = "add-more-options";

//   const addOptionBtn = document.createElement("button");
//   addOptionBtn.type = "button";
//   addOptionBtn.innerHTML = "Add Option";

//   addMoreOptions.addEventListener("click", moresOptions);

//   const optionsChild = document.createElement("div");
//   optionsChild.className = "optionsChild";

//   counter+=1
//   const flex2 = document.createElement("div");
//   flex2.className = "flex2";
//   flex2.id = "flex"+counter+"";

//   const toggleContainer = document.createElement("div");
//   toggleContainer.className = "toggle-container";

//   const toggle = document.createElement("div");
//   toggle.className = "toggle";

//   function animateToggle() {
//     toggle.classList.toggle("active");
//     if (toggle.classList.contains("active")) {
//       questionArea.required = "required";
//     } else {
//     }
//   }

//   toggle.addEventListener("click", animateToggle);

//   const toggleBtn = document.createElement("div");
//   toggleBtn.className = "toggle-btn";

//   const required = document.createElement("div");
//   required.className = "required";
//   required.innerHTML = "required";

//   questionsZone.appendChild(flex2);
//   flex2.appendChild(deleteQuestion);
//   flex2.appendChild(questionArea);
//   flex2.appendChild(optionsChild);
//   flex2.appendChild(toggleContainer);
//   toggleContainer.appendChild(toggle);
//   toggle.appendChild(toggleBtn);
//   toggleContainer.appendChild(required);
//   flex2.appendChild(addMoreOptions);
//   addMoreOptions.appendChild(addOptionBtn);
// }
// addQuestion.addEventListener("click", moreQuestions);

// // form.addEventListener('submit', (e) => {
// function submitForm(e){
//  e.preventDefault();

//   const title = document.querySelector('#titl');
//  const questionInputs = document.querySelector('#question-input');
//   const optionInputs = document.querySelector('#option');
//   const radioInputs = document.querySelectorAll(".radio");
//   const infoArray = [];

//   for (let i = 0; i < questionInputs.length; i++) {
//     const question = questionInputs[i].value;
//     const options = [];
//     const radioName = 'radio-' + (i + 1);

//     let checkedOption = null;
//     for (let j = 0; j < optionInputs.length; j++) {
//       if (optionInputs[j].parentNode === questionInputs[i].parentNode) {
//         const option = optionInputs[j].value;
//         const radioInput = radioInputs[j];

//         if (radioInput.name === radioName && radioInput.checked) {
//           checkedOption = option;
//         }

//         options.push(option);
//       }
//     }
//     const info = { question, options, checkedOption };
//     infoArray.push(info);
//   }

//   localStorage.setItem('infoArray', JSON.stringify(infoArray));

//   window.location.href = 'preview.html';
// }

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

        titles.push({ title: title});
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
    flex.appendChild(deleteOption)
}

document.getElementById("add-question-btn").addEventListener("click", addInputArea);
document.getElementById("submit-btn").addEventListener("click", submitForm);
document.addEventListener("click", function (event) {
    if (event.target && event.target.className === "add-option-btn") {
        addOption(event);
    }
});

