const http=require("http");

// const httpServer=http.createServer((req,res)=>{
//     res.end("This is reposonce from after the request made to local host port number 8000");
// })

// httpServer.listen("8000","127.0.0.1",()=>{
//     console.log("listning to port 8000");
// })



//routing to diffrent pages

const httpServer=http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("you are on home page");
    }
    else if(req.url=="/about"){
        res.end("You are on about page");
    }
    else if(req.url=="/contact"){
        res.end("You are on contact page");
    }
    else{
        //error code is 404 but network will still be showing 200 i.e success code for this
        //so return 404 code on wrong page
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h2>Error:404 Page not found</h2>");
    }
})

httpServer.listen("8000","127.0.0.1",()=>{
    console.log("listning to port number 8000");

})