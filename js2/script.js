function handleSubmit() {
    let myName = document.getElementById("name");
    let nameVal = myName.value;

    let myPname = document.getElementById("pname");
    let pnameVal = myPname.value;

    let locName = document.getElementById("loc");
    let locVal = locName.value;

    let desigName = document.getElementById("desig");
    let desigVal = desigName.value;

    let compName = document.getElementById("comp");
    let compval = compName.value;


    document.write("<p class= 'id'> My Name is " + nameVal + " and my Partner's name is  " + pnameVal + " I stay in " + locVal + " I am working as a " + desigVal + " in " + compval + "</p>");
}