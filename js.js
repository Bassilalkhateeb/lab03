var Anime=prompt("What Anime is your fav?");
var numofshirts=prompt("How many Tshirts you want to order?") ;


var orderDetails;

if (numofshirts >= 1 && numofshirts <3){
    orderDetails="Congrats you have a discount 25%";
}
 else if (numofshirts > 3 && numofshirts <=5){
    orderDetails="Congrats you have a discount 50%";
}
 else if (numofshirts > 6 && numofshirts <=10){
    orderDetails="Congrats you have a discount 50% and a Figuer of your fav character";
}
 else if (numofshirts > 10){
    orderDetails="Congrats you have a discount 50% , a Figuer of your fav character , and a Manga!!!";
}

else{
    orderDetails="no discount";
}

document.getwrite (orderDetails);
document.getElementById("order").innerText-Anime;
document.getElementById("order").innerText-numofshirts;

confirm("Are you happy with the offer??");
alert("Arigatou");