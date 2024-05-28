// File will retreive and display blog posts from the localStorage.
const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postsContainer = document.getElementById('posts');
