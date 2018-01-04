


/*

let btn = document.querySelector('button');


let x= 0
btn.addEventListener('mousemove', function(){  //liste des evenements ici interessant  https://developer.mozilla.org/fr/docs/Web/Events
    console.log('bloup');
   x++;
   console.log(x);
});

*/


x=0
let moins = document.querySelector('#moins');
let plus = document.querySelector('#plus');

moins.addEventListener('click', function(){  //liste des evenements ici interessant  https://developer.mozilla.org/fr/docs/Web/Events
    console.log('bloup');
   x--;
   console.log(x);
   document.getElementById('cadrant').innerHTML= x;
});

plus.addEventListener('click', function(){  //liste des evenements ici interessant  https://developer.mozilla.org/fr/docs/Web/Events
    console.log('bloup');
   x++;
   console.log(x);
   document.getElementById('cadrant').innerHTML= x;
});

let start = document.querySelector('#start');
start.addEventListener('click',function(){  //liste des evenements ici interessant  https://developer.mozilla.org/fr/docs/Web/Events
    console.log('start');
   
   
   document.querySelector('#section').style.display= 'block';

});
