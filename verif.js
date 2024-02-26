/*function ValiderDateOfBirth(){
    var elementDate = document.getElementById("dateNaissance")
    var elementValue = new Date(elementDate.value) ;
    const dateAujourdhui = new Date();
    if(elementValue >=dateAujourdhui){
      alert("Please enter a correct date that is befor today !! ");
    }else{
      alert("DATE is valid ");
    }
  }
*/


var fromelement = document.getElementById("form")
var nameelement = document.getnamebyID("nom")
fromelement.addeventlistener("submit")

function validername() {
    var namevalue = nameelement.value
    var pattern = /^[a-z    A-Z ]+$/
    var nameerror = document.getElementById("nameerror")
    if(!namevalue.match(pattern)){

 nameerror.innerHTML ="nom doit ......."

    }else  {
        nameerror.innerHTML = "<span style= 'color = green '
    }




}