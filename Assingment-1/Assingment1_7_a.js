/*Write programs to print the following patterns for an input n = 5:
a. 
*
* *
* * *
* * * *
* * * * *
*/

let row = 1;

let n = 5;

while(row<=5){
    let column = 1;
       while(column<=row){
           process.stdout.write("* ");
           column++;
       }

    row++;
    console.log();
}