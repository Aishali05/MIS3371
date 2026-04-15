//Program Name: JavaScript Review Form for Medical Form
//Author: Aish Ali
//Date Created: 03/16/2026
//Date Last Edited: 03/26/2026
//Version 1.0
//Description: Review Form code to check all information on the Medical Form


// REVIEW BUTTON FUNCTION
function reviewForm() {

    // GET VALUES
    var fname = document.getElementsByName("fname") [0].value;
    var mname = document.getElementsByName("mname") [0].value;
    var lname = document.getElementsByName("lname") [0].value;
    var dob = document.getElementsByName("dob") [0].value;
    var email = document.getElementsByName("email") [0].value;
    var phone = document.getElementsByName("phone") [0].value;
    var address1 = document.getElementsByName("address1") [0].value;
    var address2 = document.getElementsByName("address2") [0].value;
    var city = document.getElementsByName("city") [0].value;
    var state = document.getElementsByName("state") [0].value;
    var zip = document.getElementsByName("zip") [0].value;
    var userid = document.getElementsByName("userid") [0].value;
    var password = document.getElementsByName("password") [0].value;
    var password2 = document.getElementsByName("password2") [0].value;
    var symptoms = document.getElementsByName("symptoms") [0].value;
    var healthscale = document.getElementsByName("healthScale") [0].value;

    //Radio Buttons
    var gender = "";
    var genderOptions = document.getElementsByName("gender");
    for (var i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) gender = genderOptions[i].value; }
    
    var vaccinated = "";
    var vaccinatedOptions = document.getElementsByName("vaccinated");
    for (var i = 0; i < vaccinatedOptions.length; i++) {
        if (vaccinatedOptions[i].checked) vaccinated = vaccinatedOptions[i].value; }

    var insurance = "";
    var insuranceOptions = document.getElementsByName("insurance");
    for (var i = 0; i < insuranceOptions.length; i++) {
        if (insuranceOptions[i].checked) insurance = insuranceOptions[i].value; }


    //Checkboxes
    var diseases = document.getElementsByName("disease");
    var diseaseList = [];
    for (var i = 0; i < diseases.length; i++) {
        if (diseases[i].checked) diseaseList.push(diseases[i].value);  } 

    // ERROR MESSAGE
    var errorMessage = "";

    if (fname == "") errorMessage += "First name is required<br>";
    if (lname == "") errorMessage += "Last name is required<br>";
    if (dob == "") errorMessage += "Date of birth is required<br>";

    if (email == "" || email.indexOf("@") == -1)
        errorMessage += "Invalid email<br>";

    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone))
        errorMessage += "Phone must be in format 123-456-7890<br>";

    if (!/^\d{5}(-\d{4})?$/.test(zip))
        errorMessage += "Zip must be 5 digits or ZIP+4 (12345-6789)<br>";

    // PASSWORD VALIDATION
    errorMessage += validatePassword(password, password2, userid);


    // User Id Lower Case
    document.getElementsByName("userid")[0].value = userid.toLowerCase();

    //dob
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth()+1).padStart(2,'0');
    var dd = String(today.getDate()).padStart(2,'0');
   
    var maxDate = yyyy + '-' + mm + '-' + dd;
    var minDate = (yyyy-120) + '-' + mm + '-' + dd;

    document.getElementsByName("dob")[0].setAttribute("max", maxDate);
    document.getElementsByName("dob")[0].setAttribute("min", minDate);
    
    

   // Output  
    var output = "PLEASE REVIEW THIS INFORMATION";

     if (errorMessage != "") {
        output += "<span style='color:red;'><br>" + errorMessage + "</span><br>";
    }
    output += "Name: " + fname + " " + mname + " " + lname + "<br>";
    output += "DOB: " + dob + "<br>";
    output += "Email: " + email + "<br>";
    output += "Phone: " + phone + "<br>";
    output += "Address: " + address1;
        if (address2 != "") output += ", " + address2;
    
    output += "<br>" + city + ", " + state + " " + zip + "<br>";
    output += "Gender: " + gender + "<br>";
    output += "Vaccinated: " + vaccinated + "<br>";
    output += "Insurance: " + insurance + "<br>";
    output += "Health Rating: " + healthscale + "<br>";
    output += "Medical History: " + (diseaseList.length > 0 ? diseaseList.join(", ") : "None") + "<br>";
    output += "Symptoms: " + symptoms + "<br>";
    output += "User ID: " + userid + "<br>";
    output += "Password: " + password + "<br>";


    document.getElementById("reviewOutput").innerHTML = output;
} 

function validatePassword(password, password2, userid) {
    var errors = "";

    if (password !== password2) {
        errors += "Passwords do not match<br>";
    }

    if (password.toLowerCase().includes(userid)) {
        errors += "Password cannot contain User ID<br>";
    }

    if (!/[A-Z]/.test(password)) {
        errors += "Must include uppercase letter<br>";
    }

    if (!/[a-z]/.test(password)) {
        errors += "Must include lowercase letter<br>";
    }

    if (!/[0-9]/.test(password)) {
        errors += "Must include a number<br>";
    }

    if (!/[!@#$%^&*()\-_=+\\\/><.,`~]/.test(password)) {
        errors += "Must include special character<br>";
    }

    if (/["]/.test(password)) {
        errors += "Cannot contain quotes<br>";
    }

    return errors;
}

//Slider Value
function updateSlider(val) {
    document.getElementById("sliderValue").innerText = val;
}

//Check for Error while filling out
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearError(id) {
    document.getElementById(id).innerHTML = "";
}

//Check for First Name
function checkFName() {
    let fname = document.getElementById("fname").value.trim();

    if (!/^[A-Za-z'-]{1,30}$/.test(fname)) {
        showError("fnameError", "1-30 letters only");
        return false;
    }

    clearError("fnameError");
    return true;
}

//Check for Middle Name
function checkMName() {
    let mname = document.getElementById("mname").value.trim();

    if (mname !== "" && !/^[A-Za-z]{1}$/.test(mname)) {
        showError("mnameError", "One letter only");
        return false;
    }

    clearError("mnameError");
    return true;
}

//Check for Last Name
function checkLName() {
    let lname = document.getElementById("lname").value.trim();

    if (!/^[A-Za-z'-]{1,30}$/.test(lname)) {
        showError("lnameError", "1-30 letters only");
        return false;
    }

    clearError("lnameError");
    return true;
}


//Check for DOB
function checkDOB() {
    let dob = document.getElementById("dob").value;
    let birthDate = new Date(dob);
    let today = new Date();
    let oldest = new Date();
    oldest.setFullYear(today.getFullYear() - 120);

    if (dob === "") {
        showError("dobError", "DOB required");
        return false;
    }

    if (birthDate > today || birthDate < oldest) {
        showError("dobError", "DOB must be within 120 years");
        return false;
    }

    clearError("dobError");
    return true;
}


//Check for SSN
function formatSSN() {
    let ssn = document.getElementById("ssn");
    let numbers = ssn.value.replace(/\D/g, "");

    if (numbers.length > 3 && numbers.length <= 5) {
        numbers = numbers.slice(0,3) + "-" + numbers.slice(3);
    } else if (numbers.length > 5) {
        numbers = numbers.slice(0,3) + "-" + numbers.slice(3,5) + "-" + numbers.slice(5,9);
    }

    ssn.value = numbers;
}

function checkSSN() {
    let ssn = document.getElementById("ssn").value;

    if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        showError("ssnError", "Use XXX-XX-XXXX");
        return false;
    }

    clearError("ssnError");
    return true;
}

//Check the Address
function checkAddress1() {
    let value = document.getElementById("address1").value.trim();

    if (value.length < 2 || value.length > 30) {
        showError("address1Error", "2-30 chars required");
        return false;
    }

    clearError("address1Error");
    return true;
}

function checkAddress2() {
    let value = document.getElementById("address2").value.trim();

    if (value !== "" && (value.length < 2 || value.length > 30)) {
        showError("address2Error", "2-30 chars if entered");
        return false;
    }

    clearError("address2Error");
    return true;
}


//Check for City
function checkCity() {
    let value = document.getElementById("city").value.trim();

    if (!/^[A-Za-z\s'-]{2,30}$/.test(value)) {
        showError("cityError", "2-30 letters only");
        return false;
    }

    clearError("cityError");
    return true;
}


//Check for State
function checkState() {
    let value = document.getElementById("state").value;

    if (value === "S") {
        showError("stateError", "Select a state");
        return false;
    }

    clearError("stateError");
    return true;
}

//Check for Zip Code
function checkZip() {
    let zip = document.getElementById("zip").value;

    if (!/^\d{5}$/.test(zip)) {
        showError("zipError", "ZIP must be 5 digits");
        return false;
    }

    clearError("zipError");
    return true;
}


//Check for Phone Number
function checkPhone() {
    let phone = document.getElementById("phone").value;

    if (!/^\d{10}$/.test(phone)) {
        showError("phoneError", "Phone must be 10 digits");
        return false;
    }

    clearError("phoneError");
    return true;
}


//Check for Email
function checkEmail() {
    let email = document.getElementById("email");
    email.value = email.value.toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError("emailError", "Invalid email");
        return false;
    }

    clearError("emailError");
    return true;
}

//Check for User ID
function checkUserID() {
    let userid = document.getElementById("userid").value;

    if (!/^[A-Za-z][A-Za-z0-9_-]{4,19}$/.test(userid)) {
        showError("useridError", "5-20 chars, start with letter");
        return false;
    }

    clearError("useridError");
    return true;
}


//Check for Password and Verify
function checkPassword() {
    let password = document.getElementById("password").value;
    let userid = document.getElementById("userid").value;

    let errors = validatePassword(password, password, userid);

    if (errors !== "") {
        showError("passwordError", errors);
        return false;
    }

    clearError("passwordError");
    return true;
}

function checkPasswordMatch() {
    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("password2").value;

    if (p1 !== p2) {
        showError("password2Error", "Passwords do not match");
        return false;
    }

    clearError("password2Error");
    return true;
}

function validateForm() {
    let valid = true;

    valid &= checkFName();
    valid &= checkMName();
    valid &= checkLName();
    valid &= checkDOB();
    valid &= checkSSN();
    valid &= checkAddress1();
    valid &= checkAddress2();
    valid &= checkCity();
    valid &= checkState();
    valid &= checkZip();
    valid &= checkPhone();
    valid &= checkEmail();
    valid &= checkUserID();
    valid &= checkPassword();
    valid &= checkPasswordMatch();

    if (valid) {
        document.getElementById("submitBtn").style.display = "inline-block";
        reviewForm();
        alert("Everything looks good. You may submit.");
    } else {
        document.getElementById("submitBtn").style.display = "none";
    }
}

