var events = require("events")
var eventEmitter = new events.EventEmitter()

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!")
}

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler)

//Fire the 'scream' event after 3s using setInterval

function myFunction() {
  setTimeout(function () {
    eventEmitter.emit("scream")
  }, 3000)
}

myFunction()
