// num # 1
console.log("num # 1");

const len = 'ibrahim';
console.log(len);

console.log(len.length);

// num # 2
console.log("num # 2");
const num1 = 'muhammad';
const num2 = 'ibrahim';
console.log(num1.concat(num2));

// num # 3
console.log("num # 3");

const num3 = 'muhammad';
const num4 = 'ibrahim';
console.log(num3.concat(num4));

// num # 4
console.log("num # 4");

const Case = "ibrahim";
if(Case == Case.toLocaleLowerCase()) {
    console.log(Case.toLocaleUpperCase());   
} else {
    console.log(Case.toLocaleUpperCase);
    
}

// num # 5
console.log("num # 5");

const toggle= 'IBRAHIM';
if(toggle  === toggle.toUpperCase()) {
     console.log(toggle.toLocaleLowerCase());
     
}else if(toggle.toLocaleLowerCase()) {
    console.log(toggle.toLocaleUpperCase());
    
}

// num # 6

// function character(str) {
//     const number = 0;
//     const dig = 0;
//     const spec = 0;

//     for(char of str) {
//         if(/[0-9]/.test(char)) {
//             number++ 
//         }else if(/[A-za-z]/.test(char)) {
//             dig++
//         }else {
//            spec++
//         }
//    }

// }
// const input = 'ibra123@#!';
// const  result = character(input);
// console.log(`Numbers is: ${result.number}`);
// console.log(`Digits is: ${result.dig}`);
// console.log(`Special is ${result.spec}`);

// num # 7
console.log("num#7");

function num(str){
    let number= 0;
    for(char of str) {
        if(/[0-9]/.test(char)){
            number++
        }
    }
    return numberCount = number;
}
const inputn = 'ibra123@#!';
const  numresult =num(inputn);
console.log(numresult);

// num# 8
console.log("num# 8");

let countn= 'ibrahim217';
console.log(countn.length);

// num # 9
function rstr(str) {
    return str.split('').reverse().join('')
}
console.log(rstr("hello"));

// num # 10
// first occurrence of a character in a given string.
console.log("num#10");

function palederom(str) {
    const rever =str.split('').reverse().join('')
    return str === rever
}
console.log(palederom("rer"));
// num # 11
// last occurrence of a character in a given string.
console.log("num # 11");
function occurrence(str,char) {
    return str.indexOf(char)
}
console.log(occurrence("hello","l"));

// num # 12
// last occurrence of a character in a given string.
console.log("num # 12");
function lastocurrence(str,char) {
    return str.lastIndexOf(char)
}
console.log(lastocurrence("hello","o"));

// num # 13
// count occurrences of a character in given string.
console.log("num#13");

function allacurrence(str,char) {
    return str.split(char).length -1
}
console.log(allacurrence("hello","o"));
// num # 14
// find highest frequency character in a string.




















