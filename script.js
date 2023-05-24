"use strict";

const paroleItaliane = [
	"pasta",
	"pizza",
	"scala",
	"banco",
	"fogna",
	"campo",
	"festa",
	"manto",
	"fuoco",
	"vetro",
	"piano",
	"bravo",
	"breve",
	"fisso",
	"stato",
	"tazza",
	"basso",
	"corpo",
	"volto",
	"sedia",
	"scena",
	"salsa",
	"serio",
	"tigre",
	"zampa",
	"forza",
	"bello",
	"forte",
	"quota",
	"torre",
	"tango",
	"fogli",
	"vista",
	"gioco",
	"stiva",
	"feste",
	"odora",
	"picca",
	"mente",
	"canoa",
	"sogno",
	"tempo",
	"tenda",
	"crudo",
	"amico",
	"stile",
	"gusto",
	"viola",
	"sesso",
	"fugge",
	"folle",
	"leggo",
	"grumo",
	"radar",
	"docce",
	"fummo",
	"anima",
	"felce",
	"folto",
	"flora",
	"gamma",
	"hobby",
	"magia",
	"nasce",
	"notte",
	"ormai",
	"rodeo",
	"tempi",
	"valgo",
	"zitta",
	"amido",
	"vesti",
	"cazzo",
	"venne",
	"talpe",
	"pista",
	"gozzi",
	"piena",
	"sorso",
	"ruota",
	"scudi",
	"snodi",
	"corte",
	"tagli",
	"ponte",
	"etici",
	"smise",
	"risse",
	"zanna",
	"barca",
	"vinto",
	"vanto",
	"onere",
	"pulci",
	"tende",
	"veste",
	"felci",
	"tetto",
	"mento",
	"prima",
	"punti",
	"bimba",
	"stata",
	"soffi",
	"cedro",
	"capra",
	"forma",
	"vermi",
	"seria",
	"torce",
	"stava",
	"porto",
	"bacca",
	"corno",
	"pazza",
	"prova",
	"porte",
	"zolla",
	"umore",
	"bagno",
	"spada",
	"crema",
	"corso",
	"bacio",
	"spesa",
	"pieno",
	"birra",
	"amore",
	"sport",
	"penna",
	"terra",
	"donna",
	"cuore",
	"risme",
	"fondo",
	"fuori",
	"caldo",
	"vasca",
	"spina",
	"porta",
	"fughe",
	"fumai",
	"furia",
	"gaffe",
	"gamba",
	"gatto",
	"gesso",
	"girai",
	"giura",
	"giuri",
	"giuro",
	"glifo",
	"gnomo",
	"golfo",
	"grana",
	"grano",
	"grata",
	"grate",
	"grati",
	"grato",
	"gravi",
	"gravo",
	"grida",
	"gridi",
	"grido",
	"grigi",
	"guada",
	"guadi",
	"guado",
	"guida",
	"guide",
	"guidi",
	"guido",
	"hotel",
	"idoli",
	"idolo",
	"imene",
	"empie",
	"ingoi",
	"inizi",
	"invia",
	"invii",
	"invio",
	"iride",
	"iridi",
	"irido",
	"isola",
	"isole",
	"isoli",
	"isolo",
	"abbia",
	"abete",
	"abiti",
	"abuso",
	"acido",
	"acqua",
	"adagi",
	"adito",
	"afosa",
	"agile",
	"aglio",
	"agone",
	"agora",
	"aiuto",
	"alato",
	"alcol",
	"alfio",
	"alghe",
	"altro",
	"amaca",
	"amare",
	"amata",
	"amava",
	"amavi",
	"amavo",
	"ambra",
	"amici",
	"amino",
	"amori",
	"anime",
	"annoi",
	"annua",
	"annui",
	"annuo",
	"anodo",
	"antri",
	"apice",
	"apnea",
	"arabo",
	"arare",
	"arata",
	"arati",
	"arato",
	"aridi",
	"arido",
	"armai",
	"abito",
	"ardua",
	"ardui",
	"arduo",
	"arena",
	"aroma",
	"asilo",
	"asini",
	"asola",
	"aspri",
	"assai",
	"astio",
	"atomi",
	"aureo",
	"avari",
	"avere",
	"avete",
	"avido",
	"avida",
	"avuto",
	"bolla",
	"gioia",
	"spara",
	"miele",
	"falsa",
	"terno",
	"banca",
	"quale",
	"buffo",
	"bozze",
	"buoni",
	"buone",
	"bomba",
	"bocce",
	"bulbi",
	"bullo",
	"netto",
	"muova",
	"occhi",
	"anice",
	"onore",
	"punte",
	"acaro",
	"astro",
	"bruco",
	"baffi",
	"scusa",
	"sfida",
	"sotto",
	"svelo",
	"tasso",
	"tendo",
	"tonfo",
	"bollo",
	"targa",
	"sonno",
	"staff",
	"spuma",
	"tacco",
	"lutto",
	"marea",
	"mollo",
	"balzo",
	"botti",
	"brodi",
	"bucai",
	"bucce",
	"bosco",
	"bonus",
	"zonzo",
	"ville",
	"villa",
	"zuppa",
	"vizio",
	"verza",
	"verme",
	"tuffo",
	"verdi",
	"oncia",
	"orari",
	"orafo",
	"odoro",
	"fiato",
	"felpa",
	"edile",
	"emulo",
	"pesce",
	"cozze",
	"dieta",
	"eluso",
	"droga",
	"dorsi",
	"denso",
	"suono",
	"cruna",
	"corre",
	"conto",
	"clava",
	"cedri",
	"cobra",
	"scova",
	"scovi",
	"scovo",
	"scudo",
	"scuoi",
	"scura",
	"scure",
	"scuri",
	"scuro",
	"scuse",
	"scusi",
	"scuso",
	"sdrai",
	"secca",
	"secco",
	"sedai",
	"sedie",
	"seghe",
	"seghi",
	"segna",
	"segni",
	"segno",
	"segua",
	"segue",
	"segui",
	"seguo",
	"selce",
	"selci",
	"sella",
	"selle",
	"selli",
	"sello",
	"selva",
	"selve",
	"senno",
	"sensi",
	"senso",
	"senta",
	"sente",
	"senti",
	"sento",
	"senza",
	"serba",
	"serbe",
	"serbi",
	"serbo",
	"serie",
	"serpe",
	"serpi",
	"serra",
	"serre",
	"serri",
	"serro",
	"serve",
	"servi",
	"servo",
	"sessi",
	"sesta",
	"sesto",
	"setta",
	"sette",
	"setto",
	"sfama",
	"sfami",
	"sfamo",
	"sfasa",
	"sfasi",
	"sfaso",
	"sfata",
	"sfati",
	"sfato",
	"sfera",
	"sfere",
	"sfide",
	"sfidi",
	"sfido",
	"sfiga",
	"sfila",
	"sfili",
	"sfilo",
	"sfizi",
	"sfoci",
	"sfoga",
	"sfogo",
	"sfora",
	"sfori",
	"sforo",
	"sfuso",
	"sgama",
	"sgami",
	"sgamo",
	"sgasa",
	"sgasi",
	"sgaso",
	"siamo",
	"siano",
	"siate",
	"sidro",
	"siepe",
	"siepi",
	"siero",
	"siete",
	"sigla",
	"sigli",
	"siglo",
	"sigma",
	"urina",
	"orini",
	"ornai",
	"osano",
	"osata",
	"osate",
	"osati",
	"osato",
	"osava",
	"osavi",
	"osavo",
	"oscar",
	"ossei",
	"osseo",
	"ossia",
	"ostia",
	"otite",
	"ovaia",
	"ovaie",
	"ovale",
	"ovali",
	"ovest",
	"ovile",
	"ovili",
	"ovini",
	"ovino",
	"ovuli",
	"ovulo",
	"ovvia",
	"ovvie",
	"ovvio",
	"oziai",
	"ozono",
	"pacca",
	"pacco",
	"padre",
	"padri",
	"paese",
	"paesi",
	"pagai",
	"paghe",
	"paghi",
	"palco",
	"palio",
	"palla",
	"palle",
	"palma",
	"palme",
	"palmo",
	"palpa",
	"palpi",
	"palpo",
	"panai",
	"panca",
	"panda",
	"panna",
	"panni",
	"panno",
	"pappa",
	"pappi",
	"pappo",
	"parai",
	"parco",
	"pareo",
	"parla",
	"parli",
	"parlo",
	"parte",
	"parti",
	"parto",
	"passa",
	"passi",
	"passo",
	"pasti",
	"pasto",
	"patos",
	"patta",
	"patti",
	"patto",
	"paura",
	"pausa",
	"pause",
	"pazze",
	"pazzi",
	"pazzo",
	"pecca",
	"pecco",
	"pegno",
	"pelai",
	"pelle",
	"pelli",
	"penai",
	"penne",
	"pensa",
	"penso",
	"pepai",
	"perda",
	"perde",
	"perdi",
	"perdo",
	"perla",
	"perno",
	"persa",
	"perse",
	"laide",
	"laidi",
	"laido",
	"lampi",
	"lampo",
	"lance",
	"lanci",
	"lardi",
	"lardo",
	"largo",
	"larva",
	"larve",
	"lasci",
	"laser",
	"lassa",
	"lasso",
	"latta",
	"latte",
	"lavai",
	"leale",
	"leali",
	"lecca",
	"lecco",
	"legai",
	"legga",
	"legge",
	"leggi",
	"leghe",
	"leghi",
	"legna",
	"legni",
	"legno",
	"lembo",
	"lenta",
	"lente",
	"lenti",
	"lento",
	"lenza",
	"lenze",
	"leone",
	"lepre",
	"lepri",
	"lerce",
	"lerci",
	"lessa",
	"lesse",
	"lessi",
	"lesso",
	"lesta",
	"leste",
	"lesti",
	"lesto",
	"letta",
	"lette",
	"letti",
	"letto",
	"levai",
	"liana",
	"liane",
	"libra",
	"libri",
	"libro",
	"licei",
	"liceo",
	"lieta",
	"liete",
	"lieti",
	"lieto",
	"lieve",
	"lievi",
	"lilla",
	"limai",
	"limbo",
	"lince",
	"linci",
	"linea",
	"linee",
	"linfa",
	"lisca",
	"lisce",
	"lisci",
	"lista",
	"liste",
	"listi",
	"listo",
	"litio",
	"litri",
	"litro",
	"liuti",
	"liuto",
	"lobby",
	"lodai",
	"logge",
	"loghi",
	"lombi",
	"lorda",
	"lorde",
	"lordi",
	"lordo",
	"losca",
	"losco",
	"lotta",
	"lotte",
	"lotti",
	"lotto",
	"lucra",
	"lucro",
	"lunga",
	"lungo",
	"luogo",
	"lusso",
	"lutti",
	"madre",
	"madri",
	"mafia",
	"mafie",
	"maghi",
	"magie",
	"magli",
	"magma",
	"magna",
	"magra",
	"magre",
	"magri",
	"magro",
	"malga",
	"malta",
	"malto",
	"malva",
	"mamma",
	"mamme",
	"manca",
	"manco",
	"manda",
	"mandi",
	"mando",
	"manga",
	"mangi",
	"mango",
	"mania",
	"manie",
	"manna",
	"manta",
	"mante",
	"manti",
	"manzo",
	"mappa",
	"mappe",
	"mappi",
	"mappo",
	"marca",
	"marce",
	"marci",
	"maree",
	"marmi",
	"marmo",
	"massa",
	"masse",
	"massi",
	"masso",
	"matta",
	"matte",
	"matti",
	"matto",
	"mazza",
	"mazzi",
	"mazzo",
	"media",
	"medie",
	"medio",
	"melma",
	"mensa",
	"mense",
	"menta",
	"menti",
	"merce",
	"merci",
	"merda",
	"merde",
	"merla",
	"merli",
	"merlo",
	"messa",
	"messe",
	"messi",
	"messo",
	"mesta",
	"meste",
	"mesti",
	"mesto",
	"meteo",
	"metri",
	"metro",
	"metta",
	"mette",
	"metti",
	"metto",
	"mezza",
	"mezze",
	"mezzi",
	"mezzo",
	"micio",
	"mieta",
	"miete",
	"mieti",
	"mieto",
	"migra",
	"migri",
	"migro",
	"mille",
	"milza",
	"milze",
	"mimai",
	"miope",
	"mirai",
	"mirra",
	"mista",
	"miste",
	"misti",
	"misto",
	"mitra",
	"mogia",
	"mogio",
	"mogli",
	"moina",
	"molla",
	"molle",
	"molli",
	"molta",
	"molte",
	"molti",
	"molto",
	"mondi",
	"mondo",
	"monta",
	"monte",
	"monti",
	"morbo",
	"morda",
	"morde",
	"mordi",
	"mordo",
	"morra",
	"morsa",
	"morse",
	"morsi",
	"morso",
	"morta",
	"morte",
	"morto",
	"mosca",
	"mosce",
	"mosci",
	"mossa",
	"mosse",
	"mossi",
	"mosso",
	"mosto",
	"motel",
	"motti",
	"motto",
	"mozza",
	"mozzi",
	"mozzo",
	"mucca",
	"muchi",
	"muffa",
	"buono",
	"burla",
	"burle",
	"burli",
	"burlo",
	"burri",
	"burro",
	"bussa",
	"bussi",
	"busso",
	"busta",
	"buste",
	"busto",
	"butta",
	"butti",
	"butto",
	"cabri",
	"cabro",
	"cacao",
	"cacca",
	"cacci",
	"cachi",
	"cacio",
	"cadde",
	"cagai",
	"caghi",
	"cagli",
	"cagna",
	"cagne",
	"calca",
	"calce",
	"calci",
	"calco",
	"calda",
	"calde",
	"caldi",
	"calli",
	"callo",
	"calma",
	"calme",
	"calmi",
	"calmo",
	"calva",
	"calve",
	"calvi",
	"calvo",
	"calza",
	"calze",
	"calzi",
	"calzo",
	"cambi",
	"cameo",
	"campi",
	"canna",
	"canne",
	"canta",
	"canti",
	"canto",
	"cappa",
	"cappe",
	"carpe",
	"capre",
	"capta",
	"capti",
	"capto",
	"cardi",
	"cardo",
	"cargo",
	"caria",
	"carie",
	"carne",
	"carni",
	"carpe",
	"carri",
	"carro",
	"carta",
	"carte",
	"casca",
	"casco",
	"cassa",
	"casse",
	"casta",
	"caste",
	"casti",
	"casto",
	"causa",
	"cause",
	"causo",
	"cauta",
	"caute",
	"cauti",
	"cauto",
	"cavia",
	"cavie",
	"ceche",
	"cechi",
	"cecio",
	"ceffi",
	"ceffo",
	"celai",
	"cella",
	"celle",
	"cenni",
	"cenno",
	"ceppi",
	"ceppo",
	"cerai",
	"cerca",
	"cerco",
	"certa",
	"certe",
	"certi",
	"certo",
	"cerva",
	"cervi",
	"cervo",
	"cessa",
	"cessi",
	"cesso",
	"cesta",
	"ceste",
	"cesti",
	"cesto",
	"cetra",
	"chela",
	"chele",
	"chili",
	"chilo",
	"china",
	"chine",
	"chini",
	"chino",
	"cicca",
	"cicli",
	"ciclo",
	"cieca",
	"cieco",
	"cieli",
	"cielo",
	"cifra",
	"cifre",
	"cigni",
	"cigno",
	"cinga",
	"cinge",
	"cingi",
	"cingo",
	"cinse",
	"cinsi",
	"cinta",
	"cinte",
	"circa",
	"circo",
	"ciste",
	"cisti",
	"citai",
	"clero",
	"clima",
	"clona",
	"clone",
	"cloni",
	"clono",
	"cloro",
	"cocca",
	"cocci",
	"cocco",
	"coesa",
	"coese",
	"coesi",
	"coeso",
	"coito",
	"colai",
	"colei",
	"colga",
	"colgo",
	"colla",
	"colle",
	"colli",
	"collo",
	"colma",
	"colme",
	"colmi",
	"colmo",
	"colon",
	"colpa",
	"colpe",
	"colpi",
	"colpo",
	"colse",
	"colsi",
	"colta",
	"colte",
	"colti",
	"colto",
	"colui",
	"comma",
	"conca",
	"conia",
	"conio",
	"conta",
	"conte",
	"conti",
	"copia",
	"copie",
	"copio",
	"coppa",
	"coppe",
	"copra",
	"copro",
	"corda",
	"corde",
	"corna",
	"corni",
	"corpi",
	"corra",
	"corri",
	"corro",
	"corsa",
	"corse",
	"corsi",
	"corta",
	"corti",
	"corto",
	"corvi",
	"corvo",
	"cosai",
	"cosca",
	"cosce",
	"cosmi",
	"cosmo",
	"costa",
	"coste",
	"costi",
	"costo",
	"cotta",
	"cotte",
	"cotti",
	"cotto",
	"covai",
	"cover",
	"cozza",
	"cozzi",
	"cozzo",
	"crani",
	"creai",
	"creda",
	"crede",
	"credi",
	"credo",
	"creme",
	"crepa",
	"crepe",
	"crepi",
	"crepo",
	"creta",
	"crine",
	"crini",
	"crisi",
	"croce",
	"croci",
	"cromo",
	"cruda",
	"crude",
	"crudi",
	"crune",
	"culla",
	"culli",
	"cullo",
	"culto",
	"cunei",
	"cuneo",
	"cuoca",
	"cuoco",
	"cuoio",
	"cuori",
	"curai",
	"curia",
	"curie",
	"curva",
	"curve",
	"curvi",
	"curvo",
	"daini",
	"daino",
	"dalla",
	"dalle",
	"dallo",
	"danna",
	"danni",
	"danno",
	"dante",
	"danza",
	"danze",
	"danzi",
	"danzo",
	"dardi",
	"dardo",
	"datai",
	"dazio",
	"degli",
	"degna",
	"degne",
	"degni",
	"degno",
	"della",
	"delle",
	"dello",
	"delta",
	"densa",
	"dense",
	"densi",
	"dente",
	"denti",
	"derma",
	"dermi",
	"desco",
	"desta",
	"deste",
	"desti",
	"desto",
	"detta",
	"dette",
	"detti",
	"detto",
	"diari",
	"dieci",
	"diete",
	"dighe",
	"dildo",
	"dirai",
	"direi",
	"disco",
	"disse",
	"dissi",
	"dista",
	"disto",
	"ditta",
	"ditte",
	"dogma",
	"dogmi",
	"dolce",
	"dolci",
	"domai",
	"donai",
	"donne",
	"dopai",
	"doppi",
	"dorai",
	"dorma",
	"dorme",
	"dormi",
	"dormo",
	"dorso",
	"dosai",
	"dossi",
	"dosso",
	"dotai",
	"dotta",
	"dotte",
	"dotti",
	"dotto",
	"draga",
	"drago",
	"drena",
	"dreni",
	"dreno",
	"drogo",
	"drone",
	"duale",
	"dubbi",
	"duomo",
	"durai",
	"ebano",
	"ebbro",
	"ebete",
	"ebeti",
	"ebola",
	"ebreo",
	"ebrei",
	"edema",
	"edera",
	"edile",
	"edita",
	"edite",
	"editi",
	"edito",
	"educa",
	"educo",
	"egira",
	"egizi",
	"eleva",
	"elevi",
	"elevo",
	"elica",
	"elogi",
	"eluda",
	"elude",
	"eludi",
	"eludo",
	"elusa",
	"eluse",
	"elusi",
	"emana",
	"emani",
	"emano",
	"emiri",
	"emiro",
	"emise",
	"emisi",
	"empio",
	"emula",
	"emuli",
	"entra",
	"entri",
	"entro",
	"epica",
	"epico",
	"epoca",
	"epura",
	"epuri",
	"epuro",
];

// ------
// S aggiunta 1 pagina
// P quasi 1 pagina
// LMNO C D E
// PER INSERIRE NUOVE PAROLE si provano nell'array entrante

// const arrEntrante = [

// ];

// function isIn(arr1, arr2) {
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1.includes(arr2[i])) {
// 			console.log(`${arr2[i]} ❌`);
// 		} else {
// 			console.log(`${arr2[i]}✅`);
// 		}
// 	}
// }

// isIn(paroleItaliane, arrEntrante);

// ------

// PER CONTROLLARE SE NELL'ARRAY PRIMARIO CI SONO DOPPIONI

// function trovaStringheDuplicate(array) {
// 	const stringheDuplicate = [];

// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] === array[j] && !stringheDuplicate.includes(array[i])) {
// 				stringheDuplicate.push(array[i]);
// 				break;
// 			}
// 		}
// 	}

// 	return stringheDuplicate;
// }

// console.log(trovaStringheDuplicate(paroleItaliane));

// ------

console.log(`Parole totali: ${paroleItaliane.length}`);

// VARIABILI PUNK~

let randomWord =
	paroleItaliane[Math.floor(Math.random() * paroleItaliane.length)];
console.log(`Parola estratta: ${randomWord.toLocaleUpperCase()}`);
const main = document.querySelector("main");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const btnReset = document.querySelector(".btn-reset");
const btnNextLevel = document.querySelector(`.next-level`);
const victoryMessage = document.querySelector(".victory-message");
const messageBeforeInput = document.querySelector(".insert-word");
const box = document.querySelectorAll(`.box`);
const levelMessage = document.querySelector(`.level-message`);
const record = document.querySelector(`.record`);
const arrowIcon = document.querySelector(`.arrow`);
const pointsOnScreen = document.querySelector(`.points`);
const infoGame = document.querySelector(`.info`);
const settings = document.querySelector(`.settings`);
const btnLetterHint = document.querySelector(`.btn-letter-hint`);
const letterHint = document.querySelector(`.letter-hint`);
const btnBigHintLetter = document.querySelector(`.btn-big-hint-letter`);
const tutorialModal = document.querySelector(`.tutorial-modal`);
const tutorialList = document.querySelector(`.tutorial-list `);
let theRandomLetterHint = "";
let inputValue = input.value;

const alphabetContainer = document.querySelector(".alphabet");
let currentLetter = "";
let letterElement = "";
const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"Z",
];

let bigHintLetterArr = [];

for (let i = 0; i < randomWord.length; i++) {
	bigHintLetterArr.push(randomWord[i]);
}

//Questo counter gestisce la riga che viene riempita
let counter = 0;
let count = 0;
let differentLettersCounter = 0;
let colorFilterArr = [];
let totalLettersUserArr = [];
let matchingLetters = [];
let counterMoves = 0;
let levelCounter = 1;
let actualGameCounter = 1;
let pointsCounter = 0;

// FUNZIONI PUNK~
function clickOnButton() {
	// aggiorno il valore
	inputValue = input.value;
	// passo la parola dell'utente tutta minuscola per non avere problemi
	inputValue = inputValue.toLowerCase();
	colorFilterArr = [];
	totalLettersUserArr = [];
	differentLettersCounter = 0;
	checkWin();

	//Check se la parola e' lunga 5
	if (inputValue.length === 5) {
		input.value = "";
		// RIEMPIO LE RIGHE CON LE LETTERE DIGITATE
		if (counter === 0) {
			document.querySelector(".box-0").textContent = `${inputValue[0]}`;
			document.querySelector(".box-1").textContent = `${inputValue[1]}`;
			document.querySelector(".box-2").textContent = `${inputValue[2]}`;
			document.querySelector(".box-3").textContent = `${inputValue[3]}`;
			document.querySelector(".box-4").textContent = `${inputValue[4]}`;
			counterMoves++;
			checkLettersColors(randomWord, inputValue);
			counter++;
		} else if (counter === 1) {
			document.querySelector(".box-5").textContent = `${inputValue[0]}`;
			document.querySelector(".box-6").textContent = `${inputValue[1]}`;
			document.querySelector(".box-7").textContent = `${inputValue[2]}`;
			document.querySelector(".box-8").textContent = `${inputValue[3]}`;
			document.querySelector(".box-9").textContent = `${inputValue[4]}`;
			counterMoves++;
			checkLettersColors(randomWord, inputValue);
			counter++;
		} else if (counter === 2) {
			document.querySelector(".box-10").textContent = `${inputValue[0]}`;
			document.querySelector(".box-11").textContent = `${inputValue[1]}`;
			document.querySelector(".box-12").textContent = `${inputValue[2]}`;
			document.querySelector(".box-13").textContent = `${inputValue[3]}`;
			document.querySelector(".box-14").textContent = `${inputValue[4]}`;
			counterMoves++;
			checkLettersColors(randomWord, inputValue);
			counter++;
		} else if (counter === 3) {
			document.querySelector(".box-15").textContent = `${inputValue[0]}`;
			document.querySelector(".box-16").textContent = `${inputValue[1]}`;
			document.querySelector(".box-17").textContent = `${inputValue[2]}`;
			document.querySelector(".box-18").textContent = `${inputValue[3]}`;
			document.querySelector(".box-19").textContent = `${inputValue[4]}`;
			counterMoves++;
			checkLettersColors(randomWord, inputValue);
			counter++;
		} else if (counter === 4) {
			document.querySelector(".box-20").textContent = `${inputValue[0]}`;
			document.querySelector(".box-21").textContent = `${inputValue[1]}`;
			document.querySelector(".box-22").textContent = `${inputValue[2]}`;
			document.querySelector(".box-23").textContent = `${inputValue[3]}`;
			document.querySelector(".box-24").textContent = `${inputValue[4]}`;
			counterMoves++;
			checkLettersColors(randomWord, inputValue); // QUI ESEGUO LA FUNZIONE PRINCIPALE
			counter++; // aumento il counter per cambiare riga al turno successivo
			// Check vittoria
			if (inputValue === randomWord) {
				victoryMessage.textContent = `🎉 VITTORIA! 🎉`;
				victoryMessage.classList.remove("hidden");
				btn.classList.add("hidden");
				input.classList.add("hidden");
				arrowIcon.classList.add("color-black");
				messageBeforeInput.textContent = `Puoi accedere al prossimo livello! 😊`;
				console.log("Vittoria!");
			} else {
				victoryMessage.textContent = `😭 Sconfitta.. 😭`;
				victoryMessage.classList.remove("hidden");
				btn.classList.add("hidden");
				input.classList.add("hidden");
				arrowIcon.classList.add("color-black");
				messageBeforeInput.textContent = `La parola giusta era: ${randomWord.toLocaleUpperCase()}!`;
			}
		} else {
			reset();
		}
	} else {
		alert("Inserisci una parola di 5 lettere");
	}
	// console.log(counterMoves); ~~~
}

// CHECK VITTORIA
function checkWin() {
	//~~~ puoi mettere un ternario

	if (inputValue === randomWord && counter <= 4) {
		// Qui segno i punti da assegnare in base al numero del counter

		if (counter === 0) {
			pointsCounter += 1000;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
		} else if (counter === 1) {
			pointsCounter += 500;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
		} else if (counter === 2) {
			pointsCounter += 200;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
		} else if (counter === 3) {
			pointsCounter += 125;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
		} else {
			pointsCounter += 100;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
		}

		victoryMessage.textContent = `🎉 VITTORIA! 🎉`;
		victoryMessage.classList.remove("hidden");
		btn.classList.add("hidden");
		btnNextLevel.classList.remove("display-none");
		input.classList.add("hidden");
		messageBeforeInput.textContent = `Puoi accedere al prossimo livello! 😊`;
		arrowIcon.classList.add("color-black");
	}
}

// CHECK LETTERS COLORS (GREEN ORANGE RED)
function checkLettersColors(currentWord, inputValue) {
	// Questo mi conta le lettere presenti in che numero
	for (let i = 0; i < currentWord.length; i++) {
		count = currentWord
			.split("")
			.filter((letter) => letter === inputValue[i]).length; // questo mi conta quante lettere dello stesso tipo ha la parola
		// console.log(`Lettera '${inputValue[i]}' -> ${count} volte.`); //~~~

		if (!colorFilterArr.includes(inputValue[i])) {
			colorFilterArr.push(inputValue[i]);
			differentLettersCounter += count;
		}
		totalLettersUserArr.push(inputValue[i]);
		// ----

		for (let i = 0; i < randomWord.length; i++) {
			let letter = randomWord[i];
			if (inputValue.includes(letter) && !matchingLetters.includes(letter)) {
				let countRandom = randomWord.split(letter).length - 1;
				let countInput = inputValue.split(letter).length - 1;
				let minCount = Math.min(countRandom, countInput);
				matchingLetters = matchingLetters.concat(Array(minCount).fill(letter));
			}
		}
	}
	// console.log(matchingLetters);
	// console.log(totalLettersUserArr);
	// console.log(colorFilterArr);
	// console.log(`${differentLettersCounter} lettera in tutto da inserire`); // un ciclo lungo quanto questo valore

	// GREEN

	for (let i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === inputValue[i]) {
			// bigHintLetterArr contiene inputValue[i] allora glielo tolgo

			if (bigHintLetterArr.includes(inputValue[i])) {
				bigHintLetterArr = bigHintLetterArr.filter(
					(letter) => letter !== inputValue[i]
				);
			}
			// console.log(bigHintLetterArr);
			// QUESTO ARRAY POSSIEDE LE LETTERE POSSIBILI SENZA LE VERDI

			if (
				counter === 0 &&
				differentLettersCounter > 0 &&
				colorFilterArr.length > 0
			) {
				document.querySelector(`.box-${i}`).style.background = "limegreen";
				differentLettersCounter--;

				// aggiungo 20 punti per lettera verde indovinata
				pointsCounter += 20;
				pointsOnScreen.textContent = `${pointsCounter} Punti`;

				if (matchingLetters.includes(currentWord[i])) {
					const index = matchingLetters.indexOf(currentWord[i]);
					if (index !== -1) {
						matchingLetters.splice(index, 1);
					}
				}
			} else if (
				counter === 1 &&
				differentLettersCounter > 0 &&
				colorFilterArr.length > 0
			) {
				document.querySelector(`.box-${i + 5}`).style.background = "limegreen";
				differentLettersCounter--;

				// aggiungo 20 punti per lettera verde indovinata
				pointsCounter += 20;
				pointsOnScreen.textContent = `${pointsCounter} Punti`;

				if (matchingLetters.includes(currentWord[i])) {
					const index = matchingLetters.indexOf(currentWord[i]);
					if (index !== -1) {
						matchingLetters.splice(index, 1);
					}
				}
			} else if (
				counter === 2 &&
				differentLettersCounter > 0 &&
				colorFilterArr.length > 0
			) {
				document.querySelector(`.box-${i + 10}`).style.background = "limegreen";
				differentLettersCounter--;

				// aggiungo 20 punti per lettera verde indovinata
				pointsCounter += 20;
				pointsOnScreen.textContent = `${pointsCounter} Punti`;

				if (matchingLetters.includes(currentWord[i])) {
					const index = matchingLetters.indexOf(currentWord[i]);
					if (index !== -1) {
						matchingLetters.splice(index, 1);
					}
				}
			} else if (
				counter === 3 &&
				differentLettersCounter > 0 &&
				colorFilterArr.length > 0
			) {
				document.querySelector(`.box-${i + 15}`).style.background = "limegreen";
				differentLettersCounter--;

				// aggiungo 20 punti per lettera verde indovinata
				pointsCounter += 20;
				pointsOnScreen.textContent = `${pointsCounter} Punti`;

				if (matchingLetters.includes(currentWord[i])) {
					const index = matchingLetters.indexOf(currentWord[i]);
					if (index !== -1) {
						matchingLetters.splice(index, 1);
					}
				}
			} else if (
				counter === 4 &&
				differentLettersCounter > 0 &&
				colorFilterArr.length > 0
			) {
				document.querySelector(`.box-${i + 20}`).style.background = "limegreen";
				differentLettersCounter--;

				// aggiungo 20 punti per lettera verde indovinata
				pointsCounter += 20;
				pointsOnScreen.textContent = `${pointsCounter} Punti`;

				if (matchingLetters.includes(currentWord[i])) {
					const index = matchingLetters.indexOf(currentWord[i]);
					if (index !== -1) {
						matchingLetters.splice(index, 1);
					}
				}
			}
		}
		// console.log(matchingLetters);
	}

	// RED
	for (let i = 0; i < currentWord.length; i++) {
		if (!currentWord.includes(inputValue[i])) {
			currentLetter = inputValue[i].toUpperCase();

			if (!alphabet.includes(currentLetter)) {
				continue; // Salta al prossimo ciclo se la lettera non è nell'alfabeto
			}

			const letterIndex = alphabet.indexOf(currentLetter);
			letterElement = document.querySelector(`.letter-${letterIndex + 1}`);

			letterElement.classList.add("bg-red");

			if (counter === 0) {
				document.querySelector(`.box-${i}`).style.background =
					"rgb(255, 86, 86)";
			} else if (counter === 1) {
				document.querySelector(`.box-${i + 5}`).style.background =
					"rgb(255, 86, 86)";
			} else if (counter === 2) {
				document.querySelector(`.box-${i + 10}`).style.background =
					"rgb(255, 86, 86)";
			} else if (counter === 3) {
				document.querySelector(`.box-${i + 15}`).style.background =
					"rgb(255, 86, 86)";
			} else if (counter === 4) {
				document.querySelector(`.box-${i + 20}`).style.background =
					"rgb(255, 86, 86)";
			}
		}
	}

	// ORANGE

	for (let i = 0; i < currentWord.length; i++) {
		if (
			currentWord[i] !== inputValue[i] &&
			currentWord.includes(inputValue[i]) &&
			matchingLetters.includes(inputValue[i])
		) {
			if (bigHintLetterArr.includes(inputValue[i])) {
				bigHintLetterArr = bigHintLetterArr.filter(
					(letter) => letter !== inputValue[i]
				);
			}
			// Questo array ha subito una scrematura iniziale di verdi e poi gli arancioni
			//Possiede tutte le lettere presenti non ancora giocate o conosciute
			console.log(`${bigHintLetterArr} BIG HINT LETTERS`);

			if (counter === 0 && differentLettersCounter > 0) {
				document.querySelector(`.box-${i}`).style.background = "orange";
				differentLettersCounter--;
				const index = matchingLetters.indexOf(inputValue[i]);
				if (index !== -1) {
					matchingLetters.splice(index, 1);
				}
			} else if (counter === 1 && differentLettersCounter > 0) {
				document.querySelector(`.box-${i + 5}`).style.background = "orange";
				differentLettersCounter--;
				const index = matchingLetters.indexOf(inputValue[i]);
				if (index !== -1) {
					matchingLetters.splice(index, 1);
				}
			} else if (counter === 2 && differentLettersCounter > 0) {
				document.querySelector(`.box-${i + 10}`).style.background = "orange";
				differentLettersCounter--;
				const index = matchingLetters.indexOf(inputValue[i]);
				if (index !== -1) {
					matchingLetters.splice(index, 1);
				}
			} else if (counter === 3 && differentLettersCounter > 0) {
				document.querySelector(`.box-${i + 15}`).style.background = "orange";
				differentLettersCounter--;
				const index = matchingLetters.indexOf(inputValue[i]);
				if (index !== -1) {
					matchingLetters.splice(index, 1);
				}
			} else if (counter === 4 && differentLettersCounter > 0) {
				document.querySelector(`.box-${i + 20}`).style.background = "orange";
				differentLettersCounter--;
				const index = matchingLetters.indexOf(inputValue[i]);
				if (index !== -1) {
					matchingLetters.splice(index, 1);
				}
			}
		}
	}
}

// Modale TUTORIAL:

// RESET
function reset() {
	randomWord =
		paroleItaliane[Math.floor(Math.random() * paroleItaliane.length)];
	console.log(`Parola estratta: ${randomWord.toLocaleUpperCase()}`);
	counter = 0;
	differentLettersCounter = 0;
	colorFilterArr = [];
	totalLettersUserArr = [];
	counterMoves = 0;
	input.value = "";
	victoryMessage.textContent = `INDOVINA LA PAROLA`;
	btn.classList.remove("hidden");
	input.classList.remove("hidden");
	messageBeforeInput.classList.remove("hidden");
	messageBeforeInput.textContent = `Inserisci una parola di 5 lettere.`;
	btnNextLevel.classList.add("display-none");
	arrowIcon.classList.remove("color-black");

	// letterHint.textContent = ``;
	pointsCounter = 0;
	pointsOnScreen.textContent = `0 Punti`;

	levelCounter = 1;
	levelMessage.textContent = `Livello ${levelCounter}`;
	letterHintsArr = randomWord.split("");
	letterHintsList.textContent = "";
	letterHintsArr = [];

	bigHintLetterArr = [];

	const redLetterElements = document.querySelectorAll(".alphabetClick.bg-red");

	redLetterElements.forEach((element) => {
		element.classList.remove("bg-red");
	});

	for (let i = 0; i < randomWord.length; i++) {
		bigHintLetterArr.push(randomWord[i]);
	}

	for (let i = 0; i < 25; i++) {
		document.querySelector(`.box-${i}`).style.background = "lightgrey";
		document.querySelector(`.box-${i}`).textContent = ``;
	}
}

function resetNextLevel() {
	randomWord =
		paroleItaliane[Math.floor(Math.random() * paroleItaliane.length)];
	console.log(`Parola estratta: ${randomWord.toLocaleUpperCase()}`);
	counter = 0;
	differentLettersCounter = 0;
	colorFilterArr = [];
	totalLettersUserArr = [];
	counterMoves = 0;
	input.value = "";
	victoryMessage.textContent = `INDOVINA LA PAROLA`;
	btn.classList.remove("hidden");
	input.classList.remove("hidden");
	messageBeforeInput.classList.remove("hidden");
	messageBeforeInput.textContent = `Inserisci una parola di 5 lettere.`;
	btnNextLevel.classList.add("display-none");
	// arrowIcon.classList.remove("display-none");
	arrowIcon.classList.remove("color-black");

	// letterHint.textContent = ``;
	letterHintsList.textContent = "";
	letterHintsArr = [];

	bigHintLetterArr = [];

	const redLetterElements = document.querySelectorAll(".alphabetClick.bg-red");

	redLetterElements.forEach((element) => {
		element.classList.remove("bg-red");
	});

	for (let i = 0; i < randomWord.length; i++) {
		bigHintLetterArr.push(randomWord[i]);
	}

	levelCounter++;
	letterHintsArr = randomWord.split("");

	// controllo se il level counter attuale sia maggiore del precedente

	levelMessage.textContent = `Livello ${levelCounter}`;

	if (actualGameCounter < levelCounter) {
		record.textContent = `RECORD: ${levelCounter} 🏆`;
	} else {
		record.textContent = `RECORD: ${actualGameCounter} 🏆`;
	}

	for (let i = 0; i < 25; i++) {
		document.querySelector(`.box-${i}`).style.background = "lightgrey";
		document.querySelector(`.box-${i}`).textContent = ``;
	}
}

function clearPlaceholder(input) {
	input.placeholder = "";
}

// EVENTI PUNK~

//CLICK
btn.addEventListener("click", function () {
	clickOnButton();
});

btnReset.addEventListener("click", function () {
	reset();
});

btnNextLevel.addEventListener("click", function () {
	resetNextLevel();
	actualGameCounter++;
});

document.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		clickOnButton();
		if (inputValue.length === 5) {
			input.value = "";
		}
		document.activeElement.blur(); // Chiude il tastierino dello smartphone
	}
});

document.addEventListener("keyup", function (event) {
	if (event.key === "Escape") {
		reset();
	}
});

// TUTORIAL

infoGame.addEventListener("click", function () {
	tutorialModal.classList.add("active-3");
	if (tutorialList.classList.contains("hidden")) {
		tutorialList.classList.remove("hidden");
		tutorialModal.classList.remove("hidden");
	} else {
		tutorialList.classList.add("hidden");
		tutorialModal.classList.add("hidden");
	}
});

// Dichiarazione della variabile per memorizzare i suggerimenti delle lettere

let letterHintsArr = randomWord.split("");
let letterHintsList = document.createElement("ul"); // Creazione dell'elemento <ul>
letterHintsList.style.listStyleType = "none"; // Rimuove il pallino laterale dall'elenco
let letterHintsContainer = document.querySelector(".letter-hint-container"); // Seleziona il contenitore delle lettere

btnLetterHint.addEventListener("click", function () {
	if (
		pointsCounter >= 150 &&
		bigHintLetterArr.length > 0 &&
		letterHintsArr.length > 0
	) {
		if (letterHintsArr.length > 0) {
			pointsCounter -= 150;
			pointsOnScreen.textContent = `${pointsCounter} Punti`;
			let randomIndex = Math.floor(Math.random() * letterHintsArr.length);
			let removedLetter = letterHintsArr.splice(randomIndex, 1)[0]; // Rimuovi la lettera e ottienila
			let letterHintItem = document.createElement("li"); // Creazione dell'elemento <li>
			letterHintItem.textContent = ` ${removedLetter.toLocaleUpperCase()}  `;

			letterHintsList.appendChild(letterHintItem); // Aggiungi l'elemento <li> alla lista

			letterHintsContainer.innerHTML = ""; // Svuota il contenuto del contenitore
			letterHintsContainer.appendChild(letterHintsList); // Aggiungi la lista al contenitore

			// console.log(removedLetter);
			console.log(`Lettera rimossa: ${removedLetter}`);
			console.log(`Array delle lettere consigliate: ${letterHintsArr}`);
		}
	} else {
		alert("O non hai abbastanza Punti, OPPURE conosci già tutte le lettere!");
	}
});

btnBigHintLetter.addEventListener("click", function () {
	if (
		pointsCounter >= 300 &&
		bigHintLetterArr.length > 0 &&
		letterHintsArr.length > 0
	) {
		pointsCounter -= 300;
		pointsOnScreen.textContent = `${pointsCounter} Punti`;

		console.log(bigHintLetterArr);

		let randomIndex = Math.floor(Math.random() * bigHintLetterArr.length);
		let randomLetter = bigHintLetterArr[randomIndex];

		console.log(randomLetter);

		// Rimuovi il valore estratto dall'array
		bigHintLetterArr.splice(randomIndex, 1);

		// Creazione dell'elemento <li>
		let letterHintItem = document.createElement("li");
		letterHintItem.textContent = `✨ ${randomLetter.toLocaleUpperCase()} ✨`;

		// Aggiungi l'elemento <li> alla lista
		letterHintsList.appendChild(letterHintItem);

		// Svuota il contenuto del contenitore
		letterHintsContainer.innerHTML = "";

		letterHintItem.style.fontSize = "10px";

		// Aggiungi la lista al contenitore
		letterHintsContainer.appendChild(letterHintsList);
	} else {
		alert("O non hai abbastanza Punti, OPPURE conosci già tutte le lettere!");
	}
});
