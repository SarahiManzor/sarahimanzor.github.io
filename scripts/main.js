var login = document.getElementById("login");

login.addEventListener("click", checkPassword);

function checkPassword(){
	var password = prompt("Enter the password if you wish to play");
	if(password == "ManzorIsTheBest"){
		document.location.href = "CannonCraze.html";
	}else{
		alert("Wrong password bud");
	}
}