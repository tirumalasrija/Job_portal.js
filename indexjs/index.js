$(document).ready(function(){
	$("#userCredentialsSave").click(function(){ 
		var firstName = $("#fname").val();
		var lastname = $("#lname").val();
		var Role = $("#role").val();
		var Manager = $("#manager").val();


		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
             			"<td>"+firstName+"</td>"+
                       "<td>"+lastname+"</td>"+
                      "<td>"+Role+"</td>"+
                      "<td>"+Manager+"</td>"+
                    "</tr>";
		$("#userCredentialsTable").append(insertRow);

	});

	$("#metaDataAdd").click(function(){ 
		var Role = $("#metarole").val();
		var Status = $("#status").val();

		//validate all feilds
		
		var insertRow = "<tr>"+
             		"<td> <input type='checkbox' name='myCheckbox' value='1'/></td>"+
                      "<td>"+Role+"</td>"+
                      "<td>"+Status+"</td>"+
                    "</tr>";
		$("#metaDataAddTable").append(insertRow);
	});
		$(".delete").on('click', function() {
	  var checked = jQuery('input:checkbox:checked').map(function () {
	    return this.value;
	}).get();
	$('input:checkbox:checked').parents("tr").remove();
	});

	$("#countryAdd").click(function(){ 
		var country = $("#country").val();

		var insertRow = "<tr>"+
             			"<td>"+country+"</td>"+
                    "</tr>";
		$("#countryAddTable").append(insertRow);

	});

	$("#jobpositionAdd").click(function(){ 
		var jobposition = $("#jobposition").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
                      "<td>"+jobposition+"</td>"+
                    "</tr>";
		$("#jobpositionTable").append(insertRow);
	});

	$("#joblAdd").click(function(){ 
		var jobl = $("#jobl").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
                      "<td>"+jobl+"</td>"+
                    "</tr>";
		$("#joblTable").append(insertRow);
	});
//jobloction
	$("#skillAdd").click(function(){ 
		var skill = $("#skill").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
             			"<td>"+skill+"</td>"+
                    "</tr>";
		$("#skillTable").append(insertRow);
	});

	$("#compensationAdd").click(function(){ 
		var compensation = $("#compensation").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
             			"<td>"+compensation+"</td>"+
                    "</tr>";
		$("#compensationTable").append(insertRow);
	});
	
	$("#pbAdd").click(function(){ 
		var pb = $("#pb").val();
		//validate all feilds
		//insert to table
		var insertRow = "<tr>"+
             			"<td>"+pb+"</td>"+
                    "</tr>";
		$("#pbTable").append(insertRow);
	});

	$("#WorkAdd").click(function(){ 
		var events = $("#events").val();
		var role = $("#role").val();
		var Role = $("#status").val();

		var insertRow = "<tr>"+
             			"<td>"+events+"</td>"+
                       "<td>"+role+"</td>"+
                      "<td>"+status+"</td>"+
                    "</tr>";
		$("#workTable").append(insertRow);

	});

	$("#requirementAdd").click(function(){ 
		var jobp = $("#jobp").val();
		

		var insertRow = "<tr>"+
             			"<td>"+jobp+"</td>"+                 
                    "</tr>";
		$("#requirementTable").append(insertRow);

	});

	$("#venAdd").click(function(){ 
		var input = $( "form input:checkbox" );
		var venr = $("#venr").val();
		var insertRow = "<tr>"+
             			"<td>"+venr+"</td>"+
                    "</tr>";
		$("#venTable").append(insertRow);

	});
});

