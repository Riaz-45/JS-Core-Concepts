// 
const name = 'Riaz';
console.log('location: ', location);
if(true){
    const data = 58;
    console.log('inside the if block: ', data);
    doMath(88, 999);
}
// console.log(data);


// function scope or local scope
function doMath(a, b){
    console.log(a, b);
    const sum = a+b;
    const total = sum + 10;

    function doubleIt(x){
        return x*2;
    }
    // console.log('calling doubleIt: ', doubleIt(450));
}

// console.log(a, b);

// console.log('calling doubleIt: ', doubleIt(450));

// jodi kono value ke declaration er age console kori tahole kono seta error hoye jabe
// Temporal Dead zone
let location = 'balur ghat';