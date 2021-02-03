
var order = prompt("what do you want turkish or cappuccino?");

while(order !=="turkish" && order !=="cappuccino"){
    order = prompt("what do you want turkish or cappuccino?");
}

var itemOrder ='';
if (order === 'cappuccino'){
    itemOrder = '<image src="logo.jpg"/>';
} else if(order === 'turkish'){
    itemOrder = '<image src="logo1.png"/>';
}
var noCups = prompt('How many cups do you want ?');

var result = '';
for (var i=0 ; i<noCups ;i++){
    result = result + itemOrder;
}

document.write(result);