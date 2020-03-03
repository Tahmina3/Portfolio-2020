function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }

  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }


  //https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
  function validateForm() {
if( document.contactForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.contactForm.Name.focus() ;
            return false;
         }
         if( document.contactForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.contactForm.EMail.focus() ;
            return false;
         }
         return( true );
  }

  function validateEmail() {
    var emailID = document.contactForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.contactForm.EMail.focus() ;
       return false;
    }
    return( true );
 }