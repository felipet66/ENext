var xhr = new XMLHttpRequest();

xhr.open("GET", "potions.json");

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

xhr.addEventListener("load", function() {
	var response = xhr.responseText;
	var potions = JSON.parse(response);
	//console.log( potions );
	var divHTML = "";
	var img = "";
	var name = "";
	var price = "";
	var id = potions.potions;

	for (var i = 1; i <= ObjectLength(id); i++) {

		img = potions.potions[i].image;
		name = potions.potions[i].name;
		price = potions.potions[i].price;
		ingredientes = potions.potions[i].ingredients + " ";
		divHTML += "<div class='col-md-4' id='potion"+i+"' onclick='detalhesPotion("+i+")' data-ingredientes='"+ingredientes+"'>";
		divHTML += "<img class='img-fluid' width='350' src='assets/img/products/"+img+"'>";
		divHTML += "<p style='text-align: center'><strong>"+name+" </strong><span class='color-primary'>"+price+"</p>";
		divHTML += "</div>";
	}
		potion = document.getElementById('potion');
		potion.innerHTML = divHTML;
});
function detalhesPotion( id ){
	var p = document.getElementById('potion'+id);
	swal("Ingredientes", p.dataset.ingredientes);
}

xhr.send();