function addComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
addComment()

function displayComment(comments) {
    const commentContainer = document.getElementById('container');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(div)



    }
}