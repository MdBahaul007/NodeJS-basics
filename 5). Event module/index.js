const EventEmitter = require("events");
const event = new EventEmitter();

//this one is like creating the function.
event.on("myname",()=>{
    console.log("my name is mohd");
})
//we can call multuple function using one event i.e myname
event.on("myname",()=>{
    console.log("middle name is Bahaul");
})

event.on("myname",()=>{
    console.log("last name is Mustafa");
})
event.on("myhobby",()=>{
    console.log("cricket");
})

//this one is like calling the function
event.emit("myname");//if this line is written above the event.on fn than it will not work.
event.emit("myhobby");


//passing parametres and arguments like we pass in function
event.on("checkpage",(statusCode,msg)=>{
    console.log(`Status code is ${statusCode} and message is ${msg}`);
})
event.emit("checkpage",200,"page is working fine");