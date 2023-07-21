// Code your solutions in this file
let array = [];

function writeCards (names, type) {
    for (let i = 0; names.length > i; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
        if (names.length == i + 1){
            return(array);
        }
    }
}

function countDown(number){
    while (number >= 0){
        console.log(number);
        --number;
    }
}