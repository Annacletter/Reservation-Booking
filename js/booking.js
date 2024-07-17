document.getElementById('hotelBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.kovecollection.co.za/stay/'; // Redirect to the URL
});

document.getElementById('restaurantReservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
window.location.href = 'https://www.kovecollection.co.za/eat-drinks/';
});
