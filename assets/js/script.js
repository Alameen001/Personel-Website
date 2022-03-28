let id=(id)=>document.getElementById(id);
  let classes=(classes)=> document.getElementsByClassName(classes)

 let username= id("username"),
 password= id("password"),
 form=id("form"),
 errorMsg=classes("error");

 form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  engine(username, 0, "Username cannot be blank");
  engine(password, 1, "Password cannot be blank");
 });
 
 let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } 
 }


password.addEventListener('input',()=>{
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if(password.value.match(passPattern)){
    errorMsg[1].innerHTML = ""; 
    password.style.border = "2px solid green";

  }else{

    password.style.border = "2px solid red";
    errorMsg[1].innerHTML = "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."; 
  }
});

username.addEventListener('input',()=>{
  var nameRegex =  /^[a-zA-Z\-]+$/;

  if(username.value.match(nameRegex)){

    errorMsg[0].innerHTML = "";
    username.style.border = "2px solid green";
  }else{
    errorMsg[0].innerHTML = "Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
    username.style.border = "2px solid red";
    
  }
});