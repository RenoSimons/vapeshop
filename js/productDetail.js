var url = window.location.href;
var qparts = url.split("?");

//console.log(qparts)

var itemTitleUnsplit = qparts[1].split("=");
var productListUnsplit = qparts[2].split("=");
var itemTitle = itemTitleUnsplit[1];

if (itemTitle.includes("%20")) {
	itemTitle = itemTitle.split('%').join('');
	itemTitle = itemTitle.split('20').join(' ');
}

//console.log(itemTitle)

var productList = productListUnsplit[1];

var products;

if (productList === "liquids") {
	products = liquids;
}
if (productList === "beginnerMods") {
	products = beginnerMods;
}
if (productList === "advancedMods") {
	products = advancedMods;
}
if (productList === "accessoires") {
	products = accessoires;
}

var itemIndex;

for (i=0; i<products.length; i++) {
	if (products[i].name.includes(itemTitle)) {
		itemIndex = i;
	}
}

//console.log(products)

var content = document.getElementById('items-box');
var htmlContentNode = `<div class="product-description">
							<img class="product-image" src="${products[itemIndex].url}">
							<div>
								<h1>${products[itemIndex].name}</h1>
								<p>${products[itemIndex].description}</p>					
								<p><span>€${products[itemIndex].price}</span></p>
								<p>Rating: ${products[itemIndex].rating}/5</p>
								<button class="cart-button">Add To Cart</button>
							</div>
						</div>
        		`;    	      	
content.innerHTML += htmlContentNode;
var addToCartButton = document.getElementsByClassName('cart-button');

var previousIndex = [];
var randomIndex;
var contentPromo = document.getElementById('product-promotion-box');

for (i=0; i<5; i++) {
	randomIndex = Math.floor(Math.random() * 12)

	while (previousIndex.includes(randomIndex)) {
		randomIndex = Math.floor(Math.random() * 12)
	}

	var textContent = products[randomIndex].name;

	var productUrl = "productDetail.html?itemIndex=" + textContent + "?productType=" + productList;
	//console.log(productUrl)

	if (/\s/.test(productUrl)) {
		productUrl = productUrl.split(' ').join('%20')
	}
	//console.log(productUrl)


	var htmlContentNodePromo = `<div class="product-promotion">
						<img class="product-image" src="${products[randomIndex].url}">
							<div>
								<a href=${productUrl}><h1>${products[randomIndex].name}</h1></a>				
								<p><span>€${products[randomIndex].price}</span></p>
							</div>`;

	previousIndex.push(randomIndex) 
	contentPromo.innerHTML += htmlContentNodePromo;
}


		



