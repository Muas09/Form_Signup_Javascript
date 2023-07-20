document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Clear existing error messages
    document.getElementById("firts_name_error").innerHTML = "";
    document.getElementById("last_name_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("password_error").innerHTML = "";

    if (firstName === "") {
        document.getElementById("firts_name_error").innerHTML = "First Name cannot be empty";
    }

    if (lastName === "") {
        document.getElementById("last_name_error").innerHTML = "Last Name cannot be empty";
    }

    if (email === "") {
        document.getElementById("email_error").innerHTML = "Looks like this is not an email";
    }

    if (password === "") {
        document.getElementById("password_error").innerHTML = "Password cannot be empty";
    }
});