let para = document.createElement('p');

document.querySelector('body').appendChild(para);
para.textContent='lkjhlkjhkljszhd';
para.style.color= 'red';
para.className= 'maclass';
para.id='monid';



let tableau = document.createElement('table');

document.querySelector('body').appendChild(tableau);


let pol = 1
for(y=1;y<=10;y++){
    let td = document.createElement('td');
    
    document.querySelector('table').appendChild(td).id=`${pol}`;
    td.textContent= y;
    let col = 20
    let r =1;
    for(x=1;x<=10;x++){
    let tr = document.createElement('tr');
    document.getElementById(pol).appendChild(tr).id=`${col}`;
    
    
    tr.textContent= r*pol;
        col++;
        r++;
    }
pol++;

}

   
   








var eElement; // some E DOM instance
var newFirstElement; //element which should be first in E

eElement.insertBefore(newFirstElement, eElement.firstChild);

