/*Write a program to print even numbers after odd times jump.
E.g: 2, 6, 14, 26, …
*/

//Writing program to print upto n terms

let i = 1;
let k = 1;
let n = 7;

while(i<n){
    console.log(2*k);
    k = k + 2*i;
    i++;
}