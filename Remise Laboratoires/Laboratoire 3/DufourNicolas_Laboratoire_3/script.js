function ajouterContenu(message)
{
    document.getElementById("resultat").style.fontSize = "40px";
	document.getElementById("resultat").innerHTML += message + "<br/>";

}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat").style.textAlign = "center";
}

//Exercice 1.
function Exercice1()
{
	
	
    viderContenu();

	var Nbre;
	var Total;
	var message;
	
	Nbre = parseInt(prompt("Entrer un nombre: "));
	viderContenu()
	
	for (var cpt = 0; cpt <= 12; cpt++)
	{
		
		Total = Nbre * cpt;
		message = cpt + " X " + Nbre + " = " + Total;
		ajouterContenu(message);
	}
}

//Execice 2.

function Exercice2()
{
	var Nbre_1;
	var Nbre_2;
	var arret;
	var ope;
	var rep;
	
	do
	{
		Nbre_1 = prompt("Enter un premier Nombre: ");
	    Nbre_2 = prompt("Entrer un deuxième nombre: ");
		ope = prompt("Coisisser le type d'operation: ");
		
		if (testNbre(Nbre_1, Nbre_2) == true)
		{
			Nbre_1 = parseInt(Nbre_1);
			Nbre_2 = parseInt(Nbre_2);
			switch(ope)
			{
				case "+":
				    Rep = addition(Nbre_1, Nbre_2);
					break;
				case "-":
				    Rep = soustraction(Nbre_1, Nbre_2);
					break;
				case "*":
				    Rep = multiplication(Nbre_1, Nbre_2);
					break;
				case "/":
				    Rep = division(Nbre_1,Nbre_2);
					break;
				default:
				    alert("Opérateur invalide !");
					break;
			}
		}
		else
		{
			alert("Saisie invalide !");
		}
		alert("Le total est de : " + Rep);
		arret = confirm("Souhaitez-vous continuer ?");
		
	}while(arret == true);
	
}

function addition(Nbre_1, Nbre_2)
{
	return Nbre_1 + Nbre_2;
}

function soustraction(Nbre_1, Nbre_2)
{
	return Nbre_1 - Nbre_2;
}

function multiplication(Nbre_1, Nbre_2)
{
	return Nbre_1 * Nbre_2;
}

function division(Nbre_1,Nbre_2)
{
	return Nbre_1 / Nbre_2;
}

function testNbre(Nbre_1, Nbre_2)
{
	var confirm_1 = isFinite(Nbre_1);
	var confirm_2 = isFinite(Nbre_2);
	
	if ((confirm_1 == true) && (confirm_2 == true))
	{
		return true;
    }
	else
	{
		return false;
	}
}

//Exercice 3

function Exercice3()
{
	var tabEtudiant = new Array();
	var continuer = true;
	var nom = "";
	var check;

	alert("Binvenue dans se programme de saisie de note !");
	nom = prompt("Entrer le nom de l'étudiant:");

	while(continuer == true)
	{
		var note = 0;

	    note = parseInt(prompt("Entrer la note sur 100:"));
		tabEtudiant.push(note);
		continuer = confirm("Souhaitez-vous entrer une nouvelle note ?");

	}
	alert("La saisie des notes est terminé !");

	var echec = tabEtudiant.filter(_echec);
	var reussite = tabEtudiant.filter(_reussite);

	check = confirm("Voulez-vous appliquer le bonus de 10% sur les echec pour l'effort donné");

	if (check == true)
	{
		echec = echec.map(function(num) {
        return (num + (num*0.10));
        });
	}

	alert("Affichage de toutes les résultats\n-------------------------------------------\nLes notes sous la moyenne:   " + echec + "\nLes notes au dessus de la moyenne:   " + reussite + "\n\n\n");
}

function _echec(resultat)
{
	return resultat < 60;
}

function _reussite(resultat)
{
	return resultat >= 60;
}

//Exercice 4

function Exercice4()
{
	viderContenu();

	var lignes = 0;
	var result = "";
	var etoile = "*";

	document.getElementById("resultat").style.textAlign = "left";

	lignes = parseInt(prompt("Entrer le nombre de lignes: "));

	for(cpt = 1; cpt <= lignes; cpt++)
	{
		result += (("*".repeat(cpt)) + "<br />");
	}

	ajouterContenu(result);


}

function Exercice5()
{
	viderContenu();

	var lignes = 0;
	var result = "";
	var etoile = "*";

	lignes = parseInt(prompt("Entrer le nombre de lignes: "));

	for(var cpt = lignes+1; cpt >= 0; cpt = cpt-2)
	{
		result += (("*".repeat(cpt)) + "<br />");
	}

	ajouterContenu(result);


}