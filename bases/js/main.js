//console.log('Mon message');
//console.error('Mon message erreur');


//document.addEventListener('click',function(){

  //  alert('MESSAGE');
//});

//const b = document.getElementById("bouton");
//b.addEventListener("click", function() {
//    alert("COUCOUUUUU");
//  });



/*const bouton = document.getElementsByClassName('btn btn-primary');

for(var i = 0; i < bouton.length; i++) {
    bouton[i].addEventListener("click", function() {
        alert("coucou");
      })
    };
*/

const bouton2=document.getElementsByClassName('btn btn-primary');

if(bouton2!=null)
{
    bouton2[0].addEventListener("click", function() {
        var table = document.getElementsByTagName("table");
        if (table[0].style.display === "none") {
            table[0].style.display = "block";
          } else {
            table[0].style.display = "none";
          }
    });
}


const bouton3=document.getElementsByClassName('btn btn-primary');

if(bouton3!=null)
{
    bouton3[0].addEventListener("click", function() {
        var table = document.getElementsByTagName("table");
        //ternaire
    });
}