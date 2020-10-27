class productList {
	constructor(productType) {
		this.products = productType;
	}

	listProducts(products) {
		function detailClicked (textContent) {
			window.location.href = "../pages/productDetail.html?itemIndex="+ textContent + "?productType=" + currentProductUrl;			
		}

		var content = document.getElementById('items-box');

	 	for (let i=0; i<products.length; i+=1) {
	 		var htmlContentNode = `<div class="product-element">
					<h1>${products[i].name}</h1>
					<a><img src="${products[i].url}" class="product-image"></a>
					<p>${products[i].rating}/5<span>€${products[i].price}</span></p>
					<button class="cart-button">Add To Cart</button>
					</div>
        		`;    	      	
		 	content.innerHTML += htmlContentNode;
		 	//console.log(content)
	 	}

	 	var titles = content.getElementsByTagName("h1")
	 	var productElement = document.getElementsByClassName('product-image')
	 	
	 	for (var i = 0; i < products.length; i++) {
	 		let textContent = titles[i].textContent
	 		productElement[i].addEventListener('click', detailClicked.bind(null, textContent))
	 	}
		
		ready()

	}

	logDetails (products) {
		console.log(products.name);
	}
}

var docTitle = document.title;
var content = document.getElementById('items-box');

if (docTitle === "Liquids") {
	var currentProduct = liquids;
	var currentProductUrl = "liquids";

	var renderList = new productList(currentProduct);
	renderList.listProducts(currentProduct);
}

if (docTitle === "BeginnerModules") {
	var currentProduct = beginnerMods;
	var currentProductUrl = "beginnerMods";
	var renderList = new productList(currentProduct);
	renderList.listProducts(currentProduct);
}

if (docTitle === "AdvancedModules") {
	var currentProduct = advancedMods;
	var currentProductUrl = "advancedMods";
	var renderList = new productList(currentProduct);
	renderList.listProducts(currentProduct);
}

if (docTitle === "Accessoires") {
	var currentProduct = accessoires;
	var currentProductUrl = "accessoires";
	var renderList = new productList(currentProduct);
	renderList.listProducts(currentProduct);
}

function getSelect(selectObject) {
    var value = selectObject.value;

	if (value === "alphabet") {
		return sortAlphabet(currentProduct);
	}	

	if (value === "hilow") {
	   	return sortHiLow(currentProduct);
	}
	  	
	if (value === "lowhi") {
	   	return sortLowHi(currentProduct);
	}

	if (value === "rating") {
	 	return sortRating(currentProduct);
	} 
}

var content = document.getElementById('items-box');

function sortAlphabet(product) {
	function compare(a, b) {
		if ( a.name < b.name ) {
		  return -1;
		}
		if ( a.name > b.name ) {
		  return 1;
		}
		return 0;
	}

	product.sort(compare);
	content.innerHTML = "";

	return renderList.listProducts(product);

}

function sortHiLow(product) {
	product.sort(function(a, b) {
	   	return parseFloat(b.price) - parseFloat(a.price);
	});
	
	content.innerHTML = "";
	return renderList.listProducts(product);
}

function sortLowHi(product) {
	product.sort(function(a, b) {
	   	return parseFloat(a.price) - parseFloat(b.price);
	});
	
	content.innerHTML = "";
	return renderList.listProducts(product);
}

function sortRating(product) {
	product.sort(function(a, b) {
	   	return parseFloat(b.rating) - parseFloat(a.rating);
	});
	
	content.innerHTML = "";
	return renderList.listProducts(product);
}





//renderLiquids.listProducts(liquids);
//renderLiquids.listProducts(beginnerMods);
