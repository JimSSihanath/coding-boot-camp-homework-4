// File will retreive and display blog posts from the localStorage.
const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsContainer = document.getElementById('posts');

// Iterate through each element in the Post array.
posts.forEach(post => {
    const postElement = document.createElement('div');
// Return the HTML.
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.username}</p>
        <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
});