const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}


// console.log('Explore API');

// const person = {
//     name: 'selim',
//     fruit: 'dalim',
//     dish: 'halim',
//     friends: ['alim', 'kolim', 'lamim'],
//     isRIch: false,
//     money: 34000
// };
// console.log(person, typeof(person));

// // JSON -> JS object with Notation
// // JSON.stringify -> JSON
// // JSON.parse -> object

//  const personJSON = JSON.stringify(person);
//  console.log(personJSON, typeof(personJSON));


//  const parseJSON = JSON.parse(personJSON);
//  console.log(parseJSON, typeof(parseJSON));