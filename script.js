function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-button i');
    toggleButton.classList.toggle('fa-moon');
    toggleButton.classList.toggle('fa-sun');
}

function scrollToSection(section) {
    const rect = section.getBoundingClientRect();
    const scrollMargin = 70; // 20px margin at the top
    const targetY = rect.top - scrollMargin;
  
    window.scrollTo({
      top: window.pageYOffset + targetY,
      behavior: 'smooth',
    });
  }

const aboutBtn = document.getElementById('about-btn');
const educationBtn = document.getElementById('education-btn');
const courseworkBtn = document.getElementById('coursework-btn');
const experienceBtn = document.getElementById('experience-btn');
const projectsBtn = document.getElementById('projects-btn');
const skillsBtn = document.getElementById('skills-btn');
const awardBtn = document.getElementById('award-btn');
const contactBtn = document.getElementById('contact-btn');

const aboutSection = document.getElementById('about-section');
const educationSection = document.getElementById('education-section');
const courseworkSection = document.getElementById('coursework-section');
const experienceSection = document.getElementById('experience-section');
const projectsSection = document.getElementById('projects-section');
const skillsSection = document.getElementById('skills-section');
const awardSection = document.getElementById('award-section');
const contactSection = document.getElementById('contact-section');

aboutBtn.addEventListener('click', () => {
    // aboutSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(aboutSection);
});

educationBtn.addEventListener('click', () => {
    // educationSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(educationSection);
});

courseworkBtn.addEventListener('click', () => {
    // courseworkSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(courseworkSection);
});

experienceBtn.addEventListener('click', () => {
    // experienceSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(experienceSection);
});

projectsBtn.addEventListener('click', () => {
    // projectsSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(projectsSection);
});

skillsBtn.addEventListener('click', () => {
    // skillsSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(skillsSection);
});

awardBtn.addEventListener('click', () => {
    // awardSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(awardSection);
});

contactBtn.addEventListener('click', () => {
    // contactSection.scrollIntoView({ behavior: 'smooth' });
    scrollToSection(contactSection);
});


