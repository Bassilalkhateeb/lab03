var Anime=prompt("What Anime is your fav?");
var numofshirts=prompt("How many Tshirts you want to order?") ;


var orderDetails;

if (numofshirts >= 1 && numofshirts <4){
    orderDetails="Congrats you have a discount 25%";
}
 else if (numofshirts > 4 && numofshirts <=7){
    orderDetails="Congrats you have a discount 50%";
}
 else if (numofshirts > 7 && numofshirts <=10){
    orderDetails="Congrats you have a discount 50% and a Figuer of your fav character";
}
 else if (numofshirts > 10){
    orderDetails="Congrats you have a discount 50% , a Figuer of your fav character , and a Manga!!!";
}

else{
    orderDetails="no discount";
}

document.write(orderDetails);

document.getElementById("order").innerText="Num of Tshirts :"+numofshirts;
document.getElementById("Congrats you have a discount 50% , a Figuer of your fav character , and a Manga!!!");
confirm("Are you happy with the offer??");
alert("Arigatou");