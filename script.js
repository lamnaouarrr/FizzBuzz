let n = parseInt(prompt("Give a number"));
let FizzBuzz = [];
let i = 1;
while (i <= n){
    let Fizz = i % 3;
    let Buzz = i % 5;
    if (Fizz == 0 && Buzz != 0){
        FizzBuzz[i] = "Fizz";
    }
    else if (Fizz != 0 && Buzz == 0){
        FizzBuzz[i] = "Buzz";
    }
    else if (Fizz == 0 && Buzz == 0){
        FizzBuzz[i] = "FizzBuzz";
    }
    else {
        FizzBuzz[i] = i;
    }
    i++;
}
alert(FizzBuzz);
console.log(FizzBuzz)