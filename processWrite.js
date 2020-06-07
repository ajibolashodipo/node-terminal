var events = require("events")
var eventEmitter = new events.EventEmitter()

eventEmitter.on("helloEvent", () => {
  process.stdout.write("my very first code using process.stdout.write" + "\n")
})

eventEmitter.emit("helloEvent")
