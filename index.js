/*
//Output
console.log("Hello");

//彈出式警告
window.alert("Shih Wayne Is Poop")

//利用id回傳值
document.getElementById("1p").textContent = "Shih Wayne Is Poop!!";
*/

/*
// ----- NO METHOD TRAINING -----

let username = window.prompt(`Enter Ur name: `);

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachar = username.slice(1);
extrachar = extrachar.toLowerCase();
username = letter + extrachar;

console.log(username);

// ----- METHOD TRAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);  

//.slice(x, y) the char start from x position and ends on y position
//.trim() remove the space
*/

/*
AND = &&
OR = ||
NOT = !

== or != >> compare VALUE
=== or !== >> compare VALUE and DATATYPE
*/

const Max = 100;
const Min = 1;
const Ans = Math.round(Math.random() * (Max - Min + 1)) + Min;
// const Run = true;
const Ranges = document.getElementById("range");
const Guess = document.getElementById("guess");
const Enter = document.getElementById("enter");
let a = Min;
let b = Max;

Ranges.textContent = `${Min} to ${Max}`;


Enter.onclick = function(){
let k;
k = Guess.value;
k = Number(k);
  if(k < Ans && k >= a){
    a = k;
    Ranges.textContent = `${a} to ${b}`;
  }
  else if(k > Ans && k <= b){
    b = k;
    Ranges.textContent = `${a} to ${b}`;
  }
  else if(k == Ans){
    Ranges.textContent = `Congratulation! The answer is ${Ans}`;
    // Run = false;
  }
}