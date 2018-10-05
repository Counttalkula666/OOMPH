$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.newproctor");
  var emailInput = $("input#email-input");
  //var passwordInput = $("input#password-input");
  //var firstName = $("input#FN-input");
  //var lastName = $("input#LN-input");
  var proctorName = $("input#PN-input");
  var proctorInstitution = $("input#PI-input");
  var proctorEmail = $("input#PE-input");
  var proctorPhone = $("input#PP-input");
  var proctorType= $( "#myselect" );



  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    console.log(proctorType.val())
    var proctorData = {
      email: emailInput.val().trim(),
      proctorName: proctorName.val().trim(),
      proctorInstitution: proctorInstitution.val().trim(),
      proctorEmail: proctorEmail.val().trim(),
      proctorPhone: proctorPhone.val().trim(),
      proctorType: proctorType.val()
    };

    
    // If we have an email and password, run the signUpNewProctor function
    signUpNewProctor(proctorData.email, proctorData.proctorName,proctorData.proctorInstitution,
      proctorData.proctorEmail,proctorData.proctorPhone, proctorData.proctorType);
    emailInput.val("");
    proctorName.val("");
    proctorInstitution.val("");
    proctorEmail.val("");
    proctorPhone.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpNewProctor(email, proctorName,proctorInstitution,
                      proctorEmail,proctorPhone, proctorType) {
    $.post("/api/newproctor", {
      email: email,
      proctorName: proctorName,
      proctorInstitution: proctorInstitution,
      proctorEmail: proctorEmail,
      proctorPhone: proctorPhone,
      proctorType: proctorType
      
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
