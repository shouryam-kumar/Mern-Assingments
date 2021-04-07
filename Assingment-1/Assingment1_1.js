/*
Write the pseudocode & a program to input credits of a Code for Cause
Campus leader and then output the badge of the lead on the basis of
the following criteria:
a. 7500 <= credits : Tera leader
b. 6000 <= credits < 7500 : Gega leader
c. 4500 <= credits < 6000 : Mega leader
d. Credits < 4500 : Rising Star
*/

function leaderboard(credit){
    if(credit<4500)
        console.log("Rising Star");
    else if(credit>=4500 && credit<6000)
        console.log("Mega Leader");
    else if(credit>=6000 && credit<7500)
        console.log("Gega Leader");
    else if(credit>=7500)
        console.log("Tera Leader");
}

let leader1 = 5633;
let leader2 = 6903;

leaderboard(leader1);
leaderboard(leader2);