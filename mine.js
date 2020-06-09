var events = require("events")
var eventEmitter = new events.EventEmitter()

eventEmitter.on("helloEvent", () => {
  console.log("my first terminal code")
})

eventEmitter.emit("helloEvent")
