/*Write a program to reverse a number (9735 -> 5379)*/
function reverse(n){
    n = n + "";
    return n.split("").reverse().join("");
}


let n =2345678;
let k = 0;
let i = 0;

console.log(reverse(n));