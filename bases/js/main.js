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
/*
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

$('#bouton').on("click", function(){
  $('table').find('tr').last().remove();
});
*/

const bouton3=document.getElementsByClassName('btn btn-primary');

if(bouton3!=null)
{
    bouton3[0].addEventListener("click", function() {
        var table = document.getElementsByTagName("table");
        //ternaire
        table[0].style.display === "none"?table[0].style.display = "block" : table[0].style.display = "none";
    });
}

const boutonSupp=document.getElementById('boutonSup');

boutonSupp.addEventListener("click",function(){
  var supDate=document.getElementsByClassName("dateNaissance");
  for(i=0; i<supDate.length;i++)
  {
    supDate[i].innerHTML="";
  }  
})


const popup=document.getElementById('popup');
popup.addEventListener("click",function(){
  
  var x = document.getElementById("pop");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})