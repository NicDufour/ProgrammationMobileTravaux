function Exercice1()
{

	var choco = confirm("Aimez-vous le chocolat ?");
	if(choco == true)
	{
		var marque = prompt("Quel-est votre marque préféré ?");
	}
	else
	{
		alert("Surprise !");
	}
}

function Exercice2()
{
	var date = prompt("Quel est votre année de naissance ?");
	
	if ( date < 1930)
	{
		alert("Non spéciiée!");
	}
	else if ((date >= 1930) && (date <= 1945))
	{
		alert("Vétérans");
	}
	else if ((date >= 1946) && (date <= 1964))
    {
		alert("Baby-Boomers");
	}
	else if ((date >= 1965) && (date <= 1976))
	{
		alert("Génération X");
	}
	else if ((date >= 1977) && (date <= 1991))
	{
		alert("Génération Y");
	}
	else 
	{
		alert("Génération Z");
	}
}

function Exercice3()
{
	var tabFilms = new Array(3);
	tabFilms[0]="Surnaturel";
	tabFilms[1]="Arrows";
    tabFilms[2]="Resident Evils";

	var text;
	var choix = 0;
    choix = parseInt(prompt("Entrer un nombre compris entre 1 et 3"));
	
	switch(choix)
    {
		case 1:
		   alert("Le film choisi est: " + tabFilms[0]);
		   break;
		case 2:
		   alert("Le film choisi est: " + tabFilms[1]);
		   break;
		case 3:
		   alert("Le film choisi est: " + tabFilms[2]);
		   break;
		default:
		   alert("Choix invalide !");
	}
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom;
	var age;
	var majeur;
	var choix;
	
	nom = prompt("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	Age = parseInt(prompt("Quel est votre âge?"));
	
	if ((majeur == true) && (Age > 17))
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix = parseInt(prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters \n 3 - Les RTS \n 4 - Les MOBA"));
	
	switch(choix)
	{
		case 1: 
			alert(nom + " a " + Age + "ans et préfère les jeux de rôles!");
			break;
		case 2:
			alert(nom + " a " + Age + "ans et préfère les jeux de tirs!");
			break;
		case 3:
			alert(nom + " a " + Age + "ans et préfère les jeux de stratégies!");
			break;
		case 4:
			alert(nom + " a " + Age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + Age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
			break;
	}
}

function Exercice5()
{
	var nom;
    var sport = false;
    var frequance;
    var note;
    var intensite;
    var note2;
    var alimentation;
    var moyenne;

    nom = prompt("Comment vous appelez vous ?");
    alert("Bienvenue " + nom + " dans ce sondage sur la santée !");

    sport = confirm("Pratiquez-vous de l'activité physique ?");
    if (sport == true)
    {
        frequance = parseInt(prompt("Super ! Maintenant indiquer à quel fréquence en choisissant un nombre de 1 à 4 \n\n 1. Tous les jours \n 2. Plusieurs fois \n 3. Souvent \n 4.Parfois"));

        switch (frequance) 
        {
            case 1:
                note = 100;
                alert("Vous etez un exemple pour les autres !");
                break;
            case 2:
                note = 75;
                alert("WOW super !");
                break;
            case 3:
                note = 50;
                alert("C'est bien ne lacher pas !");
                break;
            case 4:
                note = 25;
                alert("C'est mieux que rien !");
                break;
            default:
                alert("Saisie invalide !");
                break;
        }

        intensite = parseInt(prompt("Évaluer le niveau d'intensité de 1 à 5 \n\n 1-Très intense \n2-Intense \n3-Normal \n4-Faible \n5-Très faible"));

        switch (intensite) {
            case 1:
                note2 = 100;
                alert("Vous etez un exemple pour les autres !");
                break;
            case 2:
                note2 = 75;
                alert("WOW super !");
                break;
            case 3:
                note2 = 50;
                alert("C'est bien ne lacher pas !");
                break;
            case 4:
                note2 = 25;
                alert("C'est mieux que rien !");
                break;
            case 5:
                note2 = 10;
                alert("Vous pourriez faire mieux !");
            default:
                alert("Saisie invalide !");
                break;
        }
		
		moyenne = ((note+note2)/2);
    }
    else
    {
        moyenne = 0;
        alert("Vous devriez vous y mettre immédiatement !");
    }

    alimentation = confirm("Avez-vous une bonne alimentation ?");

    if ((moyenne > 69) && (alimentation == true))
	{
        alert(nom + " à de très bonnes habitudes de vie !");
    }
    else if ((moyenne > 69) && (alimentation == false)) 
	{
        alert(nom + " à de très bonnes habitudes de vie, mais doit faire attention à son alimentation !");
    }
    else if ((moyenne < 70) && (alimentation == true)) 
	{
        alert(nom + " doit faire attention à ces habitudes de vie en fesant plus de sport !");
    }
    else 
	{
        alert(nom + " n'a pas de bonnes habitudes de vie !");
    }
}