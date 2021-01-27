var coffetype=prompt("what do you want ?");
var numofcups=prompt("how many?") ;


var orderDetails;

if (numofcup >=1 && numofcups <3) {
    orderDetails="congrats you have a discount 25%";
} else if (numofcups > 3 && numofcups <=5){
    orderDetails="congrats you have a discount 50%";
}
