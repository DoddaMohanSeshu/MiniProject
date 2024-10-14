// Function to select a movie
function selectMovie(movieName) {
    document.getElementById('movie').value = movieName;
}

// Form validation
document.getElementById('ticketForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = document.getElementById('tickets').value;

    // Simple validation for the form fields
    if (name === '' || email === '' || tickets === '' || tickets <= 0) {
        alert('Please fill out all the fields and enter a valid number of tickets.');
        return;
    }

    alert(`Booking successful!\nName: ${name}\nMovie: ${document.getElementById('movie').value}\nTickets: ${tickets}`);
});
