document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        // Perform validation if needed

        // Make a POST request to the provided endpoint
        fetch('http://localhost:3000/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the response as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
