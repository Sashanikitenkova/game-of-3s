// Game of 3s

// We want to play a "Game of 3s". Here's how you play it:
// First, you pick a random number. Then, repeatedly do the following:
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

// define a function take a number as a parameter
// while start at num and at 1
// condition to check if the number is divided by 3
//true devide the number by 3
// false check the remider if it is equal to 1
// true substract 1 from the number and devide it by 3
// false add 1 to the number and devide it by 3
// return the number (1)

function gameOfThree(num) {

    while (num>1) {
        if (num%3 === 0) {
            console.log(num, 0);
            num/=3;
         } else if (num%3 === 1) {
            console.log(num, -1);
            num = num-1;
            num/=3;
         } else {
            console.log(num, +1);
             num = num+1;
             num/=3;
         }
    }
    return num;    
}

console.log(gameOfThree(100));

// index   1st condition   2nd condition  result 
// 100       false           true          num=100-1= 99/3=33

// 33        false           false          num= 33/3=11

// 11        false            true           num = 11+1= 12/3=4

// 4         false              true         num = 4-1 =3/3 =1
// 1