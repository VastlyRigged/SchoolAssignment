
function validateForm(){
    var x = document.forms["contactForm"]["Name"].value;
    var c = document.forms["contactForm"]["Telephone"].value;
    var y = document.forms["contactForm"]["Email"].value;
    var z = document.forms["contactForm"]["Subject"].value;
    var i = document.getElementById("checkmark");
    if (x == null || x == "") {
        alert("Must fill up the name.");
        return false;
    }
    if (c == null || c == "")
    {
        alert("Enter your phone number.");
        return false;
    }
    if (y == null || y == "")
    {   
        alert("Please enter an email.")
        return false;
    }
    if (z == null || z == "")
    {
        alert("You cannot leave a subject empty.")
        return false;
    }
    if (i.checked == false)
    {
        alert("You must be a bot.")
        return false;
    }
}
function validateTelephone(){
    var x = document.forms["phoneNumber"]["Telephone"].value;
    if (isNaN(x))
    {
        let num = x
        if (x.toString(length) != 7) {
            alert("Phone number must be 7 digit long.")
            return false;
        }
    }
}

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
