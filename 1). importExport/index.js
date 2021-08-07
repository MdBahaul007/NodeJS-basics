// const add=require('./app');
// console.log(add(5,5));


//to access sub and add
// const oper=require('./app');
// console.log(oper);
// console.log(oper.add(5,5));
// console.log(oper.sub(10,5));

//another more efective method i,e using obj destructring
const {add,sub,multi,name}=require('./app');
console.log(add(5,5));
console.log(sub(5,5));
console.log(multi(5,5));
console.log(name);