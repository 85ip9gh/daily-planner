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
    
    inputs.forEach(function(input) {
        formObject[input.name] = input.value;
        console.log("key: " + input.name + " value: " + input.value);
    });

    //store the whole object into local browser storage (permanent)
    localStorage.setItem('formData', JSON.stringify(formObject));
}

/* 
   The purpose of this file is to define the function to toggle dark mode.

   Author: Terry
*/

// used to indicate whether the current display state
// is dark mode (even) or light mode (odd)
// Special note: the value of this variable is persistent
// because it has global scope

let evenIsDarkMode = 0; 

function toggleDarkMode() {
    // test whether evenIsDarkMode is an even or odd number
    if (evenIsDarkMode % 2 == 0){
        document.getElementById("main").classList.remove('dark');
    } else {
        document.getElementById("main").classList.add('dark');
    }
    // increment evenIsDarkMode so its even or odd value is synchronized with
    // the current display state
    evenIsDarkMode++;
}

/**
 * Function for on click of "Submit button"
 */

/**
 * Function for restoring save state
 */

/**
 * Function for restoring submit state
 */

/**
function saveToBrowser() {
    if (typeof Storage !== "undefined") {
      const nameQuote = {
        name: document.getElementById("nameInput").value,
        quote: document.getElementById("quoteInput").value,
      };
  
      window.localStorage.setItem("nameQuoteObject", JSON.stringify(nameQuote));
  
      document.getElementById("nameInput").value = "";
      document.getElementById("quoteInput").value = "";
    } else {
      console.log("Browser storage unavailable!");
    }
  }
  

  function popOutOfBrowser() {
    if (typeof Storage !== "undefined") {
      const object = JSON.parse(window.localStorage.getItem("nameQuoteObject"));
  
      const name = object.name;
  
      const quote = object.quote;
  
      const concatString = name + ', "' + quote + '"';
  
      document.getElementById("popOutText").innerText = concatString;
    } else {
      console.log("Browser storage unavailable!");
    }
  }
  

if (typeof Storage !== "undefined") {
  
    const naturalClient = JSON.parse(window.localStorage.getItem("myKey"));
    
    for (let i = 0; i < naturalClient.clientInfo.length; i++){
      console.log(naturalClient.clientInfo[i]);
    }
    
  } else {
    console.log("Local storage is not available.");
  }


const naturalClient = {clientInfo:[{name:"Fred Goodlife",birthdate:1955},{name:"George Young",birthdate:1980},
{name:null,birthdate:null},{name:null,birthdate:null},{name:null,birthdate:null}]};


if (typeof Storage !== "undefined") {

  window.localStorage.setItem("myKey", JSON.stringify(naturalClient));

} else {
  console.log("Local storage is not available.");
}

*/
