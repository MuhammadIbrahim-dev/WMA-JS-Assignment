// List of loop programming exercises
// number#1
function Natural(n) {
let i = 1;
console.log("Natural numbers from 1 to");

while(i < n) {
    
    console.log(i);
    
    i++
}
}
Natural(30);

// number#2
function Reverse(n) {
    let i = n;
    console.log("Natural numbers in reverse from n to 1");
    while(i > 0) {
        console.log(i);
        i--;
    }
}
Reverse(30);

// number#3

function Alphabets() {
    let i = 97;
    console.log("Alphabets from a to z");
    
    while(i <= 122) {
        console.log(String.fromCharCode(i));
        i++;
    }
}
Alphabets();

// number#4

function Evennum() {
    let num = 1;
    console.log("Even numbers between 1 to 100");
    while(num <= 100) {
        if(num % 2 == 0) {
            console.log(num);
        }
        num++;
    }
}
Evennum();

// number#5

function oddnum() {
    let num = 1;
    console.log("Odd numbers between 1 to 100");
    while(num <= 100) {
        if(num % 2 != 0) {
            console.log(num);
        }
        num++;
    }
    
}
oddnum();


// number#6

function SumNatural(n) {
    let num = 1;
    let sum = 0;
    console.log("Sum of all natural numbers between 1 to n");
    while(num <= n) {
        sum += num;
        num++;
    }
    console.log(sum);
}
SumNatural(100);

// number#7

function SumEven(n){
    let num = 1;
    let sum = 0;
    console.log("Sum of all even numbers between 1 to n");
    while(num <= n) {
        if(num % 2 == 0) {
            sum += num;
        }
        num++;
    }
    console.log(sum);
}
SumEven(100);

// number#8


function SumOdd(n) {
    let num = 1;
    let sum = 0;
    console.log("Sum of all odd numbers between 1 to n");
    while(num <= n) {
        if(num % 2 != 0) {
            sum += num;
        }
        num++;
    }
    console.log(sum);
}
SumOdd(100);

// number#9

function Multiplication(n) {
    let i = 1;
    console.log("Multiplication table of " + n);
    while(i <= 10) {
        console.log(n + " * " + i + " = " + n * i);
        i++;
    }
}
Multiplication(8);

// number#10

function CountDigits(n) {
    let count = 0;
    console.log("Number of digits in a number");
    
    while(n > 0) {
        n = parseInt(n / 2);
        count++;
    }
    console.log(count);
}
CountDigits(123456789);

// number#11

function FirstLast(n) {
    let last = n % 10;
    console.log("First and last digit of a number");
    while(n >= 10) {
        n = parseInt(n / 10);
    }
    console.log("First digit: " + n);
    console.log("Last digit: " + last);
}
FirstLast(10234560897);

// number#12
function SumFirstLast(n) {
    let last = n % 10;
    console.log("Sum of first and last digit of a number");
    
    while(n >= 10) {
        n = parseInt(n / 10);
    }
    console.log("Sum of first and last digit of a number: " + (n + last));
}
SumFirstLast(10234560897);

// number#13

function SwapFirstLast(n) {
    let last = n % 10;
    let first = n;
    console.log("Swap first and last digit of a number");
    
    while(n >= 10) {
        n = parseInt(n / 10);
    }
    first = n;
    let result = last;
    let temp = parseInt(n / 10);
    
    while(temp > 0) {
        result *= 10;
        temp = parseInt(temp / 10);
    }
    result += n % 10;
    result += first * 10;
    
    console.log("Number after swapping first and last digit: " + result);
}

SwapFirstLast(3234560897);

// number#14

function numDigit(n) {
    let sum = 0;
    console.log("Sum of digits of a number");
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10) ;
    }
    console.log(sum);
    
}
numDigit(54675488784151574874);

// number#15


function productDigit(n) {
    let product = 2;
    console.log("Product of digits of a number");
    while (n > 0) {
        product *= n % 10;
        n = parseInt(n / 10) ;
    }
    console.log(product);
    
}
productDigit(23);

// number#16

function Evennum() {
    let num = 1;
    console.log("Even numbers between 1 to 100");
    while(num <= 100) {
        if(num % 2 == 0) {
            console.log(num);
        }
        num++;
    }
}
Evennum();

// number#5

function palindrome(n) {
    let reverse = 0;
    let temp = n;
    console.log("Palindrome of a number");
    while(n > 0) {
        reverse = reverse * 10 + n % 10;
        n = parseInt(n / 10);
}
if(temp == reverse) {
    console.log("The number is palindrome");
}else {
    console.log("The number is not palindrome");
}
}
palindrome(12321);

// number#18
function frequencyDigit(n) {
    let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log("Frequency of each digit in a given integer");
    while(n > 0) {
        freq[n % 10]++;
        n = parseInt(n / 10);
    }
    for(let i = 0; i < 10; i++) {
        if(freq[i] > 0) {
            console.log("Frequency of " + i + ": " + freq[i]);
        }
    }
}
frequencyDigit(123456789);

// number#19
function numToWords(n) {
    let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    console.log("Number in words");
    while(n > 0) {
        console.log(words[n % 10]);
        n = parseInt(n / 10);
    }
}
numToWords(1234567890);

// number#20
function asciiChar() {
    let i = 0;
    console.log("ASCII characters with their values");
    while(i <= 255) {
        console.log(i + ": " + String.fromCharCode(i));
        i++;
    }
}
asciiChar();


// number#21
function powerOfNum(base, exp) {
    let result = 1;
    let i = 1;
    console.log("Power of a number using for loop");
    while(i <= exp) {
        result *= base;
        i++;
    }
    console.log(result);
}
powerOfNum(2, 4);

// number#22

function factorial(n) {
    let fact = 1;
    console.log("Factorial of a number");
    while(n > 0) {
        fact *= n;
        n--;
    }
    console.log(fact);
}
factorial(5);

// number#23
function hcf(a, b) {
    let hcf;
    console.log("HCF of two numbers");
    while(a != b) {
        if(a > b) {
            a -= b;
        }else {
            b -= a;
        }
    }
    hcf = a;
    console.log(hcf);
}
hcf(15, 10);

// number#24
function lcm(a, b) {
    let lcm;
    console.log("LCM of two numbers");
    let temp = a > b ? a : b;
    while(true) {
        if(temp % a == 0 && temp % b == 0) {
            lcm = temp;
            break;
        }
        temp++;
    }
    console.log(lcm);
}
lcm(11, 15);

// number#25

function prime(n) {
    let flag = true;
    console.log("Prime number or not");
    let i = 2;
    while(i <= n / 2) {
        if(n % i == 0) {
            flag = false;
            break;
        }
        i++;
    }
    if(flag) {
        console.log("The number is prime");
    }else {
        console.log("The number is not prime");
    }
}
prime(15);

// number#26
function primeNum(n) {
    console.log("Prime numbers between 1 to n");
    for(let i = 2; i <= n; i++) {
        let flag = true;
        for(let j = 2; j <= i / 2; j++) {
            if(i % j == 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            console.log(i);
        }
    }
}
primeNum(100);

// number#27

function sumPrime(n) {
    let sum = 0;
    console.log("Sum of all prime numbers between 1 to n");
    for(let i = 2; i <= n; i++) {
        let flag = true;
        for(let j = 2; j <= i / 2; j++) {
            if(i % j == 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            sum += i;
        }
    }
    console.log(sum);
}
sumPrime(100);




// number#28    

function primeFactors(n) {
    console.log("Prime factors of a number");
    for(let i = 2; i <= n; i++) {
        if(n % i == 0) {
            let flag = true;
            for(let j = 2; j <= i / 2; j++) {
                if(i % j == 0) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                console.log(i);
            }
        }
    }
}
primeFactors(100);


// number#29

function factorialLarge(n) {
    let fact = 1n;
    console.log("Factorial of a large number");
    while(n > 0) {
        fact *= BigInt(n);
        n--;
    }
    console.log(fact);
}

factorialLarge(100);








