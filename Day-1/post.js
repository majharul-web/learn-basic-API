function postFunc() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
postFunc()

function displayPost(post) {
    const postContainer = document.getElementById('container');
    for (const user of post) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h1>${user.title}</h1>
        <p>${user.body}</p>
        `;
        postContainer.appendChild(div);
    }
}