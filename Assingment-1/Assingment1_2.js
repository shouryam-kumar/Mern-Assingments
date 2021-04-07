/*Write the pseudocode & a program to calculate the simple interest
based on the inputs(amount, rate, time) provided by the user.
*/

function SimpleInterest(principle, rate, time){
    return (principle*rate*time/100);
     
}

let principle = 1200;
let rate = 5; // per annum
let time = 3; //in years

console.log(SimpleInterest(principle, rate, time));