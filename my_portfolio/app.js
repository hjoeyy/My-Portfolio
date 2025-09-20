const contactButton = document.querySelector('.contact-button');
const linkedinButton = document.querySelector('.linkedin-button');
const githubButton = document.querySelector('.github-button');
const resumeButton = document.querySelector('.resume-button');

if(contactButton) {
    contactButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
}

if(linkedinButton) {
    linkedinButton.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/in/joseph-hermansen/';
    });
}

if(githubButton) {
    githubButton.addEventListener('click', () => {
        window.location.href = 'https://github.com/hjoeyy';
    });
}

if(resumeButton) {
    resumeButton.addEventListener('click', () => {
        window.location.href = 'assets/Joseph_Hermansen_Resume_Updated_2025.pdf';
    });
}
