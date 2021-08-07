const fs=require('fs');

//supose we have obj data 
const user ={
    user1:{
    name:"Bahaul",
    age:22,
    branch:"IT"
    },
    user2:{
    name:"BOB",
    age:21,
    branch:"CS"
    }

}
//to convet object data in json format we strigify function
jsonData=JSON.stringify(user);
// console.log(jsonData);
//output will be almost same as above only key will also be in " " in json format



// now sending this json data to new json file

// fs.writeFile("dataJSON.json",jsonData,(err)=>{
//     console.log("file created and data send");
// })


//now accesssing the data from json file
fs.readFile("dataJSON.json","utf-8",(err,data)=>{
    console.log(data);
    //converting this fetched data into object fromat
    const originalData=JSON.parse(data)
    console.log(originalData.user1.age);
})