/*
b. 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let n = 5;
let i=1;
while(i<=n){
    let column = 1;
    while(column<=i){
        process.stdout.write(column + " ");
        column++;
    }
    i++;
    console.log();
}