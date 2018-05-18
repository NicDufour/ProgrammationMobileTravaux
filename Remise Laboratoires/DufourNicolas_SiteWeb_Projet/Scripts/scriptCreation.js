//Validation des champs dans les formulaires

//Création des RegEx

remplirListeDeroulantes();

document.getElementById("divinite").addEventListener("change", function () {
    remplirAlignement();
});
document.getElementById("race").addEventListener("change", function () {
    remplirTaille();
});

document.getElementById("Taille").addEventListener("blur", function () {
    verifierTaille();
}); 
document.getElementById("Poid").addEventListener("blur", function () {
    verifierPoid();
});
document.getElementById("genCarac").addEventListener("click", function () {
     genererStats();
});

function calculerTotalCarac(carac)
{
    var arrayNum = carac.split(",");
    var total = 0;

    for(var j = 0; j < 3; j++)
    {
        total += parseInt(arrayNum[j]);
        j++
    }

    return total;
}


function genererStats()
{
    var competences = verifierCompetances();
    if(competences == false)
    {
        alert("Vous devez choisir les compétences pour un maximum de trois");
    }
    else
    {
        var nomPerso = document.getElementById("divinite").value;
        var db = JSON.parse(localStorage.getItem("DB"));
        var idPerso = idPersonnage();

        var force = genNbreAlea();
        var dext = genNbreAlea();
        var cons =  genNbreAlea();
        var intel = genNbreAlea();
        var sag = genNbreAlea();
        var car = genNbreAlea();

        fakeDB.ajouterOuModifierCaracteristiques(idPerso, calculerTotalCarac(force), calculerTotalCarac(dext), calculerTotalCarac(cons), calculerTotalCarac(intel), calculerTotalCarac(sag), calculerTotalCarac(car), calculerTotalCarac(competences));
        console.log(db.tblCaracteristiques);

        document.getElementById("force").value = force;
        document.getElementById("dext").value = dext;
        document.getElementById("const").value = cons;
        document.getElementById("intel").value = intel;
        document.getElementById("sag").value = sag;
        document.getElementById("char").value = car;
        document.getElementById("genCarac").disabled = "disabled";

        calculerBonus(idPerso);
        caracClasse();    
    }
}

function caracClasse()
{
    var info = document.getElementById("classe").value;
    var db = JSON.parse(localStorage.getItem("DB"));   

    var tabClasse = db.tblClasse;

     for (var j = 0; j < tabClasse.length; j++)
    {
        var objet = tabClasse[j];
        if(objet.Nom == info)
        {
            document.getElementById("ref").value = objet.BonusReflexe;
            document.getElementById("vig").value = objet.BonusVigueur;
            document.getElementById("vol").value = objet.BonusVolonte;
            break;
        }
    }

}

function listeArmes()
{
    var db = JSON.parse(localStorage.getItem("DB")); 
    var selec = document.getElementById("arme");
    var list = db.tblArme;
    var cpt2 = 0;
    for (var j = 0; j < list.length; j+=3)
    {
          var objetDivinite = list[j];
          var nom = objetDivinite.Nom;
          selec.options.length = ((list.length)/3);

          selec.options[cpt2].value = nom;
          selec.options[cpt2].text = nom;
          cpt2++;
    }
}

function listeArmures()
{
    var db = JSON.parse(localStorage.getItem("DB")); 
    var selec = document.getElementById("armure");
    var list = db.tblArmure;
    var cpt3 = 0;
    for (var j = 0; j < list.length; j+=3)
    {
          var objetDivinite = list[j];
          var nom = objetDivinite.Nom;
          selec.options.length = ((list.length)/3);

          selec.options[cpt3].value = nom;
          selec.options[cpt3].text = nom;
          cpt3++;
    }
}


var couleur;
var couleur2;
function couleurs()
    {
        couleur = document.getElementById("coloryeux").value;
        couleur2 = document.getElementById("colorcheveux").value;
        document.getElementById("hexadecimalyeux").value = couleur;
        document.getElementById("hexadecimalcheveux").value = couleur2;       
    }
    
    function hexa()
    {
        var hexa = document.getElementById("hexadecimalyeux").value;
        var hexa2 = document.getElementById("hexadecimalcheveux").value;
        document.getElementById("coloryeux").value= hexa;
        document.getElementById("colorcheveux").value= hexa2;                
     }

function calculerBonus(idPerso)
{

    var bonus = fakeDB.bonusHabilete(idPerso);
    console.log(bonus);

    document.getElementById("bforce").value = bonus.Charisme;
    document.getElementById("bdext").value = bonus.Constitution;
    document.getElementById("bconst").value = bonus.Dexterite;
    document.getElementById("bintel").value = bonus.Force;
    document.getElementById("bsag").value = bonus.Intelligence;
    document.getElementById("bchar").value = bonus.Sagesse;
}

function idPersonnage()
{
    var id;
    var db = JSON.parse(localStorage.getItem("DB"));
   

    if(db.tbltblPersonnage == undefined)
    {
        id = 0;

    }
    else
    {
        var tabPersonnages = db.tbltblPersonnage;
        id = db.tabPersonnage.length;
    }
    
    return id;
}

function verifierCompetances()
{
    var competance = document.getElementsByName("compet");
    var tabCompet = [];
    var caracCompet = "";

    for(var item of competance)
    {
        if(item.checked == true)
        {
            tabCompet.push(item.value);
        }
    }

    if(tabCompet.length > 3 || tabCompet.length == 0)
    {
        return false;
    }
    else
    {
        
        caracCompet += tabCompet[0];

        for(var i = 1; i < tabCompet.length; i++)
        {
            caracCompet += "|" + tabCompet[i];
        }       

        return caracCompet;  
    }

    
}



function genNbreAlea()
{
    var random1 = Math.floor(Math.random() * Math.floor(6));
    var random2 = Math.floor(Math.random() * Math.floor(6));
    var random3 = Math.floor(Math.random() * Math.floor(6));

    return random1.toString() + "," + random2.toString() + "," +  random3.toString();
}



function remplirListeDeroulantes()
{
    var db = JSON.parse(localStorage.getItem("DB"));

	//Remplir liste des divinitées
	remplirListe(document.getElementById("divinite"), fakeDB.listerDivinites());

	//Remplir liste des Classes
	remplirListe(document.getElementById("classe"), fakeDB.listerClasses());

	//Remplir liste Races
	remplirListe(document.getElementById("race"), fakeDB.listerRaces());
	remplirAlignement();
    remplirTaille();
    couleurs();
    listeArmes();
    listeArmures()
}

function remplirListe(idSelected, list)
{
	
	

	for (var j = 0; j < list.length; j++)
    {
    	  var objetDivinite = list[j];
    	  var nom = objetDivinite.Nom;
    	  idSelected.options.length = list.length;

    	  idSelected.options[j].value = nom;
    	  idSelected.options[j].text = nom;
    }
}

function remplirAlignement()
{
	var info = document.getElementById("alignement");
	info.innerHTML = "";

	var db = JSON.parse(localStorage.getItem("DB"));
	var selectValue = document.getElementById("divinite").value;
	var tblAlignement = db.tblAlignement;

	 var tabDivinite = fakeDB.listerDivinites();

	 for (var j = 0; j < tabDivinite.length; j++)
    {
    	var divinite = tabDivinite[j];
    	if(divinite.Nom == selectValue)
    	{
    		var alig = divinite.Alignement
    		info.value = tblAlignement[alig].Morale;
    		break;
    	}

    }
}
function remplirTaille()
{
	var race = document.getElementById("race").value;
	var catTaille = document.getElementById("catTaille");
	var db = JSON.parse(localStorage.getItem("DB"));
	var tabRaces = db.tblRace;
    
	for (var j = 0; j < tabRaces.length; j++)
    {
    	var selectRace = tabRaces[j];
    	if(selectRace.Nom == race)
    	{
    		var taille = selectRace.CategorieTaille;
            var tailleMax= db.tblCategorieTaille[taille].TailleMaxCm;
            var tailleMin= db.tblCategorieTaille[taille].TailleMinCm; 
            var PoidsMax = db.tblCategorieTaille[taille].PoidsMaxKg;
            var PoidsMin = db.tblCategorieTaille[taille].PoidsMinKg; 
    		catTaille.value = db.tblCategorieTaille[taille].Nom;
            document.getElementById("Taille").placeholder = "Entre: " +  tailleMin + " CM et " + tailleMax + " CM";
            document.getElementById("Poid").placeholder = "Entre: " +  PoidsMin + " KG et " + PoidsMax + " KG";

            var tabArme = db.tblArme;
            var tabArmure = db.tblArmure;
            var tabBonArme = [];
            var tabBonArmure = [];


            for (var j = 0; j < tabArme.length; j++)
            {
                var SelectArme = tabArme[j];
                if(SelectArme.CategorieTaille == taille)
                {
                    tabBonArme.push(SelectArme.Nom);
                }          
            }
            for (var j = 0; j < tabArmure.length; j++)
            {
                var SelectArme = tabArmure[j];
                if(SelectArme.CategorieTaille == taille)
                {
                    tabBonArmure.push(SelectArme.Nom);
                }          
            }
    		break;
    	}
    }


}

function verifierTaille()
{
    var categtaille= document.getElementById("catTaille").value;
    var taille= document.getElementById("Taille").value;
    var db = JSON.parse(localStorage.getItem("DB"));
    for(var cpt=0; cpt<=2;cpt++)
    {
        if (categtaille==db.tblCategorieTaille[cpt].Nom)
        {
            var tailleMax= db.tblCategorieTaille[cpt].TailleMaxCm;
            var tailleMin= db.tblCategorieTaille[cpt].TailleMinCm;  
        }   
    }
    if (taille< tailleMin || taille > tailleMax)
    {
        alert("La taille doit être conprise entre les valeurs correctes");
        document.getElementById("Taille").value = "";
    }
    
}
function verifierPoid()
{
    var categtaille= document.getElementById("catTaille").value;
    var poid = document.getElementById("Poid").value;
    var db = JSON.parse(localStorage.getItem("DB"));
    for(var cpt=0; cpt<=2;cpt++)
    {
        if (categtaille==db.tblCategorieTaille[cpt].Nom)
        {
            var PoidsMax = db.tblCategorieTaille[cpt].PoidsMaxKg;
            var PoidsMin = db.tblCategorieTaille[cpt].PoidsMinKg;  
        }   
    }
    if (poid< PoidsMin || poid > PoidsMax)
    {
        alert("Le poid doit être conpris entre les valeurs correctes");
        document.getElementById("Poid").value;
    }
}

/*--------------------------------------------------------------------------------------
Partie de création du personnage.
---------------------------------------------------------------------------------------*/



document.getElementById("submitBtn").addEventListener("click", function () {
     creerPerso();
     return false;
});



function trouverId(tab, valeur)
{
var id;

   for (var cpt = 0; cpt < tab.length; cpt++)
    {
        if(tab[cpt].Nom == valeur)
        {
            id = cpt;
            break;
        }
    }
    return id;
}

function trouverIdAlignement(tab, valeur)
{
var id;

   for (var cpt = 0; cpt < tab.length; cpt++)
    {
        if(tab[cpt].Morale == valeur)
        {
            id = cpt;
            break;
        }
    }
    return id;
}

function creerIdJouer()
{
    var user = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;
    var idJoueur = fakeDB.creerJoueur(user, pwd);

    return idJoueur;
}

 

function creerPerso()
{
    var db = JSON.parse(localStorage.getItem("DB"));


    //Création des l'ID des objets pour la création du personnage 
    var idDivinite = trouverId(db.tblDivinite, document.getElementById("divinite").value);
    var idAlignement = trouverIdAlignement(db.tblAlignement, document.getElementById("alignement").value);
    var idClasse = trouverId(db.tblClasse, document.getElementById("classe").value);
    var idRace = trouverId(db.tblRace, document.getElementById("race").value);
    var idCategorieTaille =  trouverId(db.tblCategorieTaille, document.getElementById("catTaille").value);
    var idJoueur = creerIdJouer();

    //Création des variable contenant les information du personnage
    var nom = document.getElementById("username").value;
    var niveau = document.getElementById("niveau").value;
    var genre;
    if(document.getElementById("male").checked)
    {
        genre = document.getElementById("male").value;

    }
    else if(document.getElementById("female").checked)
    {
        genre = document.getElementById("female").value;
    }
    var age = document.getElementById("age").value;
    var taille = document.getElementById("Taille").value;
    var poids = document.getElementById("Poid").value;
    var langue = document.getElementById("langues").value;
    var yeux = document.getElementById("coloryeux").value;
    var cheveux = document.getElementById("colorcheveux").value;

    fakeDB.creerPerso(nom, idDivinite, idAlignement, idClasse, niveau, idRace, genre, age, idCategorieTaille, taille, poids, langue, yeux, cheveux, idJoueur);

    //Création du personnage
    console.log(db.tabPersonnage);
}


/*-------------------------------------------------------------------------------------*/


