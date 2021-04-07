/*Write a program to count the number of digits in a number.*/

let n = 1234;
let k = 0;

while(n>=1){
    
    k = k+1;
    n = n/10;
}
console.log(k);