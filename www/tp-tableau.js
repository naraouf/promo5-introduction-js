function formulaire()

{

    console.log("start");
    for(x=0; x <= 4; x++){
        
        let ville  = prompt("Entrez votre ville preferee","" );
       
        while(ville === ""){
             ville  = prompt("Entrez votre ville preferee?","" );
             
        }
        if (ville != null ) {
            if( ville.search(" ") < 0){

                  table.push(ville);
            //document.write(table.join(", "));
            }
               else{
                   alert("veuillez introduire un seul mot");
                   x--;
               } 
          
        }
        
        } 

}

function show(){
    console.log("show");
    document.getElementById("mondiv").innerHTML = table.join();
    console.log(table);
}

function length(){
    console.log("length");
    console.log(table.length);
}
function reset(){
    console.log("reset"); 
    table = new Array(); 
}




let table = new Array();




while(true){
    
    var question  = prompt("Que voulez vous faire? (EX: start,show, length ou stop ) ","" );
    
    if(question == "start"){
        formulaire();
         } 
    if(question == "show"){
       show();
    }
    else if(question == "length"){
        length();
    }
    else if(question == "reset"){
        reset(); 
    }
    else if(question == "stop"){
        console.log("stop"); 
        break;       
    }
    else{
        alert("Entree incorecte veuillez choisir parmis ces termes: start,show, length ou stop" );
    }
    
    }

    







/*
for(x=0; x <= 4; x++){
let ville  = prompt("Entrez votre ville preferee","" );

if (ville != null) {
        
    table.push(ville);
    //document.write(table.join(", "));
    document.getElementById("mondiv").innerHTML = table.join();
    console.log(ville)
    

} else{
    while(true){
        let ville  = prompt("Entrez votre ville preferee","" );
        if(ville != null){
            break;
        }
    }
}


}
console.log(table)
console.log(table.length);
*/