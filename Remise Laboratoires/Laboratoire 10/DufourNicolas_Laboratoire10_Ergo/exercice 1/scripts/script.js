function SuperHero(Nom_Hero, Description, Image, Allies, Ennemies, Id) 
{
  this.Nom_Hero = Nom_Hero;
  this.Description = Description;
  this.Image = Image;
  this.Allies = Allies;
  this.Ennemies = Ennemies;
  this.Id = Id;
}

var GreenArrow = new SuperHero(
	"Green Arrow",
	"Green Arrow est un justicier opérant à Star City, il a la particularité de ne posséder aucun super-pouvoir, il utilise ses compétences au tir à l'arc, les arts martiaux et la technologie pour combattre le crime. Son identité secrète est Oliver Queen, un playboy milliardaire et riche industriel, possédant Queen Industries. Green Arrow est également le leader de la Team Arrow et membre de la Ligue des Justiciers ainsi que des Outsiders.",
	"url('./img/green_Arrow.jpg')",
	"<li>Black Canary</li><li>OverWatch</li><li>Spartan</li><li>Mr Terrific</li><li>Wild Dog</li><li>Speedy</li><li>Arsenal</li>",
    "<li>Damien Dark</li><li>Ra's al Ghul </li><li>H.I.V.E.</li><li>Prometheus</li><li>Captain Boomrang</li>",
    "GreenArrow"
    );
var Flash = new SuperHero(
	"Flash",
    "Flash est le nom de plusieurs personnages de fiction appartenant à l'univers de DC Comics. Les différents Flash sont tous dotés de la capacité de se déplacer à très grande vitesse. Le costume du super-héros Flash est souvent de couleur rouge et jaune qui rappelle l'éclair avec au centre un éclair sur un fond blanc pour désigner sa vitesse. Mais le tout premier avait également un casque d'acier, inspiré du dieu grec Hermès (ou Mercure chez les Romains), doté lui aussi, d'une vitesse hors du commun. Il a été créé par Gardner Fox et Harry Lampert.",
	"url('./img/flash.png')",
	"<li>Green Arrow</li><li>Spartan</li><li>Overwatch</li><li>Firestorm</li><li>Argus</li><li>Hawkgirl</li><li>Jesse Quick</li><li>Flash de Terre III</li>",
    "<li>Grodd</li><li>Savitar</li><li>Captain Cold</li><li>Reverse-Flash</li><li>Weather Wizard</li>",
    "Flash"
	);
var Thor = new SuperHero(
    "Thor",
    "Thor est le dieu du Tonnerre dans la mythologie nordique. Il est l'un des principaux dieux du panthéon nordique, et fut vénéré dans l'ensemble du monde germanique.<br \>Son culte est d'abord rapporté dans le monde germanique par des chroniqueurs extérieurs, notamment par Tacite. Toutefois, les mythes qui lui sont associés se retrouvent principalement dans les Eddas, textes scandinaves rédigés et compilés aux alentours du XIIIe siècle, soit quelques siècles après la christianisation officielle des derniers royaumes vikings.<br \>D'après ces textes scandinaves, Thor est le plus puissant des dieux guerriers. Symbolisant la force, la valeur, l'agilité et la victoire, il utilise la foudre et apaise ou excite les tempêtes3. Ses pouvoirs sont ainsi liés au ciel. Il possède un char tiré par deux boucs qui lui permet de traverser les mondes. Son attribut le plus célèbre est son marteau Mjöllnir, avec lequel il crée la foudre, et qui lui permet surtout d'être le protecteur des dieux et des hommes face aux forces du chaos, comme les géants, qu'il abat régulièrement et dont il est le pire ennemi. En tant que dieu de l'orage, il apporte la pluie, ce qui fait également de lui une divinité liée à la fertilité. Il est le fils d'Odin et de Jörd, et a pour épouse la déesse aux cheveux d'or Sif.",
	"url('./img/thor.jpg')",
	"<li>Odin</li><li>Heimdal</li><li>Beta Ray Bill</li><li>Sif</li><li>Hogun</li><li>Volstagg</li>",
    "<li>Loki</li><li>Malekith</li><li>Kurse</li><li>Amora</li><li>Exécuteur</li><li>Ragnarok</li><li>Ymir</li><li>Héla</li><li>Ego</li>",
    "Thor"
	);
var SuperMan = new SuperHero(
    "Super Man",
    "Superman est équipé d'une cape rouge , d'un costume bleu avec un symbole S sur la poitrine.<br \>Superman est venu sur Terre alors qu'il était que nourisson après que sa planète d'origine explose. Il atterrit dans un champ de mais à Smallville, accuelli par les Kent (qu'il le prénomma Clark), il apprend à maîtriser ses pouvoirs. Après l'université, il aménage à Metropolis où il devient Superman.",
	"url('./img/superMan.jpg')",
	"<li>Supergirl</li><li>Lois Lane</li><li>Jimmy Olsen</li><li>Perry White</li><li> Jonathan et Martha Kent</li>",
    "<li>Metallo</li><li>Mongul</li><li>Morgan Edge</li><li>Atlas</li><li>Atomic Skull</li><li>Bizarro</li><li>Brainiac</li><li>Bruno Mannheim</li><li>Cyborg Superman</li><li>Darkseid</li><li>Gog</li><li>Lex Luthor</li>",
    "SuperMan"
	);
var IronMan = new SuperHero(
    "Iron Man",
    "Tony Stark, playboy, milliardaire, n'est pas seulement l'héritier des usines d'armement de son père (la Stark Industries), c'est également un inventeur de génie. Alors qu'il est en déplacement en Afghanistan afin de présenter sa dernière création, le missile Jéricho, il est enlevé par des terroristes de l'organisation « Les Dix Anneaux ». Gravement blessé lors de l'attaque, il ne survit que grâce à l'aide d'un scientifique, le professeur Yinsen, qui le guérit en lui greffant à la poitrine un électro-aimant placé près de son cœur et alimenté par une batterie de voiture.<br \>Ne cédant pas aux menaces des terroristes qui veulent lui faire reproduire son missile, il fabrique, à la place et dans le plus grand secret, un réacteur miniaturisé appelé « réacteur ARK » pour remplacer la batterie de voiture, et une armure primaire en acier truffée de gadgets, grâce à laquelle il réussit à s'enfuir, en l'abandonnant. Profondément marqué par cet enlèvement, et constatant que les terroristes ont récupéré l'armure et d'autre armes qu'il a lui-même conçues, il décide de donner un nouveau tournant à sa vie en construisant une nouvelle armure, high-tech, et en mettant son potentiel au service de la protection des innocents et de la justice. Dès lors il combattra divers ennemis.",
	"url('./img/IronMan.jpeg')",
	"<li>Pepper Potts</li><li>James Rhodes</li><li>Harold</li>",
    "<li>Iron Monger</li><li>Wiplash</li><li>Blacklash</li><li>Le Mandarin</li><li>Madame Masque</li><li>Blizzard</li><li>Titanium Man</li><li>Eric Savin</li><li>Dynamo Pourpre</li>",
    "IronMan"
	);

document.getElementById("GreenArrow").style.border = "3px solid Red";

function afficherContenue(hero)
{
    $('button').css({
    	'border': 'none'
    });
	
	document.getElementById(hero.Id).style.border = "3px solid Red";

	var Nom = document.getElementById("nom_SuperHero");
	Nom.innerHTML = hero.Nom_Hero;

	var Texte = document.getElementById("texte");
    Texte.innerHTML = hero.Description;

    var Image = document.getElementById("Image");
    Image.style.backgroundImage = hero.Image; 

    var Allies = document.getElementById("Allies");
    var div_1 = Allies.querySelectorAll("ul");

    div_1[0].innerHTML = hero.Allies;

    var Ennemie = document.getElementById("Ennemies");
    var div_2 = Ennemie.querySelectorAll("ul");

    div_2[0].innerHTML = hero.Ennemies;
}
var activer = "Arrow";

document.getElementById("Flash").addEventListener("click", function() {
       afficherContenue(Flash);
       activer = "Flash";
    });

document.getElementById("GreenArrow").addEventListener("click", function() {
       afficherContenue(GreenArrow);
       activer = "GreenArrow";
    });

document.getElementById("Thor").addEventListener("click", function() {
       afficherContenue(Thor);
       activer = "Thor";
    });

document.getElementById("SuperMan").addEventListener("click", function() {
       afficherContenue(SuperMan);
    });

document.getElementById("IronMan").addEventListener("click", function() {
       afficherContenue(IronMan);
    });
