// No#1
        // 1. Light Bulb Experiment
        var Icon = document.getElementById('Icon');
        var btn = document.getElementById('Btn');
        btn.onclick = function() {
            if (Icon.src.includes("image/off.png")) {
                Icon.src = "image/on.png"; 
            } else {
                Icon.src = "image/off.png"; 
                btn.innerHTML = "ON";
            }
        }

        // No#2
        // 2. Traffic Light Simulator
        function sub() {
            let input = document.getElementsByClassName("imes")[0].value; 
            if (input === "red") {
                alert("Please Stop");
            } else if (input === "yellow") {
                alert("Please Slow");
            } else if (input === "green") {
                alert("Go");
            } else {
                alert("This is not valid");
            }
        }
         // No#3
        //  3. Water Temperature Checker
                
        function Tem() {
            let input = document.getElementById("inputmes").value;
         if (isNaN(input)) {
            alert("This is not valid");
         } else if (input < 0) {
         alert("Freezing")
        } else if (input > 0 && input <= 15 ) {
            alert("Temperator is Cold")
        } else if (input > 15 && input <= 30 ) {
            alert("Temperator is Warm")
    } else if (input > 30 && input <= 50 ) {
        alert(" Temperator is Hot")
} else {
    alert("This is not valid")
}
}

// 4. Rock-Paper-Scissors Game


function Winner(player1, player2) {
    if (player1 === player2) {
        return "It's a Tie!";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
}

function final() {
    console.log("Welcome to Rock, Paper, Scissors!");

    const player1 = prompt("Player 1, enter your choice (rock, paper, scissors):").toLowerCase();
    const player2 = prompt("Player 2, enter your choice (rock, paper, scissors):").toLowerCase();


    const valid = ["rock", "paper", "scissors"];
    if (!valid.includes(player1) || !valid.includes(player2)) {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
        return;
    }

    const win = Winner(player1, player2);
    console.log(win);
}
//  NO#5

function Alarm(){
let alarm1 = prompt("Is the door open? (yes or no)");
let alarm2 = prompt("Is motion detected? (yes or no)");
    if ((alarm1 === "yes") && (alarm2 === "yes") ) {
       console.log("Alarm is Triggered");
        alert("Alarm is Triggered");
        
        
    } else if (alarm1 === "no" && alarm2 === "no") {
     
        console.log("All Safe"); 
          alert("All Safe");
        
    } 
}
//  5. Simple Alarm System
// NO#6
// 6. Simple Temperature Conversion
function convertTemperature() {
    const conversionType = prompt("Choose a conversion type:\n1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius");
    let temperature;
    if (conversionType === "1") {
        temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
        const fahrenheit = (temperature * 9 / 5) + 32;
        console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else if (conversionType === "2") {
        temperature = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
        const celsius = (temperature - 32) * 5 / 9;
        console.log(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Invalid choice! Please select 1 or 2.");
    }
}

 convertTemperature();
// NO#7
// 7. Password Strength Checker
 
 function pstr(){
    let Pstrenght = document.getElementsByClassName("pstrenght").length;
 let ptag = document.getElementById("pt");
    if (Pstrenght >= 8) {
        ptag.innerHTML ="Strong Password";
    } else if (Pstrenght > 5 && Pstrenght < 7) {
        ptag.innerHTML="Moderate Password";
    } else {
        ptag.innerHTML="Weak Password";
    }


    let hasNumber = /\d/.test(Pstrenght); 
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(Pstrenght)

    if (Pstrenght > 5) {
        if(hasNumber) {
            ptag.innerHTML += " contain number";
    } else {
        ptag.innerHTML += "No number"
    }
    if (hasSpecialChar) {
    ptag.innerHTML+= "(Contains special characters)"
    
    } else {
        ptag.innerHTML += "(No special characters)"
    }
} else {
    alert(ptag)
}
}
// NO#8
// 8. Rock, Paper, Scissors Game 
function Coin() {
    let userChoice = prompt("Enter a choice (0,1)");
    if (userChoice !== "0" && userChoice !== "1") {
        alert("please choice 0 or 1 one for heade or tail")
} else {
    let choice = Math.floor(Math.random()*2);
     let uChoice = userChoice = parseInt(userChoice);
    if(choice === 0) {
        console.log("coin on tail");
        alert("coin on tail");
    } else {
        console.log("coin on head");
        alert("coin on head")
    }
    if ( uChoice === choice) {
        console.log("you lose");
        alert("you lose")
    } else {
        console.log("you win");
        alert("you win")
    }
}}