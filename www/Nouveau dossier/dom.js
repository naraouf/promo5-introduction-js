/*
//console.log(document.getElementById('para').textContent);

let para = document.getElementById('para'); // on l'utilise plus trop de nos jours car ya maintenat le queryselector plus facile
document.getElementById('para');
console.log(para.textContent);
para.textContent = 'bloup';



let para = document.querySelector('#para')  // c'est un slecetur query qui permer de selectionner les element du dom mais de maniere plus facile il ressemble a ceux du css

para.id
para.style
para.href  //  etc tout ca permet de changer les elements dans le dom leur nom id leur style leur href etc

*/


let para = document.querySelector('#para');
para.style.color= 'red';
para.style.fontSize = '20px';

let span = document.querySelector("p span");
span.textContent="inside para";

let hh= document.querySelector('.laClasse')
alert(hh.textContent)

let promptt = prompt("inserez un mot","");

let span2 = document.querySelector("section > span");
span2.textContent=promptt;

let section = document.querySelector('section');
section.style.border = "thick solid #0000FF";

let laclass = document.querySelectorAll(".laClasse");
for(let i of laclass){
    i.style.fontSize= "200px";
}



//Rajouter une bordure à la section
//faire un prompt qui demande un mot, et mettre ce mot comme texte d'un span contenu directement dans une section
//Récupérer le texte du h1 et l'afficher en alert
//Changer le texte des span contenus dans des paragraphe par "inside para"
//Changer la taille du texte des éléments ayant la classe laClasse

//var el = document.p.querySelector("style[type='text/css'], style:not([type])");


