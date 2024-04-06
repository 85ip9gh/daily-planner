/**
 * Purpose: JS file to hold functions to handle saving the form to
 * browser storage, loading it from browser storage, toggling dark mode
 * and playing audio
 *
 * Author(s): Daniel Amirault, Pesanth Janaseth Rangaswamy Anitha, Zachary Ivanoff, Susan Macinnis 
 */

//Global variable in order to have behaviour be persistent
let DarkMode = 1;

//initalize an empty JS object
let formData = {};

// define the base localhost URL for the server
//const SERVER_URL = "http://localhost:4242";

// define the base ugdev URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4242";


/**
 * Function to save the form's fields, in a single object in browser storage
 * on click of save button.
 */
function saveToBrowser() {

  //select all html elements of type input
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(function (input) {
    //if a field is a radio button, only save if checked
    if (input.type == 'radio') {
      if (input.checked) {
        // console.log("radio key: " + input.name + " value: " + input.value);
        formData[input.name] = input.value;
      }
    } else {
      // console.log("key: " + input.name + " value: " + input.value);
      formData[input.name] = input.value;
    }
  });

  //store the whole object into local browser storage (permanent)
  localStorage.setItem('formData', JSON.stringify(formData));
}

/**
 * Function to submit the form's fields, into the database in future, currently
 * only saves to browser storage and clears fields.
 */
function upload() {

  saveToBrowser();

  $.post(SERVER_URL + "/submit", formData, successFn).fail(errorFn);
  
  const inputs = document.querySelectorAll('input');

  inputs.forEach(function (input) {
    //if a field is a radio button, only clear if checked
    if (input.type == 'radio') {
      if (input.checked) {
          input.checked = false;
      }
    } else {
        //all other input fields cleared
        input.value = '';
    }
  });
}

function download() {
  $.get(SERVER_URL + "/form", function(data) {
    formData = data;
    localStorage.setItem('formData', JSON.stringify(formData));
    getFromBrowser();
  }).fail(errorFn);
}

function successFn(returnedData) {
  console.log(returnedData);
}

function errorFn(err) {
  console.log(err.responseText);
}

/**
 * Function for on load, pulls any previously saved data from local browser storage
 * into the form's fields.
 */
function getFromBrowser() {
  const retrievedObject = JSON.parse(window.localStorage.getItem('formData'));

  //select all the input fields
  const inputs = document.querySelectorAll('input');

  //get the values of the parsed JSON object
  const elements = Object.values(retrievedObject);
  
  for (const key in retrievedObject) {
    if (retrievedObject.hasOwnProperty(key)) {
      // Find the input elements in the form using their name attribute
      const inputElements = document.querySelectorAll(`[name="${key}"]`);
  
      // If input elements found
      if (inputElements.length > 0) {
        // If it's a radio input
        if (inputElements[0].type === "radio") {
          // Loop through radio buttons to find the one that matches the value from the JSON object
          inputElements.forEach(function (radio) {
            if (radio.value === retrievedObject[key]) {
              radio.checked = true; // Check the radio button if its value matches
            }
          });
        } else {
          // For non-radio inputs, set their value to the corresponding value from the JSON object
          inputElements.forEach(function (input) {
            input.value = retrievedObject[key];
          });
        }
      }
    }
  }
}

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