function reviewForm()  {


    var fname = document.getElementsByName("fname") [0].value:
 
    var lname = document.getElementsByName("lname") [0].value:
 
    var dob = document.getElementsByName("dob") [0].value:
 
    var email = document.getElementsByName("email") [0].value:
  
    var userid = document.getElementsByName("userid") [0].value:

    var output = "";


    output +=  "Name:  "  +  fname + " " + lanme  + "<br>";

    output +=  "Date of Birth:  "  +  dob +  "<br>";

    output +=  "Email:  "  +  email + "<br>";

    output +=  "User ID:  "  +  userid + "<br>";


    document.getElementById("reviewOutput").innerHTML = output;
  
    document.getElementById("reviewSection").style.display = "block";
}


function checkPasswords() {
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;

    if (p1 !== p2) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}



function showValue(val) {
    document.getElementById("sliderValue").innerHTML = val;
}
