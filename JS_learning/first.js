console.log("Hello World!!")
let a;
a=prompt("Enter a number: ");
if(a>=18){
    console.log("You are eligible!");
}
else{
    console.log("Fuck Off!")
}
let arr=[1,2,3,4];
console.log("Array: "+arr+" and length: "+arr.length);

const person={
    'First Name': 'Anshu', 'Last Name': 'Das', 'Age': 20, 'Height': "6'0"
}
console.log(person)

//Using for loops ;)
for(let i=25;i>=0;i=i-5){
    console.log(i);
}
console.log("Testing for..of");
//Using for...of loops
const lst=[1,2,3,4,5,6,7];
for(let l of lst){
    console.log(l*l);
}
//Testing the function#1
console.log("Testing the function");
function lastElement(arr){
    if(arr.length===0){
        return null;
    }
    return arr;
}
let ste=[3,2,7];
console.log(lastElement(ste.length-1));
//Testing the function#2