"use strict";
let myMoney = 50;
myMoney = 20;
myMoney = 30;
let club = "Real Madrid";
const isFamouse = false;
let famous;
function add(number1, number2) {
    return number1 + number2;
}
;
add(3, 4);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
;
const user = fullName("Mr", "Been");
const multiply = (x, y) => x * y;
console.log(multiply(10, 5));
let multiply2;
multiply2 = (x, y) => x * y;
console.log(multiply2(4, 4));
// array
let numbers = [10, 20, 30, 40, 50, 60];
numbers.push(70);
const friends = ["Najim", "Akter", "Muktader", "Saddam"];
let megaName = "";
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Friend with the largest name", megaName);
// object
const friend = {
    name: "Faruk Zaman",
    age: 31
};
friend.age = 33;
let player;
player = {
    club: "barsa",
    salary: 2000,
};
const messy = {
    name: "Mwssy",
    club: "Barsa",
    salary: 40000,
    wife: "Some one",
    isPlaying: true
};
const ronaldo = {
    name: "Mwssy",
    club: "Barsa",
    salary: 40000,
    isPlaying: false
};
