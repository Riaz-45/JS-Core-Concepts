// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// const loadPost = () => {
//     const url ="https://jsonplaceholder.typicode.com/posts";
//     fetch(url) 
//     .then(res => res.json())
//     .then(jsonData => {
//         console.log(jsonData);
//         displayPost(jsonData);
//     });
// };

// const displayPost = (posts) => {
//     //=======>>> using normal for each loop
    
//     // for(post of posts){
//     //     console.log(post);
//     // }

//     //=====>>>>for each loop using array function

//     posts.forEach((post) => {
//         console.log(post);
//     })
// }

// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }


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