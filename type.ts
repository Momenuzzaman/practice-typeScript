let myMoney:number = 50;
myMoney = 20;
myMoney = 30;

let club:string = "Real Madrid";

const isFamouse:boolean = false;
let famous:boolean;

function add( number1:number  , number2:number){
    return number1 + number2;
};

add(3,4);

function fullName(firstName: string, lastName: string):string{
    return firstName + " "+ lastName;
};

const user = fullName("Mr", "Been");

const multiply = (x:number, y:number):number => x*y;
console.log(multiply(10,5)) ;

let multiply2: (x:number, y:number )=>number;
multiply2 = (x ,y ) =>x*y;
console.log(multiply2(4,4));


// array

let numbers : number[] = [10,20,30,40,50,60];
numbers.push(70);

const friends : string[] = ["Najim","Akter","Muktader","Saddam"];
let megaName: string = ""
for(let i = 0; i<friends.length; i++){
    let friend: string = friends[i];
    if(friend.length > megaName.length){
        megaName= friend;
    }
}

console.log("Friend with the largest name", megaName);


// object

const friend:{name:string,age:number} ={
    name: "Faruk Zaman",
    age:31
}
friend.age= 33;

let player:{
    club:string,
    salary:number
}

player={
    club: "barsa",
    salary: 2000,
};

interface Player {
    name : string,
    club : string,
    salary:number,
    wife?: string,
    isPlaying: boolean
}

const messy : Player ={
    name: "Mwssy",
    club: "Barsa",
    salary : 40000,
    wife: "Some one",
    isPlaying: true
}

const ronaldo : Player ={
    name: "Mwssy",
    club: "Barsa",
    salary : 40000,
    isPlaying: false
}

class Person {
    name:string;
    private _person :string;
    readonly fatherName:string;
    constructor(name:string,father:string){
        this.name = name;
        this._person = name;
        this.fatherName = father;
    }
    getName():string{
        return this.name+ " "+ this._person;
    }
}
const sam  = new Person ("Salman","David")
console.log(sam.name,sam.fatherName);
const samName:string =sam.getName();