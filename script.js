// Function to filter courses by category
function filterCourses(category) {
    let courses = document.querySelectorAll('.course-item');

    courses.forEach(course => {
        if (category === 'all') {
            course.style.display = 'block';
        } else {
            // Match the data-category attribute
            if (course.getAttribute('data-category') === category) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            alert('Please enter your name.');
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            alert('Please enter a message.');
            valid = false;
        }

        // Prevent form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });
});