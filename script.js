// Using WebAPI to link to Class blogForm and Add Event Listener for Submit Button.
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

// Define variables for Username, Title, and Content.
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

// Add If and Else Statement and Select Username, Title, and Content.
// Else Statement will tell user to complete fields if empty before submitting.
    if (username && title && content) {
        const newPost = {
            username: username,
            title: title,
            content: content
        };
// Log blog posts into the browsers localStorage.
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(newPost);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    } else {
        alert('Please Complete All Fields Before Submitting.');
    }
});