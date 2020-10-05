

function counter() {
  let obj;
  
  fetch('https://db7qhpf6o5.execute-api.us-east-1.amazonaws.com/Prod/{proxy+}')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => {
      console.log(obj.message)
      let content = document.getElementById('counter');
      let content2 = document.getElementById('counter2');
      let newString = document.createTextNode(obj.message)
      let newString2 = document.createTextNode(obj.message)

      content.appendChild(newString); //loads onto page
      content2.appendChild(newString2); //loads onto page


    })
   
}


function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://www.garrettbenner.com";

       let Namere = /[A-Za-z]{1}[A-Za-z]/;
       if (!Namere.test($("#name-input").val())) {
                    alert ("Name can not less than 2 char");
           return;
       }
       let mobilere = /[0-9]{10}/;
      //  if (!mobilere.test($("#phone-input").val())) {
      //      alert ("Please enter valid mobile number");
      //      return;
      //  }
       if ($("#email-input").val()=="") {
           alert ("Please enter your email id");
           return;
       }

       let reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
       if (!reeamil.test($("#email-input").val())) {
           alert ("Please enter valid email address");
           return;
       }

  let name = $("#name-input").val();
  // var phone = $("#phone-input").val();
  let email = $("#email-input").val();
  let desc = $("#description-input").val();
  let data = {
     name : name,
    //  phone : phone,
     email : email,
     desc : desc
   };

  $.ajax({
    type: "POST",
    url : "https://db7qhpf6o5.execute-api.us-east-1.amazonaws.com/Prod/%7Bproxy+%7D",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

    
    success: function () {
      // clear form and show a success message
      alert("Sent!");
      document.getElementById("contact-form").reset();
  location.reload();
    },
    error: function () {
      // show an error message
      alert("Unsuccessful");
    }});
}




// window.onload = counter; //runs on window load
// $(document).ready(function() {


// });
