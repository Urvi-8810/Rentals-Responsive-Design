function formvalidation() {
  var uname = document.forms["myForm"]["uname"].value;
  var pwd = document.forms["myForm"]["pwd"].value;

  if (uname == "admin" && pwd == "12345") {
    window.open("../index.html");
  //  return true;
  }
  else{
    alert("Username or Password is wrong. Please enter the right one.");
  //  return false;
  }
}
