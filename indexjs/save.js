 wa$(document).ready(function(){
	$("#userCredentialsSave").click(function(){ 
		var firstName = $("#fname").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
             			"<td>"+firstName+"</td>"+
                       "<td>Last Name</td>"+
                      "<td>Role</td>"+
                      "<td>Manager</td>"+
                    "</tr>";
		$("#userCredentialsTable").append(insertRow);


	});
});


it