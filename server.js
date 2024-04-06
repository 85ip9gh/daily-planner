/*
  The purpose of this file is to create a very basic Express framework
  server that has 2 endpoints:
            one for a GET request and one for a POST request

  Note: You must run "npm install express" once in the public_html
        folder first. You do not need to repeat this step for
        different servers.

  Author: Terry Goldsmith
*/

// start the Express framework and make it accessible via the reference
const express = require("express");

// define the top level Express function
const server = express();

// set the port where the server listens for clients
const port = 4242;

// define an empty object to hold the form data
let formData = {
  Name: "John Deer",
  achievements:"Acquired $1 billion in assets",
  address:"123 Main St",
  burialBox:"box3",
  city:"Halifax",
  contactAddress:"123 Main St",
  contactCity:"Halifax",
  contactCountry:"Canada",
  contactEmail:"marydeer123@gmail.com",
  contactName:"Mary Deer",
  contactPhone:"1234567890",
  contactPostalCode:"A1B 2C3",
  contactProvince:"Nova Scotia",
  country:"Canada",
  dobDay:"01",
  dobMonth:"01",
  dobYear:"1901",
  email:"johndeer123@gmail.com",
  family:"No",
  markerLocation:"location4",
  markerType:"type4",
  phone:"2345678901",
  postalCode:"A1B 2C3",
  province:"Nova Scotia",
  quote:"Good money, good life",
};

// enable the server to recognize JSON format
server.use(express.json());

// enable incoming "name":"value" pairs to be any type including arrays
server.use(express.urlencoded({ extended: true }));

/*
  The purpose of this function is to execute the instructions
  necessary: to allow a request from any origin to access this site's content;
  allow only GET and POST requests; and to only accept requests that include
  "Content-Type".

  req - request object generated by the HTTP event
  res - response object generated by the HTTP event
  next - predefined function used when request/response cycle is not terminated
*/
const allowCrossDomain = function (req, res, next) {
  // allow any origin
  res.header("Access-Control-Allow-Origin", "*");
  // allow any method
  res.header("Access-Control-Allow-Methods", "GET,POST");
  // accept only headers with Content-Type included
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // since this middleware function does not terminate the request/response cycle
  // the next() function must be called to continue to the succeeding middleware function
  next();
};

// set domain characteristics defined above
server.use(allowCrossDomain);

/*
  Preset the anonymous function to be the function called whenever a POST
  request is received by this server at the endpoint
  http://ugdev.cs.smu.ca:3026/myPost
*/

/*
  The purpose of this function is to respond to a POST request with relative
  endpoint: /myPost

  req - request object generated by the HTTP event
  res - response object generated by the HTTP event

  Author: Terry Goldsmith
*/
server.post("/submit", function (req, res) {
  // log the "value" in the "name":"value" pair received

  // define a new JSON object to be returned
  formData = req.body;

  // access the response object via the reference
  // set the associated status to success
  // place your new JSON object into the response object
  // return the response object which terminates the
  //     request/response cycle so next() is not required
  return res.status(200);
});

/*
  Preset the anonymous function to be the function called whenever a GET
  request is received by this server at the endpoint
  http://ugdev.cs.smu.ca:3026/myGet
*/

/*
  The purpose of this function is to respond to a GET request with relative
  endpoint: /myGet

  req - request object generated by the HTTP event
  res - response object generated by the HTTP event

  Author: Terry Goldsmith
*/
server.get("/form", function (req, res) {
  // access the response object via the reference
  // set the associated status to success
  // place your new JSON object into the response object
  // return the response object which terminates the
  //     request/response cycle so next() is not required
  return res.status(200).send(formData);
});

/*
  Preset the anonymous function to be the function called when the server
  starts listening on port 3026
*/

/*
  The purpose of this function is to produce a message on the Node.js console,
  indicating the server has begun to listen for clients on a port.

  Author: Terry Goldsmith
*/
server.listen(port, function () {
  console.log("Listening on port 4242");
});
