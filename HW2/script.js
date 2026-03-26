// REVIEW BUTTON FUNCTION
function reviewForm() {

    // GET VALUES
    var fname = document.getElementsByName("fname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var dob = document.getElementsByName("dob")[0].value;
    var email = document.getElementsByName("email")[0].value;

    // SIMPLE CHECKS
    var errorMessage = "";

    if (fname == "") {
        errorMessage += "First name is required <br>";
    }

    if (lname == "") {
        errorMessage += "Last name is required <br>";
    }

    if (dob == "") {
        errorMessage += "Date of birth is required <br>";
    }

    if (email == "" || email.indexOf("@") == -1) {
        errorMessage += "Invalid email <br>";
    }

    // DISPLAY ERRORS OR DATA
    if (errorMessage != "") {
        document.getElementById("reviewOutput").innerHTML = errorMessage;
        return;
    }

    // DISPLAY INFO
    var output = "";
    output += "First Name: " + fname + "<br>";
    output += "Last Name: " + lname + "<br>";
    output += "DOB: " + dob + "<br>";
    output += "Email: " + email + "<br>";

    document.getElementById("reviewOutput").innerHTML = output;
}

function checkPassword() {

    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("password2").value;

    if (pass1 != pass2) {
        alert("Passwords do not match");
    }
}
