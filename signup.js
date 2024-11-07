document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (name === "" || email === "" || password === "" || repassword === "") {
        alert("All fields are required.");
        return;
    }

    if (password !== repassword) {
        alert("Passwords do not match.");
        return;
    }


    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);


    alert("Account created successfully! You can now sign in.");
    window.location.href = "signin.html";
});