// function counter(){
//     let count = 0;
//     function innerFunction(){
//         console.log('inside the inner function, some one called me');
//     }
//     return innerFunction;
// }

// const output = counter();
// console.log(output());\

// function add(a, b){
//     return a+b;
// }

// const result = add(4,5);
// console.log(result);
// console.log(result());


function counter (){
    let count = 10;

    return function(user){
        count = count + 1;
        console.log('inside the inner function', user, count);
    }
}

// const innerFunc = counter();
// innerFunc();
// innerFunc();
// innerFunc();

const rahimCounter = counter();
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
rahimCounter('rahim');
console.log('===================================')
const korimCounter = counter();
korimCounter('korim');
korimCounter('korim');
korimCounter('korim');
korimCounter('korim');
rahimCounter('rahim')