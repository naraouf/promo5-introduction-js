
/*
var A = 0;
var B = 1;

        



for (var C = 0; C <= 1000; C = A+B){
      console.log(C);
     var A = B;
     var B = C;


    
    
}*/
/*
let fibo = [0,1];

for (let count = 2; count < 100; count += 1) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}
console.log(fibo);
*/
/*
let etoile = 1

for(let etoile= 0; etoile <100; etoile +2){
    console.log(etoile);
}*/
/*
var val=1;
for (var val = 1; val <= 10; val = val+1){

    if (val%2 == 0){}
    
 else
    
      console.table(val); 

     

 }
*/
/*
 var prenom = "*";
var espace="          "; 
esp=""
 for(var x = 0; x <10; x++){

 for (var i = 0; i < 10; i++) {
    var nom = (prenom[1]+prenom[2]+prenom[3])
    prenom=prenom+"*";
}
    
for (var e = 10; e == 0; e--) {  
    esp+='';
}

console.log(esp+prenom);
}
*/



    //On commence par créer une variable avec le nombre d'espace
    //initial qu'il y aura devant chaque étoile
    let espace = 5;
    //On peut aussi gérer les étoiles
    //let etoiles = 1
    //On fait une boucle de 5 tour, un tour par ligne
    for(let ligne = 1; ligne <= 5; ligne++) {
        //On initialise la variable texte avec
        //rien dedans. C'est ce texte qu'on affichera.
        let texte = '';
        //On fait une première boucle imbriquée qui
        //viendra ajouter des espaces à notre texte
        for(let x = 1; x <= espace; x++) {
            //A chaque tour de boucle, on ajoute un espace
            //à la variable texte
            texte += 'x';
        }
        //Une fois la première boucle imbriquée terminée,
        //on en fait une seconde qui viendra ajouter
        //les étoiles à notre texte
        console.log("zaim"+ligne);
        for (let etoile = 1; etoile <= ligne*2-1; etoile++) {
            //A chaque tour de boucle, on ajoute une
            //étoile à la variable texte
            //console.log("zizou"+ligne);
            texte += '*';            
        }
        //On affiche la variable texte en console
        console.log(texte);
        //On retire un espace pour la prochaine ligne
        espace--;
    }