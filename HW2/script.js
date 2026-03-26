function reviewForm() {

    var fname = document.getElementsByName("fname")[0].value;
    var mname = document.getElementsByName("mname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var dob = document.getElementsByName("dob")[0].value;

    var address1 = document.getElementsByName("address1")[0].value;
    var address2 = document.getElementsByName("address2")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var state = document.getElementsByName("state")[0].value;
    var zip = document.getElementsByName("zip")[0].value;

    var email = document.getElementsByName("email")[0].value;
    var userid = document.getElementsByName("userid")[0].value.toLowerCase();

    var phone = document.querySelector("input[placeholder='123-456-7890']").value;

    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    var symptoms = document.getElementById("symptoms").value;

    // CHECKBOXES
    var diseases = document.getElementsByName("disease");
    var diseaseList = "";

    for (var i = 0; i < diseases.length; i++) {
        if (diseases[i].checked) {
            diseaseList += diseases[i].value + ", ";
        }
    }

    // RADIO BUTTONS
    var gender = document.querySelector('input[name="gender"]:checked');
    var vaccinated = document.querySelector('input[name="vaccinated"]:checked');
    var insurance = document.querySelector('input[name="insurance"]:checked');

    // PASSWORD CHECK
    var passMessage = "PASS";
    if (password !== password2) {
        passMessage = "ERROR: Passwords do not match";
    }

    // DOB CHECK (simple)
    var today = new Date();
    var birthDate = new Date(dob);
    var dobMessage = "PASS";

    if (birthDate > today) {
        dobMessage = "ERROR: Cannot be in the future";
    }

    // OUTPUT
    var output = `
    Name: ${fname} ${mname} ${lname} <br>
    DOB: ${dob} (${dobMessage}) <br><br>

    Email: ${email} <br>
    Phone: ${phone} <br><br>

    Address: ${address1} ${address2}, ${city}, ${state}, ${zip} <br><br>

    Diseases: ${diseaseList} <br>
    Gender: ${gender ? gender.value : ""} <br>
    Vaccinated: ${vaccinated ? vaccinated.value : ""} <br>
    Insurance: ${insurance ? insurance.value : ""} <br><br>

    Symptoms: ${symptoms} <br><br>

    User ID: ${userid} <br>
    Password Check: ${passMessage}
    `;

    document.getElementById("reviewOutput").innerHTML = output;
}

function updateSlider(val) {
    document.getElementById("sliderValue").innerText = val;
}
