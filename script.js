var form = document.getElementById('resume-form');
var dynamicResume = document.getElementById('dynamic-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeBuilder = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p>Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p>Phone: <span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (dynamicResume) {
        dynamicResume.innerHTML = resumeBuilder;
    }
    else {
        console.error('The resume element is missing.');
    }
});
