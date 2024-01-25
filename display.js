
var rootRef= firebase.database().ref().child("Student/");
	rootRef.once("value").then(snap =>{
		var rr=snap.val();
		for(i in rr){
			var iid = rr[i].id;
			var nname= rr[i].name;
			var ccourse= rr[i].course;
			var aage = rr[i].age;
		
			$("#dataTable1").append(
				'<tr><td>'+ iid +'</td><td>'+nname+'</td><td>'+ ccourse +'</td><td>'+ aage +
				'</td><td align="center"><img src="images/edit.png" height="30px" width="30px" onclick='+
				"'"+'edit("'+iid+'");'+"'"+'></img></td><td align="center"><img src="images/del.png" height="30px" width="30px" onclick='+"'"+
				'del("'+iid+'");'+"'"+'></img></td></tr>');
		}
});
	
function addDatabase(){
	alert("Confirm");
		stid = document.getElementById("SId").value;
		stname = document.getElementById("SName").value;
		stcourse = document.getElementById("SCourse").value;
		stage = document.getElementById("SAge").value;
		stuname = document.getElementById("SUname").value;
		stpw = document.getElementById("SPw").value;
		
		firebase.database().ref('/Student/'+stid).set
			({
				id:stid,
				name: stname,
				course:stcourse,
				age: stage,
				username: stuname,
				password: stpw,
			});
			alert('Info submitted successfully!'); 
}	


	
var repID;
function edit(x){
	alert("edit");
	var ref = firebase.database().ref("Student/"+x);
	ref.once("value")
	.then(function(snapshot) {
		if(snapshot.exists()== true){
			
		var rootRef= firebase.database().ref("Student/"+x);
		rootRef.on("value", snap =>{
		repID = snap.child("id").val();
		document.getElementById("SId").value = snap.child("id").val();
		document.getElementById("SName").value = snap.child("name").val();
		document.getElementById("SAge").value = snap.child("age").val();
		document.getElementById("SCourse").value = snap.child("course").val();
		document.getElementById("SUname").value = snap.child("username").val();
			});
		}
	});

}

function editDatabase(){
		
		alert('Update'); 
		stid = document.getElementById("SId").value;
		stname = document.getElementById("SName").value;
		stcourse = document.getElementById("SCourse").value;
		stage = document.getElementById("SAge").value;
		stuname = document.getElementById("SUname").value;
		stpw = document.getElementById("SPw").value;
		alert(repID + ' ' + stid);
		
		if(repID == stid){
			alert('Confirmed');
			firebase.database().ref('/Student/'+stid).update({
				id:stid,
				name: stname,
				course:stcourse,
				age: stage,
				username: stuname,
				password: stpw,
			});
			alert('Record Successfully Updated!');	
		}else{
			
			
		}	
}
function checkDatabase(){	
		alert('Checking Data'); 
		stid = document.getElementById("SId").value;
		stname = document.getElementById("SName").value;
		stcourse = document.getElementById("SCourse").value;
		stage = document.getElementById("SAge").value;
		stuname = document.getElementById("SUname").value;
		stpw = document.getElementById("SPw").value;
		alert(repID + ' ' + stid);
		
		if(repID == stid){
			alert('Checking in Progress');
			firebase.database().ref('/Student/'+stid).on('value',function(snapshot){
				document.getElementById("SId").value = snap.child("id").val().id;
				document.getElementById("SName").value = snap.child("name").val().name;
				document.getElementById("SAge").value = snap.child("age").val().age;
				document.getElementById("SCourse").value = snap.child("course").val().course;
				document.getElementById("SUname").value = snap.child("username").val().username
				document.getElementById("SPw").value.password;
			alert('Student already exist!')
			});
			alert('Checking of Data Confirmed!');	
		}else{
			var ref = firebase.database().ref("Student/"+stid);
			ref.once("value")
			.then(function(snapshot) {
				if(snapshot.exists()== true){
					alert('Student does not Exist!')
				}else{
					var ref = firebase.database().ref("Student/"+stid);						
					firebase.database().ref('/Student/'+stid).set
					({
						id:stid,
						name: stname,
						course:stcourse,
						age: stage,
						username: stuname,
						password: stpw,
					});
					alert('Checking of Data Confirmed!');
				}		
				
			});
		}
		
}


function editwithnewid(x){	
	var rootRef= firebase.database().ref().child("Student/"+x);
		 rootRef.remove();
}

function del(x){
	alert("Delete Data?");
	var ans= window.confirm("Are you sure you want to delete customer?")
		if(ans== true){
	  	 var rootRef= firebase.database().ref().child("Student/"+x);
		 rootRef.remove();
	     window.alert("Successfully Remove!");
	     location.reload();

        }
};

var SeId
function searchDatabase(){
	steid = document.getElementByID('SeId').value;
	firebase.database().ref("Student/"+steid).set
	
}





				