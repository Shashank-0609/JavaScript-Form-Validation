//this function is used to check the name of the user 

function checkName(){
    const name = document.getElementById("name").value.trim();
    if(name.length<5){
        window.alert("Name must be at least 5 characters long.");
        return false;
    } 
    else{
        return true;
    }
}

//this function is used to check user's emaiID

function checkEmail(){
    const mail = document.getElementById("mailID").value.trim();
    if(!mail.includes("@")){
        window.alert("Email should include @ ");
        return false;
    }
    else{
        return true;
    }
}

//this function is used to check phone number of the user

function checkPhone(){
    const number = document.getElementById("number").value.trim();
    const errorPhone = document.getElementById("errorPhone")
    if(number === 123456789){
        errorPhone.textContent = "* Phone number cannot be 123456789";
        return false;
    }
    else if(number.length>10 || number.length<10){
        errorPhone.textContent = "* Phone number must be 10 digits"
        return false
    }
    else if(isNaN(number)){
        errorPhone.textContent = "* Phone number must be numeric"
    }
    else{
        errorPhone.textContent = "";
        return true;
    }
}

//this function is used to check the password entered by user

function checkPassword(){
    let password = document.getElementById("currentPassword").value.trim();
    const username = document.getElementById("name").value.trim().toLowerCase();
    if(password === "password")
    {
        window.alert("Enter a valid password")
        return false;
    }
    else if(password === username){
        window.alert("Password cannot be the username");
        return false;
    }
    else if(password.length<8){
        window.alert("Password should not be less thant 8 characters, should include atleast one UpperCase and one special character");
        return false;
    }
    else{
        return true;
    }
}

//this function is for confirm password 

function checkConfirmPassword(){
    let password = document.getElementById("currentPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    const Epw = document.getElementById("EPw");
    if(password !== confirmPassword){
        Epw.textContent = "* Password and Confirm Password should match.";
        return false;
    }
    else{
        Epw.textContent = "";
        return true;
    }
}

//this function is used to validate whole form

function checkForm(){
    const nameChecked= checkName();
    const emailChecked = checkEmail();
    const phoneChecked = checkPhone();
    const passwordChecked = checkPassword();
    const confirmPasswordChecked = checkConfirmPassword();

    if(nameChecked && emailChecked && phoneChecked && passwordChecked && confirmPasswordChecked){
        window.alert("form submitted successfully");
        return true;
    }
    else{
        window.alert("please correct the errors in the form");
        return false;
    }
}