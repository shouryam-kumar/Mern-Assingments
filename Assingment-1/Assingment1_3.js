/*
Write the pseudocode & the program to calculate GCD of two numbers.
*/

let a = 34;
let b = 51;
let i = 1;
let GCD = 1;

while(i<Math.max(a,b)){
    if(a%i==0 && b%i==0)
        GCD = i;
     i++;
}
console.log(GCD);