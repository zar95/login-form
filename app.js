let title = document.getElementById('title');
let signinbtn = document.getElementById('signinbtn');
let signupbtn = document.getElementById('signupbtn');
let namefield = document.getElementById('namefield');
let emailfield = document.getElementById('emailfield');
let passwordfield = document.getElementById('passwordfield');


signinbtn.onclick = function(){
    // namefield.style.display = "none";
    title.innerHTML = "sign in";
signupbtn.classList.add("disable");
signinbtn.classList.remove("disable")
}
signupbtn.onclick = function(){
    // namefield.style.display = "block";
    title.innerHTML = "sign up"
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable")
}
/*
var passwordinput = document.getElementById('passwordinput');
var eightcharacter = document.getElementById('eightcharacter');
var lower = document.getElementById('lower');
*/
const passwordInput = document.getElementById("passwordinput") 
const eyebtn = document.getElementById("eye")
const requirmentList = document.querySelectorAll(".requirment-list li");

const requirments = [
  {redex: /.{8,}/, index:0}, //atleast 9 characters
  {redex: /[0-9]/, index:1}, //number
  {redex: /[a-z]/, index:2},//small letters
  {redex: /.[A-Z]/, index:3}, //capital letters
  {redex: /.[^A-Za-z0-9]/, index:4}  //special character
]
passwordInput.addEventListener("keyup", (e) => {
  requirments.forEach(item => {
    const isValid = item.redex.test(e.target.value);
    const requirmentitems = requirmentList[item.index];
    if (isValid) {
      requirmentitems.firstElementChild.className = "fa-solid fa-check";  // Fix 1
    } else {
      requirmentitems.firstElementChild.className = "fa-solid fa-circle ";  // Fix 2
    }
  });
});  

eyebtn.addEventListener("click",()=>{
  //to change the type of input
passwordInput.type = passwordInput.type === "password" ? "text" : "password";
eyebtn.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
});