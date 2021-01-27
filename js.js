var Anime=prompt("What Anime is your fav?");
var numofshirts=prompt("How many Tshirts you want to order?");

var orderDetails;

if (numofshirts >= 1 && numofshirts <= 4){

    orderDetails="Congrats you have a discount 25%";
    confirm("Are you happy with the offer??")
}
 else if (numofshirts > 4 && numofshirts <=8){
    orderDetails="Congrats you have a discount 50%";
    confirm("Are you happy with the offer??")
}
 else if (numofshirts > 8 && numofshirts <=12){
    orderDetails="Congrats you have a discount 50% and a Figuer of your fav character";
    confirm("Are you happy with the offer??")
}
 else if (numofshirts > 12){
    orderDetails="Congrats you have a discount 50% , a Figuer of your fav character , and a Manga!!!";
    confirm("Are you happy with the offer??")
}

else {
    orderDetails="No discount :(";
    confirm("You have to buy in order to get a discount!")
}

document.write(orderDetails);

document.getElementById("order").innerText="Num of Tshirts : "+numofshirts;
document.getElementById("order2").innerText="Fav Anime : "+Anime;

confirm("Do you live in Amman ?");
alert("Arigatou");