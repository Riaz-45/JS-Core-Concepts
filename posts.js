const loadPost = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayPosts(data);
    });
};

// {
//     "userId": 5,
//     "id": 45,
//     "title": "ut numquam possimus omnis eius suscipit laudantium iure",
//     "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
// }

const displayPosts = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    posts.forEach((post) => {
    // 2. create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;

    // 3. add to the container
    postContainer.append(postCard);  
    });
};

// loadPost();




// const displayPosts = (posts) => {
//     console.log(posts);
//     // 1. get the container
//     const postContainer = document.getElementById("post-container");
//     postContainer.innerHTML = " ";
//     // console.log(postContainer);

//     // for(let post of posts){
//     //     console.log(post);
//     // }

//     posts.forEach((post) => {
//         // console.log(post.title);

//         // 2. create HTML element
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         // console.log(li);

//         // 3. add li into container
//         postContainer.appendChild(li);
//     });
// };
