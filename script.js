document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('formStatus').innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formStatus').innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
    }
});
