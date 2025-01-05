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
 // NO#13
 function countamount(amounts) {
    let notes = [1000,500,100,50,30,20,10];
     let notecounts = {};
     for (let note of notes)
        if ( amounts > note) {
             let count = Math.floor(amounts / note);
            notecounts[note]=count;
            amounts -= count * note;
        } 
          return(
            notecounts
        )
        }
 let amounts =123;
 let result = countamount(amounts)
 console.log(result);
 countamount()
 // NO#14
 function angle() {
    let num1 = prompt("enter left side number");
    let num2 = prompt("enter right side number");
    let num3 = prompt("enter bottom side number");
    let result = 270;
    let angle = Math.acos((num1**2 + num2**2 - num3))
    if ( result === angle) {
        console.log("triangle is valid");
        
    } else {
        console.log("triangle is not valid");
    }
 }
 angle()
 // NO#15
 function angle() {
    let num1 = prompt("enter left side number");
    let num2 = prompt("enter right side number");
    let num3 = prompt("enter bottom side number");
    let result = 270;
    let angle = Math.acos((num1**2 + num2**2 - num3))
    if ( result === angle) {
        console.log("triangle is valid");
        
    } else {
        console.log("triangle is not valid");
    }
 }
 angle()
//  NO#16
function checkTriangle(a, b, c) {

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }
    if (a === b && b === c) {
        return "Equilateral triangle";
    }

    if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    }

    return "Scalene triangle";
}
const sideA = parseFloat(prompt("Enter the length of side A:"));
const sideB = parseFloat(prompt("Enter the length of side B:"));
const sideC = parseFloat(prompt("Enter the length of side C:"));

const triangleType = checkTriangle(sideA, sideB, sideC);
console.log(triangleType);
checkTriangle()

// NO#17
function calCulate(selling ,cost) {
    if ( selling > cost) {
        let profit = selling - cost;
        console.log(`profit is ${profit}`);
    } else if ( selling < cost) {
        let loss = cost - selling;
        console.log(`loss is ${loss}`);
    } 
} 
const selling = parseFloat(prompt("enter selling price"));
const cost = parseFloat(prompt("enter cost price"));
 const t = calCulate(selling ,cost) ;
 console.log(t);
 calCulate()
 // NO#19
 function calmarks(marks) {
    const totalSubject = marks.length;
    const totalMarks = marks.reduce((a, mark)   => a + mark, 0);
    const percentage = (totalMarks / (totalSubject * 100))*100;
    let grade;
    if (percentage >= 90) {
        grade = "A"
    } else if ( percentage >= 80) {
        grade = "B"
    } else if (percentage >= 70) {
        grade = "C"
    } else if (percentage >= 60) {
        grade = "D"
    } else if (percentage >= 40) {
        grade = "E"
    } else  {
        grade = "F"
    }

    return (
        {percentage ,grade}
    )

 }
 const physics = parseFloat(prompt("Enter marks for Physics:"));
const chemistry = parseFloat(prompt("Enter marks for Chemistry:"));
const biology = parseFloat(prompt("Enter marks for Biology:"));
const mathematics = parseFloat(prompt("Enter marks for Mathematics:"));
const computer = parseFloat(prompt("Enter marks for Computer:"));

const marks = [physics, chemistry, biology, mathematics, computer];
const F = calmarks(marks);
console.log(`Percentage: ${F.percentage}`);
console.log(`grade: ${F.grade}`);

// calmarks()
// NO#20
function Salary(basicSalary) {
    let hra ,da;
    if ( basicSalary  <= 10000 ) {
        hra= basicSalary * 0.20;
        da = basicSalary * 0.80;
    } else if (basicSalary  <= 20000) {
        hra= basicSalary * 0.25;
        da = basicSalary * 0.90;
    } else if ( basicSalary > 20000 ) {
        hra= basicSalary * 0.30;
        da = basicSalary * 0.95;
    } else {
        hra= basicSalary * 0.30;
        da = basicSalary * 0.95;    
    }
    const grossSalary = basicSalary + hra + da;
    return  grossSalary ;
}
const basicSalary = parseFloat(prompt("Enter your basic salary"));
const glossSalary =  Salary(basicSalary);
console.log(glossSalary);
Salary();
// NO#21
function billCheck( units) {
let billAmount = 0;
if ( units < 50) {
    billAmount = units *0.50;
} else if (billAmount < 100) {
    billAmount = (50 * 0.50) + (units - 50) *0.75; 
} else if ( units < 250) {
    billAmount = (50 * 0.50) + ( 100* 0.75) + (units - 150) * 1.20;
} else {
    billAmount = (50 * 0.50) + (100 * 0.75) + (100 * 1.20 ) + (units - 250) * 1.50 ;
}
const surCharge = billAmount * 0.20;
const totalBill = billAmount + surCharge;
return totalBill;
}
const units = parseFloat(prompt("enter your unites"));
const billfinal = billCheck(units);
console.log(`your total bill is Rs: ${billfinal.toFixed(2)}`);
billCheck()



