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