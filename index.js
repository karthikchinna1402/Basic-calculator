var string="";
var numberOfbuttons = document.querySelectorAll(".button").length;
for(var i=0;i<numberOfbuttons;i++){
document.querySelectorAll(".button")[i].addEventListener("click",function(){

  if(this.innerHTML=="="){
    string=eval(string);
    document.querySelector("input").value=string;

  }
  else if(this.innerHTML=="C"){

    string=" ";
    document.querySelector("input").value=string;

  }
    else{

       string=string+this.innerHTML;
     document.querySelector("input").value=string;
   }

})
}