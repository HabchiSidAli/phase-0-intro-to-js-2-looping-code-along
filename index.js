function writeCards (names, type) {
    let array = [];
    for (let i = 0; names.length > i; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return(array);
}

function countDown(number){
    while (number >= 0){
        console.log(number);
        --number;
    }
}