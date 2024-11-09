// Ensuring that the form element exists in the DOM
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement | null;

// Adding event listener to the form submit event
if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Retrieving values from form fields
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Checking if the resume display exists before updating it
        if (resumeDisplay) {
            // Creating dynamic resume content
            resumeDisplay.innerHTML = `
                <h2>${name}'s Resume</h2>
                <div class="section">
                    <h3>Personal Information</h3>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </div>
                <div class="section">
                    <h3>Education</h3>
                    <p>${education}</p>
                </div>
                <div class="section">
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </div>
                <div class="section">
                    <h3>Skills</h3>
                    <p>${skills}</p>
                </div>
            `;
            // Display the generated resume
            resumeDisplay.style.display = 'block';
        }
    });
}
