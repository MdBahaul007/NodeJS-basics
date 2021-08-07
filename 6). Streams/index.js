//To read the data while streaming
// 1). Create readable stream init pass the file which u want to read
// data is event which is fired when data is available to read so we keep on firind data event till there is data available to read
// end event is fired when there is no more data is available to read
//to show lines of data 
//to show like if file does not exist than we error evento

const fs = require("fs");
const http = require("http");

// const server =http.createServer();
// //server.on means when some one will req on server we will run callback...request here is event 
// server.on('request',(req,res)=>{

//     //Create readable stream init pass the file which u want to read
//     const readStream= fs.createReadStream("sampleFile.txt");
//         //we need to read data from  file chunk by chunk
//         //chuckData will contain data whcih is keep on reading
//         readStream.on('data',(chunkData)=>{
//             //to show data on browser we use res i.e response
//             res.write(chunkData);
//             //but data will not show bcz wee need to fire end event
//         })
//         readStream.on("end",()=>{
//             res.end();
//         })
//         //error condition supoose file does not exist
//         readStream.on("error",(err)=>{
//             res.end("file not found");
//             console.log(err);


//         })
  
// })

// 
// server.listen("8000","127.0.0.1",()=>{
//     console.log("listning to server");
// })




///another way for streaming using pipe(this is effective method) 
//basically pipe method does is jis time me read kr rhe hai data usi real time me write krta rhega
//basically in  time data is loading and its reposnse is coming up
const server =http.createServer();

server.on('request',(req,res)=>{
    const readStream= fs.createReadStream("sampleFile.txt");
    readStream.pipe(res);
})
server.listen("8000","127.0.0.1",()=>{
    console.log("listning to server");
})
