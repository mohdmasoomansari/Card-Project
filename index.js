if(sessionStorage.length===0){
let fname = window.prompt("Please enter first name");
let lname = window.prompt("Please enter last name");
let con = window.prompt("Please enter country");
let phone = window.prompt("Please enter phone number");
let state = window.prompt("Please enter state");
let city = window.prompt("Please enter city");
let village = window.prompt("Please enter village");

sessionStorage.setItem("fname", fname);
sessionStorage.setItem("lname", lname);
sessionStorage.setItem("country", con);
sessionStorage.setItem("phone", phone);
sessionStorage.setItem("state", state);
sessionStorage.setItem("city", city);
sessionStorage.setItem("village", village);

document.getElementById("fname").textContent = sessionStorage.getItem("fname");
document.getElementById("lname").textContent = sessionStorage.getItem("lname");
document.getElementById("con").textContent = sessionStorage.getItem("country");
document.getElementById("phno").textContent = sessionStorage.getItem("phone");
document.getElementById("state").textContent = sessionStorage.getItem("state");
document.getElementById("city").textContent = sessionStorage.getItem("city");
document.getElementById("vill").textContent = sessionStorage.getItem("village");

}else{
document.getElementById("fname").textContent = sessionStorage.getItem("fname");
document.getElementById("lname").textContent = sessionStorage.getItem("lname");
document.getElementById("con").textContent = sessionStorage.getItem("country");
document.getElementById("phno").textContent = sessionStorage.getItem("phone");
document.getElementById("state").textContent = sessionStorage.getItem("state");
document.getElementById("city").textContent = sessionStorage.getItem("city");
document.getElementById("vill").textContent = sessionStorage.getItem("village");

}