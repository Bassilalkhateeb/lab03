var Anime=prompt("Are you a fan of Aot or Bleach (Type Aot or Bleach)?");
while (Anime !== 'Aot' && Anime !== 'Bleach'){
    Anime=prompt("Are you a fan of Aot or Bleach? (Type Aot or Bleach)");
}
var numofshirts=prompt("How many Tshirts you want to order?");



var orderDetails ='';

// Here is my functions //
function first() {
    if (numofshirts >= 1 && numofshirts <= 4){

        orderDetails="Congrats you have a discount 25%";
        
    }
     else if (numofshirts > 4 && numofshirts <=8){
        orderDetails="Congrats you have a discount 50%";
        
    }
     else if (numofshirts > 8 && numofshirts <=12){
        orderDetails="Congrats you have a discount 50% and a Figuer of your fav character";
        
    }
     else if (numofshirts > 12){
        orderDetails="Congrats you have a discount 50% , a Figuer of your fav character , and a Manga!!!";
        
    }
    
    else {
        orderDetails="No discount :(";
        confirm("You have to buy in order to get a discount!")
    }
}
first();


var result = '' ;
var image = ' ';
function second(){
    if (Anime === 'Aot'){
        image = '<img src="images/attackon.jpg"/>';
    
    } else if (Anime === 'Bleach'){
        image = '<img src="images/bleach.jpg"/>';
    }
    
    for (var i = 0 ; i < numofshirts;i++){
        result = result + image ;
    }
}
second()

var third = function (a,b){
    var y = alert(a+' ' +b);
    
}
third (Anime,numofshirts);

console.log(third);
document.write(result);
document.getElementById("order").innerText="Num of Tshirts : "+numofshirts;
document.getElementById("order2").innerText="Fav Anime : "+Anime;
document.getElementById("discmsg").innerText=orderDetails;

confirm("Are you happy with the offer??")
confirm("Do you live in Amman ?");
alert("Arigatou");