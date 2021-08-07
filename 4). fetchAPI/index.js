const http =require("http");
const fs=require("fs");

//as below api calling is async so it calling api again and again so we want api called only once when page is loaded so making it sync
const data= fs.readFileSync("dataJSON.json","utf-8",);
//converting json data into object data
const objData=JSON.parse(data);

const server=http.createServer((req,res)=>{
    // res.end("server created");
    if(req.url=="/"){
        res.end("you are on home page");
    }
    else if(req.url=="/api"){
        // fs.readFile("dataJSON.json","utf-8",(err,data)=>{
        //     // console.log(data);
        //     // res.end(data);
        //     const objData=JSON.parse(data);
        res.writeHead(200,{"content-type":"application/json"});
        res.end(data);

        //to get first name from data
        // res.end(objData[0].first_name);
       

    }
})

server.listen("8000","127.0.0.1",()=>{
    console.log("listning to port 8000");
})