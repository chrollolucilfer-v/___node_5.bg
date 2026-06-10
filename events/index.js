import EventEmitter from "events";

// creatiing insteance of the event

const customEmitter = new EventEmitter();

// In this we have a few methods

//on : listen/register for an event

// once: lets you listen/ register for an event.
// only fires once

// emit: emit or call an event

customEmitter.on("response", (name, id) => {
  console.log(`user: ${name} id: ${id} `);
});
// this is how we register all event



customEmitter.emit("response", "Bhaskar", "4");
customEmitter.emit("response", "Bhaskar", "4");
customEmitter.emit("response", "Bhaskar", "4");
customEmitter.emit("response", "Bhaskar", "4");
customEmitter.emit("response", "Bhaskar", "4");
customEmitter.emit("response", "Bhaskar", "4");
// this is how we call the event


customEmitter.once("response2", (name, id) => {
    console.log(`user: ${name} id: ${id} `);
});


customEmitter.emit("response2", "once", "1");
customEmitter.emit("response2", "once", "1");
customEmitter.emit("response2", "once", "1");