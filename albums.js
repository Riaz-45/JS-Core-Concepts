const loadAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayAlbums(data);
    });
};



const displayAlbums = albums => {
    const albumsContainer = document.getElementById("album-container");
    albumsContainer.innerHTML = " ";

    albums.forEach(album => {
        // console.log(album);
        const albumCard = document.createElement("div");
        albumCard.innerHTML = `<div class="album-card">
                <h2>${album.id}</h2>
                <p>${album.title}</p>
            </div>`;
        albumsContainer.append(albumCard);
    })
}
loadAlbums();