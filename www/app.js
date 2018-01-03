
/*

//console.log('Hello world !');
//alert('hello world!');
//window.confirm('vou') ;
//console.error('hello error');
//console.warn('blablabla');


if(1<10){
    console.log('vrai'); 
    console.log('toto');
    console.log(1>10); // ici sans cotes il va le calculer et dire si c vrai ou pas
    console.log('1>10'); // la il va directement afficher le texte tel quel
}
else{
    console.log('faux');
}

var Myvar =10;
var MyOthervar =1;
if(MyOthervar<Myvar){
    console.log('vrai'); 
    console.log('toto');
    console.log(1>10); // ici sans cotes il va le calculer et dire si c vrai ou pas
    console.log('1>10'); // la il va directement afficher le texte tel quel
}
else{
    console.log('faux');
}

if(MyOthervar==Myvar){
    console.log('vrai'); 
    console.log('toto');
    console.log(1>10); // ici sans cotes il va le calculer et dire si c vrai ou pas
    console.log('1>10'); // la il va directement afficher le texte tel quel
}
else{
    console.log('faux');
}

if(MyOthervar||Myvar){  //||   &&
    console.log('oui'); 
    }
else{
    console.log('non');
}

if((MyOthervar>Myvar)&& (MyOthervar<Myvar)){   //      ||  &&  
    console.log('oui'); 
    }
else{
    console.log('non');
}


*/   // je mets les parties en comentaire pour avancer dans le cours je sectionne le cours en parties logiques



//for (var val = 0; val <= 10; val = val+1){
  //  console.log(val);
//}

//var val = 1;
//while ( val <=100){
//    console.log(val);
 //   val++; //  le plus pllus pour ajouter a chaque fois un 1 a la valeur initiale pour eviter la boucle infini si non ca part en infini
//}
/*
var val=1;

while(true){
    console.log(val);
    val++;
    if(val >100){
        break;  // permet de stoper la boucle si la valeure  est atteinte
    }
}

*/
/*
var val=1;

                                                /*
                                                    if(val==0){
                                                        console.log('tata');
                                                    }
                                                    if(val==1){
                                                        console.log('ttiti');
                                                    }
                                                    if(val==2){
                                                        console.log('toto');
                                                    }*/


/*
switch(val){


    case 0:
    console.log('toto');
    break;

    case 1:
    console.log('titi');
    break;

    default:
    console.log('tata');
    break;
}


if(val<1){
    console.log('inf');
}else if(val>1){
    console.log('supp');
}

*/

/*

var val=1;
for (var val = 0; val <= 10; val = val+1){
      console.log(val);
 }


 var vae=1;
 for (var vae = 0; vae <= 10; vae = vae+2){
       console.log(vae);
  }

  var vag=1;
  for (var vag = 0; vag <= 10; vag = vag+2/3){
        console.log(vag);
   }


   var vag=1;
   
   for (var vag = 0; vag <= 10; vag = vag+2/43){
         console.log(val);
    }




    
    
    var A = 0;
    var B = 1;
    var C = 2;
            
    


    for (var C = 0; C <= 1000; C = A+B){
          console.log(C);
         var A = B;
         var B = C;


        
        
     }

     
 var numero = prompt("devinez mon numero fetich" );
    while(true){
       
        
             if(numero < 7){
                var numero = prompt("valeur inferieure au nombre" );
        
             }
             else if(numero > 7){
                var numero = prompt("valeur superieure au nombre" );
            }
        
            else if(numero == 7){
                alert('bingo');
                break;
                
            }
        }

        */





//correction exo a la façon de mathieu

/*

for(let i =1; i <=10; i++){

console.log(i);

}



let count;
while (count<10){

console.log(count);
count++ // ca veut dire count variable +1   on peut faire aussi aount += 1 qui est egale a count+1


}





for(let i =0; i <=10; i+=2){
    
    console.log(i);
    
    }

    let countt;
    while (countt<10){
    if (countt % 2 ===0){
       console.log(countt); 
    }
    
    countt++; // ca veut dire count variable +1   on peut faire aussi aount += 1 qui est egale a count+1
    
    
    }


const step = 5;

    for(let counts = 1; counts >10; counts += step){
        console.log(counts);
    }


*/

    let zozo = [0,1];
    for(let counts = 2; counts < 100; counts += 1){  // essayer de boidouiiller seul pour mieux le comprendre  le 2 la est le nombre de trucs dans le tableau  mais si on le modifie  ...
        zozo.push(zozo[zozo.length - 1] + zozo[zozo.length - 2]);
        
    }
console.log(zozo);

// bonus : en faire une fonction

function fibonacci(toto = 0) {
    let results = [];
  
    for (let count = 0; count < toto; count += 1) {
      if (results.length < 2) {
        results.push(count);
      } else {
        results.push(results[results.length - 1] + results[results.length - 2]);
      }
    }
  
    return results;
  }
  
  console.log(fibonacci(50));

const number = 451;
  let guessedNumber = prompt("Entrer un nombre")

  if(guessedNumber < number){
      guessedNumber = prompt("C'est plus!");
    let person = prompt ("C'est plus!");
  }
if (guessedNumber > number){

let person = prompt ("C'est moins !");
}
if (guessedNumber == number){
    
    alert ("Bravo !");
    }  
  console.log(person);





  