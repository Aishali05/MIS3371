function reviewForm() {

    var fname = document.getElementsByName("fname")[0].value;
   
    var mname = document.getElementsByName("mname")[0].value;
   
    var lname = document.getElementsByName("lname")[0].value;

    var dob = document.getElementsByName("dob")[0].value;

    var email = document.getElementById("email").value;
    
    var phone = document.getElementsByName("phone")[0].value;

    var address = document.getElementById("address1").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    var userid = document.getElementById("userid").value;

    document.getElementById("reviewName").innerHTML =
        "Name: " + fname + " " + mname + " " + lname;

    document.getElementById("reviewDOB").innerHTML =
        "Date of Birth: " + dob;

    document.getElementById("reviewEmail").innerHTML =
        "Email: " + email;

    document.getElementById("reviewPhone").innerHTML =
        "Phone: " + phone;

    document.getElementById("reviewAddress").innerHTML =
        "Address: " + address + ", " + city + ", " + state + " " + zip;

    document.getElementById("reviewUser").innerHTML =
        "User ID: " + userid;

    document.getElementById("reviewSection").style.display = "block";
}

function showValue(val) {
    document.getElementById("value").innerHTML = val;
}

function checkPassword() {

    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;

    if (p1 != p2) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
