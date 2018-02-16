function ajouterContenu(message, titre)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
	document.getElementById("noExercice").innerHTML += titre;
}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("noExercice").innerHTML = "";
	CptListe = 1;
}

//Exercice 1.
var tabNomUtilisateur = new Array();

function sans_accents(nom)
{
    var new_Name=nom.toLowerCase();
    
    nom = nom.replace(new RegExp(/[èé]/g),"e");
    nom = nom.replace(new RegExp(/[à]/g),"a");
    nom = nom.replace(new RegExp(/[ùü]/g),"u");
    nom = nom.replace(new RegExp(/[ï]/g),"i");

    return nom;
}

function Saisie_Exercice1()
{
	var saisie;
	var nomUtilisateur;

	saisie = prompt("Entrer le nom d'utilisateur").toLowerCase();
	nomUtilisateur = sans_accents(saisie);
	tabNomUtilisateur.push(nomUtilisateur);
}

function Supprimer_Exercice(tableau)
{
	tableau.splice(0, tableau.length);

}

function Afficher_Exercice1()
{
	var cpt;
	var result = "";

	for(cpt = 0; cpt < tabNomUtilisateur.length; cpt++)
	{
		result += ((cpt+1) + "." + tabNomUtilisateur[cpt] + "<br \>");
	}
    
	ajouterContenu(result, "Exercice 1: Liste des utilisateurs");
}

function Exercice1()
{
	viderContenu();

	var evens;

	evens = parseInt(prompt("Choisisser le type d'opération: \n\n1 - Nouvelle Saisie\n2 - Afficher Contenue \n3 - Supprimer toutes les saisies"));

	switch(evens)
	{
		case 1:
		  Saisie_Exercice1();
		  break;
		case 2:
		  Afficher_Exercice1();
		  break;
		case 3:
		  Supprimer_Exercice(tabNomUtilisateur);
		  break;
		default:
		  alert("Saisie Invalide !");
		  break;
	}
}



//Exercice 2
var tabUtilisateur = new Array();

function CodePermanent(_prenom, _nom, _date)
{
	var _id;

	_id = _nom.substring(0,3).toUpperCase() + _prenom.substring(0,1).toUpperCase() + _date + "00";

	return _id;

}

function Utilisateur(_id, _prenom, _nom, _date)
{
	this.id = _id;
	this.nom = _nom;
	this.prenom = _prenom;
	this.date = _date;
}

function Saisie_Exercice2()
{
	var id;
	var prenom;
	var nom;
	var date;

	prenom = prompt("Entrer le Prénom: ");
	nom = prompt("Entrer le nom: ");
	date = prompt("Entrer l'année de naissance (JJMMAAAA)");

	id = CodePermanent(prenom, nom, date);

	var _Utilisateur = new Utilisateur(id, prenom, nom, date);

    tabUtilisateur.push(_Utilisateur);
}

function Afficher_Exercice2()
{
	var cpt;
	var result = "";

	for(cpt = 0; cpt < tabUtilisateur.length; cpt++)
	{
		result += ((cpt+1) + ". ( " + tabUtilisateur[cpt].id + " )<br \>Prénom: " + tabUtilisateur[cpt].prenom + "<br \>Nom: " + tabUtilisateur[cpt].nom + "<br \>Date de naissance: " + tabUtilisateur[cpt].date + "<br \><br \>" );
	}
    
	ajouterContenu(result, "Exercice 2: Information des utilisateurs");
}

function Exercice2()
{


	viderContenu();

	var evens;

	evens = parseInt(prompt("Choisisser le type d'opération: \n\n1 - Nouvelle Saisie\n2 - Afficher Contenue \n3 - Supprimer toutes les saisies"));

	switch(evens)
	{
		case 1:
		  Saisie_Exercice2();
		  break;
		case 2:
		  Afficher_Exercice2();
		  break;
		case 3:
		  Supprimer_Exercice(tabUtilisateur);
		  break;
		default:
		  alert("Saisie Invalide !");
		  break;
	}
}




//Exercice 3
var CptListe = 1;

function getRandomCaraters() 
{
	var random;
	var autocollant;

    random = Math.floor(Math.random() * Math.floor(tabNomUtilisateur.length));

    autocollant = tabNomUtilisateur[random];

    if (autocollant == undefined)
    {
    	autocollant = "Null";
    }

    return autocollant;
}

function Voiture(marque, annee, couleur, kilometrage, autocollant) 
{
  this.marque = marque;
  this.annee = annee;
  this.couleur = couleur;
  this.kilometrage = kilometrage;
  this.autocollant = autocollant;
}

function Afficher_Exercice3(voiture)
{

	var result = "Voiture "+CptListe+" : <br \><br \>";

	for(var key in voiture)
	{
		result += (key + ": " + voiture[key] + "<br\>");
	}

	ajouterContenu(result, "");

	CptListe++;
}

function Exercice3()
{
	viderContenu();

	var voiture1 = new Voiture("Audi R8", 2016, "gris", 12365, getRandomCaraters());
	var voiture2 = new Voiture("Hunday Veloster", 2017, "rouge", 15000 , getRandomCaraters() );
	var voiture3 = new Voiture("Mazda 3", 2014, "Bleu", 9125, getRandomCaraters() );
	var voiture4 = new Voiture("Dodge Ram", 2015, "Noir", 10291, getRandomCaraters() );

	Afficher_Exercice3(voiture1);
	Afficher_Exercice3(voiture2);
	Afficher_Exercice3(voiture3);
	Afficher_Exercice3(voiture4);

	document.getElementById("noExercice").innerHTML += "Exercice 3: Liste des voitures";
}

function Contact(prenom, nom, numero, adresse) 
{
  this.prenom = prenom;
  this.nom = nom;
  this.numero = numero;
  this.adresse = adresse;
}

var tabContacts = [];

function Afficher_Exercice4()
{
	var cpt;
	var result = "";

	for(cpt = 0; cpt < tabContacts.length; cpt++)
	{
		result += (tabContacts[cpt].prenom + " " + tabContacts[cpt].nom + ", " + tabContacts[cpt].adresse + " (" + tabContacts[cpt].numero + ")<br \>" );
	}
    
	ajouterContenu(result, "Exercice 4: Annulaire Téléphonique");
}

function CreateObjects()
{
	tabContacts[0] = new Contact("Nicolas", "Dufour", "581-235-7819", "4095 rue salaberry");
	tabContacts[1] = new Contact("Karine", "Coulombe", "418-547-7819", "4095 rue salaberry");
	tabContacts[2] = new Contact("Samuel", "Laberge", "581-662-4512", "2342 rue pie XII");
	tabContacts[3] = new Contact("William", "Bolduc", "581-365-1251", "2165 rue de lachine");
	tabContacts[4] = new Contact("Steeve", "Dufour", "418-542-6027", "3025 rue Rembrant");
}

function Saisie_Exercice4()
{
	var prenom;
	var nom;
	var adresse;
	var numero;

	prenom = prompt("Entrer le prénom du contact: ");
	nom = prompt("Entrer le nom du contact");
	adresse = prompt("Entrer l'adresse du contact (Format: 0000 rue xxxxxxx):");
	numero = prompt("Entrer le numéro de téléphone du contact (Format: 000-000-0000)");

	var contact = new Contact(prenom, nom, numero, adresse);

	tabContacts.push(contact);
}

function Exercice4()
{
	viderContenu();
	CreateObjects();

	var evens;

	evens = parseInt(prompt("Choisisser le type d'opération: \n\n1 - Nouveau contact\n2 - Afficher Annulaire \n3 - Rénitialiser Anulaire"));

	switch(evens)
	{
		case 1:
		  Saisie_Exercice4();
		  break;
		case 2:
		  Afficher_Exercice4();
		  break;
		case 3:
		  Supprimer_Exercice(tabContacts);
		  break;
		default:
		  alert("Saisie Invalide !");
		  break;
	}
}


//Exercice 5

var tabTest = [];

function Test(Nom_1, Nom_2, result) 
{
  this.Nom_1 = Nom_1;
  this.Nom_2 = Nom_2;
  this.result = result;
  this.message = function(){
  	var rep;
  	if(this.result > 95)
  	{
  		rep = "Des vétérant du même !";
  	}
  	else if(this.result > 80)
  	{
  		rep = "Un des deux n’apprécie pas tout le temps le bon contenu";
  	}
  	else if(this.result > 59)
  	{
  		rep = "Il y a des chanses";
  	}
  	else
  	{
  		rep = "Pas compatible";
  	}

  	return rep;
  	};
}

function Random(min,max)
{
	return min+Math.floor(Math.random()*(max-min+1));
}

function Exercice5()
{
	var nom_1;
	var nom_2;
	var result;
	var found = -1;

	nom_1 = prompt("Entrer le nom de la première personne.");
	nom_2 = prompt("Entrer le nom de la seconde personne");
	result = Random(0,100);

	var test = new Test(nom_1, nom_2, result);

	found = tabTest.findIndex(i => ( ((i.Nom_1 === nom_1) || (i.Nom_1 === nom_2)) && ((i.Nom_2 === nom_1) || (i.Nom_2 === nom_2))));

	if(found == -1)
	{
		alert("Voici le résultat du test de " + test.Nom_1 + " et " + test.Nom_2 + "\nRésultat obtenue: " + test.result + "\n\n" + test.message());
		tabTest.push(test);
	}
	else
	{
		alert("Voici le résultat du test de " + tabTest[found].Nom_1 + " et " + tabTest[found].Nom_2 + "\nRésultat obtenue: " + tabTest[found].result + "\n\n" + tabTest[found].message());
	}	
}



