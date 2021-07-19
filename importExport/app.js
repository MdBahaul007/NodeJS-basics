const add = (a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return a-b;
}

const multi=(a,b)=>{
    return a*b;
}

const name="mbm";



// this add name should be same as name given in function
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.multi=multi;

//above thing in one line suing obj destructuring
module.exports={add,sub,multi,name};