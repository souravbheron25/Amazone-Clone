
document.getElementById('continue-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;

    if (emailInput === "") {
        alert("Please enter an email or mobile phone number.");
        return;
    }

    localStorage.setItem('email', emailInput);

    document.getElementById('email-container').style.display = 'none';
    document.getElementById('password-container').style.display = 'block';
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    if (email === storedEmail && password === storedPassword) {
        window.location.href = "index.html";  
    } else {
        alert("Incorrect email or password.");
    }
});