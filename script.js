// JavaScript for the About button on the home page
document.getElementById('about-button').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Objective:\nA comprehensive, user-friendly, and secure web platform to facilitate efficient tutoring and progress tracking, enhancing the educational experience for students, teachers, and administrators.\n\nSpecific Objectives:\nFor Students:\n1. Easy access to tutoring schedules and materials\n2. Personalized learning plans and progress tracking\n3. Interactive tools for engagement and feedback\n4. Secure messaging system for communication with teachers\n\nFor Teachers:\n1. Streamlined tutoring scheduling and management\n2. Automated progress tracking and reporting\n3. Access to student learning plans and materials\n4. Tools for creating and assigning interactive content\n\nFor Administrators:\n1. Centralized dashboard for monitoring progress\n2. Automated reporting and analytics\n3. User management and access control\n4. Integration with existing school management systems\n\nKey Functionalities:\n1. User registration and login\n2. Tutoring scheduling and management\n3. Progress tracking and analytics");
});

// JavaScript to toggle between login and forgot password forms on the login page
document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('login-form').style.display = 'none'; // Hide login form
    document.getElementById('forgot-password-form').style.display = 'block'; // Show forgot password form
});

document.getElementById('back-to-login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('forgot-password-form').style.display = 'none'; // Hide forgot password form
    document.getElementById('login-form').style.display = 'block'; // Show login form
});

// Additional JavaScript for toggling the objectives section in the about page
document.addEventListener('DOMContentLoaded', function() {
    const showObjectivesButton = document.getElementById('show-objectives');
    const objectivesSection = document.getElementById('objectives-section');

    showObjectivesButton.addEventListener('click', function(event) {
        objectivesSection.style.display = objectivesSection.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for the dashboard page
function updateDashboard(userName, userType) {
    const welcomeMessage = document.querySelector('h1');
    welcomeMessage.textContent = `Welcome, ${userName} (${userType})`;
}

// Example usage (you can replace this with actual login data)
updateDashboard('Awande Sithole', 'Learner');