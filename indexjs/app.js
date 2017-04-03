function userCredentialsSave() {
         
    var fName = document.getElementById("fname");
    var lName = document.getElementById("lname");
    var table = document.getElementById("userCredentialsTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= fName.value;
    row.insertCell(2).innerHTML= lName.value;

}
function load() {
   
    console.log("Page load finished");

}