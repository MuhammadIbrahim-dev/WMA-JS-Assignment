// NO#1
function maximum(num1,num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }}
    let number1 = 40;
    let number2 = 20 ;
    
    let findmax = maximum( number1,number2)
    console.log(`the maximum between ${number1} and ${number2 } is ${findmax}`);

    // NO#2
    function max(num1,num2,num3) {
        let num = num1
        if (num2 > num) {
            num = num2;
        } 
         if (num3 > num) {
            num = num3;
        }
        return (
            num
        )
    }
        let numbers1 = 10;
        let numbers2 = 20 ;
        let numbers3 = 40 ;
        
        let final = max( numbers1,numbers2,numbers3)
        console.log(`the maximum number is ${final}`);

// NO#3
function check() {
    let num = 10;
    if (num > 0) {
        return (
            console.log("positive"));
    } else {
            console.log("negative");
        
    }
return(
    num
)
}
check()
// NO#4
function divide(num) {
    if (num % 5 === 0 && num % 11 === 0) {
       console.log(true);
    } else {
        console.log(false);
    }
}

let number = 4;
if (divide(number)) {
    console.log(`this number ${number} is divisible by 5 and 11`);
    
} else {
    console.log(`this number ${number} is  not divisible by 5 and 11`);
}
divide()
// NO#5
function check() {
    let num = 4;
    if (num % 2 == 0) {
       console.log("your number is even");
    } else {
        console.log("your number is odd");
    }
}
check()
// NO#6
function character(year) {
if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(true);
    } else {
        console.log(false);  
    }
}
 let year = 2021;
 if (character(year)) {
    console.log(year +  "is a leap");
    
 } else {
    console.log(year +  "is not a leap");
    
 }
 character()
//  NO#7
function n() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTRUVWXYZ";
    let input = prompt("write a character");
    if (input.toLowerCase() === characters) {
        console.log("your character is in the   alphabet");
    } else {
        console.log("your character is not  alphabets");
        
    }
    }
    n()
    // NO#9
    function check() {
        let promp = prompt("Enter a chracter");
        if (promp.length === 1) {
            console.log("your character is a single character");
        } else {
            let char = promp.charAt(0);
            if ( /[a-zA-Z]/.test(char)) {
                console.log(`${char} is a  alphabet`);
            } else if (/[0-9]/.test(char)) {
                console.log(`${char} is a digital`);
                
            } else {
                console.log(`${char} is a special character`);
                
            }
            }
    }
check()
// NO#10
function character() {
    let input = prompt("Enter a character");
    if (/[a-z]/.test(input)) {
console.log(`${input} is a lower Case`);
    } else if (/[A-Z]/.test(input)) {
        console.log(`${input} is a upper Case`);
    } else {
        console.log("your Character is not invalid");
        
    }

}
character()
// NO#11
function week() {
    let day = prompt("Enter a day");
    if (day === "1") {
        console.log("its monday");
    } else if (day === "2") {
        console.log("its tuesday");
    } else if (day === "3") {
        console.log("its  wednesday");
    } else if ( day === "4") {
        console.log("its thursday");
    } else if (day === "5") {
        console.log("its  friday");
    } else if ( day === "6") {
        console.log("its saturday");
    } else if ( day === "7") {
        console.log("its sunday");
    }
}
week()
// NO#12
function month() {
    let month = prompt("Enter a month");
    if (month === "1") {
        console.log("its january");
    } else if ( month === "2") {
        console.log("its february");
    } else if ( month === "3") {
        console.log("its march");
    } else if ( month === "4") {
        console.log("its april");
    } else if ( month === "5") {
        console.log("its may");
    } else if ( month === "6") {
        console.log("its june");
    } else if ( month === "7") {
        console.log("its july");
    } else if ( month === "8") {
        console.log("its august");
    } else if ( month === "9") {
        console.log("its september");
    } else if ( month === "10") {
        console.log("its october");
    } else if ( month === "11") {
        console.log("its november");
    } else if ( month === "12") {
        console.log("its december");
    }
}
 month()