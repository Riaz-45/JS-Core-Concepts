const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        displayUsers(data);
    });
};

// {
// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
// "street": "Kulas Light",
// "suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",
// "geo": {
// "lat": "-37.3159",
// "lng": "81.1496"
// }
// },
// "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
// "name": "Romaguera-Crona",
// "catchPhrase": "Multi-layered client-server neural-net",
// "bs": "harness real-time e-markets"
// }
// },


const displayUsers = users => {
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = " ";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.innerHTML = `<div class="user-card">
                <h2>${user.name}</h2>

                <h3>Address</h3>
                <p>Street: ${user.address.street}</p>
                <p>Suite: ${user.address.suite}</p>
                <p>City: ${user.address.city}</p>
                <p>Zipcode: ${user.address.zipcode}</p>

                <h4>Geo</h4>
                <p>Latitude: ${user.address.geo.lat}</p>
                <p>Longitude: ${user.address.geo.lng}</p>

                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>

                <p>Company: ${user.company.name}</p>
           </div>`
        userContainer.append(userCard);
    })
}

// const displayUsers = users => {
//     // console.log(users);
//     const userContainer = document.getElementById("user-container");
//     userContainer.innerHTML = " ";

//     users.forEach(user => {
//         console.log(user);
//         const userCard = document.createElement("div");
//         userCard.innerHTML = ` <div class="user-card">
//                 <h3>${user.name}</h3>
//                 <p>${user.email}</p>
//             </div>`;

//         userContainer.append(userCard);
        
//     });
// };