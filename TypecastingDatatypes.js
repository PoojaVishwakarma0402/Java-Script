// typecasting everything into Number
let score="33abc";
console.log(typeof score);

let typecastedValue=Number(score);
console.log(typeof typecastedValue);
console.log("Typecasting string with alphabates gives ", typecastedValue);

let num=null;
console.log(typeof num);
let n=Number(null);
console.log("typecasting null into Number gives ",n);

let a=undefined;
let b=Number(a);
console.log("Typecasting undefined into Number gives", b);


// typescasting boolean values gives either 0 or 1
// string "33" typecastes into 33
// but "33abc" typecastes into NaN


let num1=45;
let str=String(num1);
console.log("Type of num1 converted",typeof str)
console.log("Converting number 45 into string gives ",str);