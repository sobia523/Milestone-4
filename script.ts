const form = document.getElementById('resume-form') as HTMLFormElement

const dynamicResume = document.getElementById('dynamic-resume') as HTMLFormElement

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    const resumeBuilder = `
    <h2>Editable Resume</h2>
    <h3>Personal Information</h3>
    <p>Name: <span contenteditable="true">${name}</span></p>
    <p>Email: <span contenteditable="true">${email}</span></p>
    <p>Phone: <span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    if(dynamicResume){
        dynamicResume.innerHTML = resumeBuilder;
    } else {
        console.error('The resume element is missing.')
    } 
}
); 