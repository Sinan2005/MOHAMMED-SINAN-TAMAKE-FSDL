document.getElementById("myForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        event.preventDefault();
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address");
        event.preventDefault();
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        event.preventDefault();
        return;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Enter a valid 10-digit phone number");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
