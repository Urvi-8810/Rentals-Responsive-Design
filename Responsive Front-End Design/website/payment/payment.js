function formvalidation() {
  var cardnum = document.forms["myForm"]["cardnum"].value;
  var cvv = document.forms["myForm"]["cvv"].value;
 var name = document.forms["myForm"]["namw"].value;
  if (cardnum == "1234567891234567" && cvv == "123" && name == "admin" ) {
    window.open("../index.html");
  //  return true;
  }
  else{
    alert("Please check your card details.");
  //  return false;
  }
}
