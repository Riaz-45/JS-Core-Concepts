// function call for primitive data
function multiply(x, y){
    x = x + 5;
    y = y + 5;
    const mult = x*y;
    return mult;
}

const a = 5;
const b = 7;

console.log('before the function call: ', a, b);
const result = multiply(a, b);
console.log(result);
console.log('after the function call: ', a, b);


// function call for non-primitive values (object, array) are passed by reference
const manik = {name: 'manik', balance: 5000};
const roton = {name: 'roton', balance: 40000};

console.log('before call', manik, roton);

function totalMoney(person1, person2){
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}

const balance = totalMoney(manik, roton);
console.log('balance', balance);

console.log('after function call', manik, roton);



// function Arguments
function add(a, b){
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}

add(45, 10, 34, 23);