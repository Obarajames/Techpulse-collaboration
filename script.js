//dark mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
//dropdown menu
const myMenu = document.getElementById('sub-menu');

function display(){
    myMenu.classList.toggle("open-menu");
}

// Get user input values of the user from the input
 
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let passWord = document.getElementById('password');
//get the data from local storage.
window.addEventListener("load",()=> {
    firstName.value =localStorage.getItem("firstName");
    lastName.value =localStorage.getItem("lastName");
    email.value =localStorage.getItem("email");
    passWord.value =localStorage.getItem("passWord");
})
//storing the data to local storage
firstName.addEventListener("change",() =>{
    //this the input value
    const data = firstName.value;
    localStorage.setItem("firstName",data)
})
lastName.addEventListener("change",() =>{
    //this the input value
    const data = lastName.value;
    localStorage.setItem("lastName",data)
})
email.addEventListener("change",() =>{
    //this the input value
    const data = email.value;
    localStorage.setItem("email",data)
})
passWord.addEventListener("change",() =>{
    //this the input value
    const data = passWord.value;
    localStorage.setItem("passWord",data)
})