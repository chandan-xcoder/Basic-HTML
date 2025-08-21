// This file contains JavaScript code for interactive features of the portfolio website, such as form validation and dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your message, ' + name + '!');
        }
    });

    // Example of dynamic content loading
    const projectsButton = document.getElementById('load-projects');
    projectsButton.addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        projectsSection.innerHTML = '<p>Loading projects...</p>';
        
        // Simulate loading projects
        setTimeout(() => {
            projectsSection.innerHTML = '<p>Project 1: Portfolio Website</p><p>Project 2: Todo List App</p>';
        }, 1000);
    });
});