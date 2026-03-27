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


    // PASSWORD VALIDATION
    userid = userid.toLowerCase();


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


