/**
 * Purpose: JS file to hold functions to handle saving the form to
 * browser storage, loading it from browser storage, toggling dark mode
 * and playing audio
 *
 * Author(s): Daniel Amirault, Pesanth Janaseth Rangaswamy Anitha, Zachary Ivanoff, Susan Macinnis 
 */

/**
 * Function to save the form's fields, in a single object in browser storage
 * on click of save button.
 */
function saveToBrowser() {
  //initalize an empty JS object
  const formObject = {};

  //loop through a structure holding keys (html elements), and store value of html elements
  const inputs = document.querySelectorAll('input');

  inputs.forEach(function (input) {
    //if a field is a radio button, only save if checked
    if (input.type == 'radio') {
      if (input.checked) {
        console.log("radio key: " + input.name + " value: " + input.value);
        formObject[input.name] = input.value;
      }
    } else {
      console.log("key: " + input.name + " value: " + input.value);
      formObject[input.name] = input.value;
    }
  });

  //store the whole object into local browser storage (permanent)
  localStorage.setItem('formData', JSON.stringify(formObject));
}

/**
 * Function for on load, pulls any previously saved data from local browser storage
 * into the form's fields.
 */
function getFromBrowser() {
  //parse the object from browser storage
  const retrievedObject = JSON.parse(window.localStorage.getItem('formData'));

  //select all the input fields
  const inputs = document.querySelectorAll('input');

  //get the values of the parsed JSON object
  const elements = Object.values(retrievedObject);

  //initialize a count variable for radio buttons having multiple fields
  let count = 0;

  //loop through the input fields
  for (var i in inputs) {
    //if a field is a radio button
    if (inputs[i].type == "radio") {
      //check if radio button option matches the one saved into the JSON object
      if (inputs[i].value == elements[count]) {
        //if so, check the radio button
        inputs[i].checked = true;
        count++;
      }
    } else {
      //if not a radio button, simply place the values of the JSON object into the input's value
      inputs[i].value = elements[count];
      count++;
    }
  }
}

//Global variable in order to have behaviour be persistent
let DarkMode = 1;

/**
 * Function used to indicate whether the current display state is dark mode (even) or light mode (odd)
 * This has been adapted from Terry's solution (More tailwind > tailToggleFunc) for our website
 */
function toggleDarkMode() {
  // test whether evenIsDarkMode is an even or odd number
  if (DarkMode == 0) {
    document.getElementsByTagName("body")[0].classList.remove('dark');
    DarkMode = 1;
    document.getElementsByTagName("button")[0].innerHTML = "Dark Mode";
  } else {
    document.getElementsByTagName("body")[0].classList.add('dark');
    DarkMode = 0;
    document.getElementsByTagName("button")[0].innerHTML = "Light Mode";
  }
}


/**
 * Function for playing the audio element nested within an html element,
 * on click of the Gold button.
 */
function playAudio(element) {
  var audio = element.querySelector('audio');
  audio.play();
}