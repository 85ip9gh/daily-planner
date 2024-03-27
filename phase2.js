/**
 * Purpose: Holds functions and code for storing all user information
 * in a single JSON object into local browser storage, and restoring.
 *
 * Author: Daniel Amirault
 */

/**
 * Function for on click of "Save button"
 */
function saveToBrowser() {
  //initalize an empty JS object
  const formObject = {};

  //loop through a structure holding keys (html elements), and store value of html elements
  const inputs = document.querySelectorAll('input');

  inputs.forEach(function (input) {
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
 */
function getFromBrowser() {
  const retrievedObject = JSON.parse(window.localStorage.getItem('formData'));

  const inputs = document.querySelectorAll('input');

  const elements = Object.values(retrievedObject);

  let count = 0;
  for (var i in inputs) {
    if (inputs[i].type == "radio") {
      if (inputs[i].value == elements[count]) {
        inputs[i].checked = true;
        count++;
      }
    } else {
      inputs[i].value = elements[count];
      count++;
    }
  }
}


/* 
   The purpose of this file is to define the function to toggle dark mode.

   Author: Terry
*/

// used to indicate whether the current display state
// is dark mode (even) or light mode (odd)
// Special note: the value of this variable is persistent
// because it has global scope

let DarkMode = 1;

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