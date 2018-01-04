

var personnage = {
    nom : "toto",
    prenom : "tati",
    age : 18,
    isdev: true,
    adresse: {
        ville: "lyon",
        rue: "rue de lyon",
        numero: "10",
    },
    presentation:function() {
console.log(`Voici ${this.nom}  ${this.prenom} il a ${this.age} ans`)
if(personnage.isdev == true){
    console.log("hello am a develloper");
}
else{
    console.log("am not devlloper");
}

    
} 

    
    }
personnage.presentation();

personnage.nom= "lolo";
personnage.age++;
personnage.presentation();




console.log(`mon adresse est ${personnage.adresse.ville},${personnage.adresse.rue},${personnage.adresse.numero}`);


/*
var personnage = new Object();
personnage.nom = "toto";
personnage.prenom = "tati";
personnage.age = 18;
personnage.presentation= genre;



var personnage = {
    nom : "toto",
    prenom : "tati",
    age : 18,
    presentation:function() {
console.log(`Voici ${personnage.nom}  ${personnage.prenom} il a ${personnage.age} ans`)

} 
*/


