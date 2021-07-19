const fs = require("fs");

//creating the file if nt present and if present old data will be over-written by new data 
// fs.writeFileSync("read.txt","hello world");


//this below will remove hello world from file and replace with hello world 123
// fs.writeFileSync("read.txt","hello world 1233");


//to add data without over writing old data
// fs.appendFileSync("read.txt"," you are great!!!!!!");


//to read read.txt file
// data=fs.readFileSync("read.txt");
// console.log(data);

//it will give data in buffer format to convert data as our data is in read.txt is in string format so.

// origianlData=data.toString();
// console.log(origianlData);


//to chage the file name
// fs.renameSync("read.txt","read1.txt");

//to remove file
// fs.unlinkSync("read1.txt");

//to creatfolder
// fs.mkdirSync("mbm");


//to create file in above folder 
// fs.writeFileSync("mbm/my.txt","hello");


//to read data directly without coverting toString method
// data=fs.readFileSync("mbm/my.txt","utf-8");
// console.log(data);


//to rename
// fs.renameSync("mbm/my.txt","mbm/my1.txt");


// doing using async way
// fs.writeFile("read22.txt","hello world!!",(err)=>{
//     console.log(err);
//     console.log("File created");
//     //err will be null bcz code is correct and file is created
// })


// to appnd using async
// fs.appendFile("read22.txt","123",(err)=>{
//     console.log(err);
// })


//to read data asyc
// fs.readFile("read22.txt","UTF-8",(err,data)=>{
//     console.log(data);

// })

// //creating the folder using aysnc 
// fs.mkdir("async",()=>{
//     console.log("folder created");
// })

//creating file inside folder 
// fs.writeFile("async/readme.txt","hello how r u",()=>{
//     console.log("file created");
// });


//reading data 
// fs.readFile("async/readme.txt","utf-8",(err,data)=>{
//     console.log(data);
// })


//reanaming  the file
// fs.rename("async/readme.txt","async/readme1.txt",(err)=>{
//     console.log("file renamed");
// })


//deleting the file and folder 
// fs.unlink("async/readme1.txt",(err)=>{
//     console.log("file deleted");
// })
// fs.rmdir("async",(err)=>{
//     console.log("folder deleted");
// })




// fs.writeFile("osModule.js","sdh",()=>{
//     console.log("file created");
// })

// fs.writeFile("pathModule.js","sdh",()=>{
//     console.log("file created");
// })

fs.mkdir("importExport",()=>{
    console.log("folder created");
});

fs.writeFile("importExport/index.js","hello",(err)=>{
    console.log("file created");
})