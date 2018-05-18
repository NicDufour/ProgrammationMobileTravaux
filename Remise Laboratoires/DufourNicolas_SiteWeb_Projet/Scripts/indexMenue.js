afficherFormConnection();
//Création des RegEx

function validerFormCcnection()
{
    var valid = true;
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(validerChampsConnection(user, password) == true)
    {       
        if(RegExUtilisateur.test(user) == false)
        {           
            valid = false;
        }
        /*if(RegExPassword.test(password) == false)
        {
            valid = false;
        }*/
    }
    return valid; 
}

function validerChampsConnection(user, password)
{
    var valid = true;

    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";

    if(user == "")
    {
        document.getElementById("username").style.backgroundColor = "red";
        valid = false;
    }
    if(password == "")
    {
        document.getElementById("password").style.backgroundColor = "red";
        valid = false;
    }    
    return valid;
}

function connection()
{
    var valid = true//validerFormCcnection();
    var trouve = trouverUtilisateur();

    if (valid == true)
    { 	 
    	 if(trouve == true)
    	 {
    	 	location.href="./PageWeb/PageWeb1.html";
    	 }
    	 else
    	 {
    	 	alert("Le nom d'utilisateur ou le mots de passe saisie est incorect !");
    	 }
    }
    console.log(valid);
    console.log(trouve);


}

function trouverUtilisateur()
{
	var trouve = false;

	for(var cpt = 0; cpt < tabUtilisateur.length; cpt++)
    {
    	if((tabUtilisateur[cpt].username == document.getElementById("username").value) && (tabUtilisateur[cpt].password == document.getElementById("password").value) )
    	{
    		trouve = true;
    		break;
    	}
    }
    return trouve;
}


var tabUtilisateur = [];

function Utilisateur(_username, _password, _nom, _prenom, _couriel, _numTel)
{
	this.username = _username;
	this.password = _password;
	this.nom = _nom;
	this.prenom = _prenom;
	this.couriel = _couriel;
	this.numTel = _numTel;
}

function inscription()
{
	var utilisateur = new Utilisateur(document.getElementById("username").value, document.getElementById("password").value, document.getElementById("Nom").value, document.getElementById("Prenom").value, document.getElementById("couriel").value, document.getElementById("numTel").value);
	tabUtilisateur.push(utilisateur);
}

function newLabel(type, name) {
    
    var nouveauLabel = document.createElement("label");
    nouveauLabel.htmlFor = type;
    nouveauLabel.innerHTML = name;


    return nouveauLabel;

}
function newinput(type, name, id, value, placeholder)
{
    var nouveauInput = document.createElement("input");
    nouveauInput.id = id;
    nouveauInput.name = name;
    nouveauInput.type = type;
    nouveauInput.value = value;
    nouveauInput.placeholder = placeholder;

    return nouveauInput;
}

function afficherFormConnection()
{
    var FormInscription = document.getElementById("FormulaireDynamique");
    
    FormInscription.innerHTML = "";

    document.getElementById("FormulaireDynamique").onsubmit = function() {
        connection();
        return false;
    };
    
    var nouveauLabel = document.createElement("label");
    var nouveauInput = document.createElement("input");
    var nouveauFieldset = document.createElement("fieldset"); 
    var nouveauParagraphe = document.createElement("p");
    var nouveauLabel = document.createElement("label");
    var nouvelleSection = document.createElement("div");


    FormInscription.appendChild(nouveauFieldset);
    nouveauFieldset.appendChild(newLabel("username", "Nom utilisateur", ""));
    nouveauFieldset.appendChild(newinput("text", "username", "username", "", "Ex: TimberedShelf26"));

    nouveauFieldset.appendChild(newLabel("password", "Mots de passe", ""));
    nouveauFieldset.appendChild(newinput("text", "password", "password", "", "Ex: 5654654856"));

    FormInscription.appendChild(document.createElement("fieldset"));

    FormInscription.lastChild.appendChild(newinput("submit", "submitBtn", "submitBtn", "Connection"));
}


function afficherFormInscription()
{
    var FormInscription = document.getElementById("FormulaireDynamique");
    FormInscription.innerHTML = "";

    document.getElementById("FormulaireDynamique").onsubmit = function() {
        inscription();
        console.log(tabUtilisateur);      
        return false;
    };
    
    var nouveauFieldset = document.createElement("fieldset");
    FormInscription.appendChild(nouveauFieldset);

    nouveauFieldset.appendChild(newLabel("LastName", "Nom"));
    nouveauFieldset.appendChild(newinput("text", "LastName", "Nom", "", "Ex: Nicolas"));

    nouveauFieldset.appendChild(newLabel("FirstName", "Prénom"));
    nouveauFieldset.appendChild(newinput("text", "FirstName", "Prenom", "", "Ex: Dufour"));

    nouveauFieldset.appendChild(newLabel("username", "Nom utilisateur", ""));
    nouveauFieldset.appendChild(newinput("text", "username", "username", "", "Ex: TimberedShelf26"));

    nouveauFieldset.appendChild(newLabel("Email", "Adresse Couriel"));
    nouveauFieldset.appendChild(newinput("email", "couriel", "couriel", "", "Ex: bob@hotmail.com"));

    nouveauFieldset.appendChild(newLabel("num", "Numéro de téléphone", ""));
    nouveauFieldset.appendChild(newinput("num", "numTel", "numTel", "", "Ex: 418 547-7819"));

    nouveauFieldset.appendChild(newLabel("password", "Mots de passe", ""));
    nouveauFieldset.appendChild(newinput("text", "password", "password", "", "Ex: 5654654856"));

    FormInscription.appendChild(document.createElement("fieldset"));
    FormInscription.lastChild.appendChild(newinput("submit", "submitInsBtn", "submitInsBtn", "S'inscrire"));
}


document.getElementById("login").addEventListener("click", function () {
    afficherFormConnection();
});

document.getElementById("subscribe").addEventListener("click", function () {
    afficherFormInscription();
});





