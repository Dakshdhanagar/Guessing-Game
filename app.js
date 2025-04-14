const max = prompt("Enter the Max Number")
 
const random = Math.floor(Math.random() * max) +1

let guess =prompt("Guess the Number")

while(true){
    if(guess == "quit"){
        console.log("user quit")
        break;
    }
    if(guess == random){
        console.log("you Are right ! congrats");
        break;
    }else{
        guess = prompt("RE-Guess the Number")
    }
}
