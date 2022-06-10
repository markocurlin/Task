let array1 = [2, 5, 1, 15];
let number1 = 11;

let array2 = [2, 5, 1, 4, 6];
let number2 = 5;

let array3 = [2, 4, 5];
let number3 = 3;

//sortiraj niz i izbaci vrijednosti vece od B
function srediNiz(array, number) {
    const newArray = [];

    array = array.sort( (a, b) => {return b - a} );

    array.forEach(num => {
        if (num <= number)
            newArray.push(num);
    })

    return newArray;
}

function check(array, number, result) {
    const newArray = srediNiz(array, number);

    let numbers = 0;
    let sum = 0;

    newArray.forEach((numArray, index) => {
        //dodaji dok suma nije veca od B
        while(sum < number) {
            sum = sum + numArray;
            numbers++;
        }

        //ako je suma veca izbaci zadnji dodani broj
        if (sum !== number) {
            sum = sum - numArray;

            numbers--;

            //ako nema vise preostalih brojeva iz liste vracamo -1
            if (index === newArray.length - 1) {
                numbers = -1;
            }
        }
    })
    
    document.getElementById(`${result}`).textContent = numbers;
}

check(array1, number1, 'result1');
check(array2, number2, 'result2');
check(array3, number3, 'result3');