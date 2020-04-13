function formClick() {
    var fName = document.getElementById("first").value;
    var lName = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Thank you for your message: " + message + "\nBy " + fName + " " + lName + " at " + email + "\nIt has been submitted."); //this will alert the first name and the last name.

}