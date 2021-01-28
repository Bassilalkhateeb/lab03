var Anime=prompt("Are you a fan of Aot or Bleach?");
while (Anime !== 'Aot' && Anime !== 'Bleach'){
    Anime=prompt("Are you a fan of Aot or Bleach?");
}
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
var result = '' ;

var image = ' ';
if (Anime === 'Aot'){
    image = '<img src="images/attackon.jpg"/>';

} else if (Anime === 'Bleach'){
    image = '<img src="images/bleach.jpg"/>';
}

for (var i = 0 ; i < numofshirts;i++){
    result = result + image ;
}

document.write(orderDetails);
document.write(result);

document.getElementById("order").innerText="Num of Tshirts : "+numofshirts;
document.getElementById("order2").innerText="Fav Anime : "+Anime;

confirm("Do you live in Amman ?");
alert("Arigatou");