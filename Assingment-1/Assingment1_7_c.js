/* Question 7(c)
*/

let n = 5;




for(let row=1; row<=n; row++){
    for(let column=1; column<=n-row; column++){
        process.stdout.write("  ");
    }
    for(let column=row; column>=1; column--){
        process.stdout.write(column+" ");
    }
    for(let column=2;column<=row; column++){
        process.stdout.write(column+" ");
    }
    if(row<n)
        console.log();
}