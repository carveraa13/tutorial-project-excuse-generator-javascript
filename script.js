let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function ramdomVal(arr, x){
    let index = Math.floor(Math.random() * (x-1));
    return arr[index];
}

let htmlwho = ramdomVal(who, who.length)
let htmlaction = ramdomVal(action, action.length)
let htmlwhat = ramdomVal(what, what.length)
let htmlwhen = ramdomVal(when, when.length)

let finalExcuse = htmlwho.concat(" ",htmlaction," ",htmlwhat," ", htmlwhen,".");
document.getElementById("excuse").innerHTML = finalExcuse;