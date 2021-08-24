

/** Name:           SADDAM FAISAL
 Student Number: 118406198
 Email:          sfaisal6@myseneca.ca */
/** Add any JavaScript you need to this file. */
var buttons = document.getElementsByClassName("btn");
if (buttons.length != 0) {
  buttons[0].addEventListener('click', function () {

    this.className = "selectedCategory btn";
    buttons[1].className = "unselectedCategroy btn";

    document.getElementById("men").style.display = "block";
    document.getElementById("women").style.display = "none";

  })
  buttons[1].addEventListener('click', function () {

    this.className = "selectedCategory btn";
    buttons[0].className = "unselectedCategroy btn";

    document.getElementById("men").style.display = "none";
    document.getElementById("women").style.display = "block";


  })
}
else {

  document.getElementById("submitt").addEventListener("click", function () {
    var fname = document.getElementById("fn");
    var lname = document.getElementById("ln");
    var email = document.getElementById("ea");
    var address = document.getElementById("ad");
    var city = document.getElementById("cy");
    var postalCode = document.getElementById("pc");
    var phoned = document.getElementById("phoned");
    var textarea = document.getElementById("textArea");
    var orderNumber = document.getElementById("orderNumberinput");
    var flag = true;
    if (fname.value == "" && lname.value == "" && email.value == "" && address.value == "" && city.value == "" && postalCode.value == "" && textarea.value == "") {
      window.alert("please fill out the form");
      flag = false;
    }
    else {
      if (fname.value == "") {
        window.alert("please put your first name")
        flag = false;
      }
      if (lname.value == "") {
        window.alert("please put your last name")
        flag = false;
      }
      if (email.value == "") {
        window.alert("please put your email")
        flag = false;
      }
      if (address.value == "") {
        window.alert("please put your address")
        flag = false;
      }
      if (city.value == "") {
        window.alert("please put your city")
        flag = false;
      }
      if (postalCode.value == "") {
        window.alert("please put your postalCode")
        flag = false;
      }
      if (phoned.value == "") {
        window.alert("please put your phone")
        flag = false;
      }

      if (document.getElementById("orderProblem").checked && orderNumber.value == "") {
        window.alert("please put your problem number")
        flag = false;
      }

      if (textarea.value == "") {
        window.alert("please write your message")
        flag = false;
      }

    }
    if (flag) {
      document.getElementById("myform").submit();
    }
  });
  var inputs = document.getElementsByTagName("input"),
    x = inputs.length;
  while (x--)
    if (inputs[x].type === "radio")
      inputs[x].addEventListener("change", function () {
        if (this.value == "orderProblem") {
          document.getElementById("orderNumber").style.display = "block"
        }
        else {
          document.getElementById("orderNumber").style.display = "none"
        }
        console.log("Checked: " + this.checked);
        console.log("Value: " + this.value);
      }, 0);
}

