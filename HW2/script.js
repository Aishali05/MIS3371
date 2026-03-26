function reviewForm()  {

    //name//
    var fname = document.getElementsByName("fname") [0].value;
 
    var lname = document.getElementsByName("lname") [0].value;

    //dob//
    var dob = document.getElementsByName("dob") [0].value;

    //email//
    var email = document.getElementsByName("email") [0].value;

    //userid//
    var userid = document.getElementsByName("userid") [0].value;

    //Address//
    var address 1 = document.getElementByName("address1") [0].value;

    var address 2 = document.getElementbyName("address2") [0].value;

    var city = document.getElementsByName("city")[0].value;

    var state = document.getElementsByName("state")[0].value;

    var zip = document.getElementsByName("zip")[0].value;
         if (zip.length > 5) {
            zip = zip.substring(0,5);}

    //Phone//
    var phone = document.getElementsByName("phone") [0].value;

    // SLIDER
    var health = document.getElementsByName("healthScale")[0].value;

    // TEXTAREA
    var symptoms = document.getElementsByName("symptoms")[0].value;
    
  // CHECKBOXES
    var diseases = "";
    var boxes = document.getElementsByName("disease");
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            diseases += boxes[i].value + ", ";
        }
    }
    if (diseases === "") {
        diseases = "None";}
// RADIO BUTTONS
    var gender = "Not selected";
    var g = document.getElementsByName("gender");
    for (var i = 0; i < g.length; i++) {
        if (g[i].checked) {
            gender = g[i].value;
        }
    }

    var vaccinated = "Not selected";
    var v = document.getElementsByName("vaccinated");
    for (var i = 0; i < v.length; i++) {
        if (v[i].checked) {
            vaccinated = v[i].value;
        }
    }

    var insurance = "Not selected";
    var ins = document.getElementsByName("insurance");
    for (var i = 0; i < ins.length; i++) {
        if (ins[i].checked) {
            insurance = ins[i].value;
        }
    }



    //Output
    var output = "";

    output += "<b>PLEASE REVIEW YOUR INFORMATION</b><br><br>";
    
    output += "Name: " + fname + " " + lname  + "<br>";

    output += "Date of Birth: " +  dob +  "<br>";

    output += "Email: " +  email + "<br>";

    output += "Phone: " + phone + "<br><br>";

    output += "User ID: " +  userid + "<br>";

    output += "Address:<br>";
   
    output += address1 + "<br>";
        if (address2 !== "") {
            output += address2 + "<br>";}
    
    output += city + ", " + state + " " + zip + "<br>";

    output += "Medical History: " + diseases + "<br>";
    
    output += "Gender: " + gender + "<br>";
    
    output += "Vaccinated: " + vaccinated + "<br>";
    
    output += "Insurance:" + insurance + "<br>";
   
    output += "Health Rating:" + health + "<br>";

    output += "Symptoms: " + symptoms + "<br>";
   


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
    document.getElementById("slider").innerHTML = val;
}
