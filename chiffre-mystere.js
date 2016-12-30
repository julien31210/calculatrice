numMyst = (Math.floor((9)*Math.random()+1));
var essai = prompt("Devinez le nombre mystere, il est compris entre 0 et 9");
for(var i=1;i<=3;i++){
	if(essai<numMyst){
		alert("Le nombre mystere est plus grand!");
		var essai=prompt("essai encore");
	}

	if (essai>numMyst) {
		alert("Le nombre mystere est plus petit!");
		var essai=prompt("Devinez le chiffre mystere, il est compris entre 0 et 9");
	}

	if (essai==numMyst) {
		alert("Bravo! le nombre mystere etait bien" + numMyst);
		break;
	}
}