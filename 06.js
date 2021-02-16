// Write a program to find weather a number is prime or not

const checkForPrime = (num) => {
    for(let i = 2; i < num; i++){
        return num % i === 0 ? false : true;
    }
}

console.log(checkForPrime(19));