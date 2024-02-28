function loadPost() {
    const url = ('https://jsonplaceholder.typicode.com/posts')
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const displayCall = document.getElementById('displayAll')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post : ${post.title}</h5>
            <p>post description:  ${post.body}</p>
            `;
        displayCall.appendChild(div);
    }
}
loadPost()