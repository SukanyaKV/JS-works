function handleSubmit() {
    let myEmail = document.getElementById("email");
    let emailVal = myEmail.value;

    let password = document.getElementById("password");
    let passVal = password.value;



    // console.log("Email is");
    // let resultValue = document.getElementById("result");
    // resultValue.innerHTML = document.write("<p> Email is " + emailVal + "</p>");

    // let myPass = document.getElementById("password");
    // let passVal = myPass.value;

    // console.log("Password is");
    let resultValue = document.getElementById("result");

    resultValue.innerHTML = ("<p> Email is " + emailVal + " Password is " + passVal + "</p>");

}