// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------
    // 1. Contact Form Submission
    // -----------------------------
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // For now, just log to console (you can replace this with AJAX/backend)
        console.log({
            name,
            email,
            phone,
            subject,
            message
        });

        alert('Thank you for contacting us! Your message has been received.');
        form.reset();
    });

    
    // 2. FAQ Toggle (Accordion)
    
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle('open');
            this.classList.toggle('active');
        });
    });

    // 3. Store List Click to Change Map
    
    const storeItems = document.querySelectorAll('.store-item');

    storeItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all
            storeItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const lat = parseFloat(this.dataset.lat);
            const lng = parseFloat(this.dataset.lng);

            if (window.map && window.google) {
                const newLocation = new google.maps.LatLng(lat, lng);
                map.setCenter(newLocation);
                marker.setPosition(newLocation);
            }
        });
    });
});


// 4. Google Map Initialization

let map, marker;

function initMap() {
    const defaultLocation = { lat: 19.0760, lng: 72.8777 }; // Mumbai

    map = new google.maps.Map(document.getElementById("storeMap"), {
        center: defaultLocation,
        zoom: 12,
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Our Bakery",
    });
}
