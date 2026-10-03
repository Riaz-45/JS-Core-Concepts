const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayUsers(data);
    })
};


// {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
// address
// : 
// {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
// company
// : 
// {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
// email
// : 
// "Shanna@melissa.tv"
// id
// : 
// 2
// name
// : 
// "Ervin Howell"
// phone
// : 
// "010-692-6593 x09125"
// username
// : 
// "Antonette"
// website
// : 
// "anastasia.net"


const displayUsers = users => {
    // console.log(users);
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = " ";

    users.forEach(user => {
        console.log(user);
        const userCard = document.createElement("div");
        userCard.innerHTML = ` <div class="user-card">
                <h3>Rakibul Hasan Riaz</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores ratione natus praesentium nesciunt neque dolorum eum quibusdam temporibus odit?</p>
            </div>`;

        userContainer.append(userCard);
        
    });
};