class productList {
	constructor(liqs) {
		this.liqs = liqs;
	}

	getSelect(selectObject) {
	    var value = selectObject.value;

		if (value === "alphabet") {
			return sortAlphabet(liquids);
		}	

		if (value === "hilow") {
		   	return sortHiLow(liquids);
		}
		  	
		if (value === "lowhi") {
		   	return sortLowHi(liquids);
		}

		if (value === "rating") {
		 	return sortRating(liquids);
		} 
	}

	sortAlphabet(liqs) {
		function compare(a, b) {
			if ( a.name < b.name ) {
			  return -1;
			}
			if ( a.name > b.name ) {
			  return 1;
			}
			return 0;
		}
		liquids.sort(compare);
		var content = document.getElementById('items-box');
		content.innerHTML = "";
		return listProducts(liquids);
	}

	sortHiLow(liqs) {
		liquids.sort(function(a, b) {
	    	return parseFloat(b.price) - parseFloat(a.price);
		});

		content.innerHTML = "";
		listProducts(liqs, content);
	}

	sortLowHi(liqs) {
		liquids.sort(function(a, b) {
	    	return parseFloat(a.price) - parseFloat(b.price);
		});
		
		content.innerHTML = "";
		listProducts(liqs, content);
	}

	sortRating(liqs) {
		liquids.sort(function(a, b) {
	    	return parseFloat(b.rating) - parseFloat(a.rating);
		});
		
		content.innerHTML = "";
		listProducts(liqs, content);
	}

	listProducts(liqs) {
		var content = document.getElementById('items-box');
	 	for (let i=0; i<liqs.length; i+=1) {
		 	var node = document.createElement("div");
		 	var imgNode = document.createElement("img");
		 	var h = document.createElement("h1");
		 	var p = document.createElement("p");
		 	var span = document.createElement("span");

		 	var cartBtn = document.createElement("button");

		 	node.setAttribute("class", "product-element");
		 	cartBtn.setAttribute("class", "cart-button");

		 	var titleNode = document.createTextNode(liqs[i].name);
		 	imgNode.src = liqs[i].url;
		 	var priceNode = document.createTextNode(liqs[i].rating + "/5");
		 	priceNode.apped
		 	cartBtn.innerHTML = "Add To Cart";
			
		 	h.append(titleNode);
		 	p.append(priceNode);
		 	span.innerHTML = "€" + liqs[i].price ;


		 	p.appendChild(span);
		 	node.appendChild(h); 
		 	node.append(imgNode);
		 	node.appendChild(p);
		 	node.appendChild(cartBtn);
		 	
		 	content.appendChild(node);
	 	}
	}
}

var docTitle = document.title;



if (docTitle === "Liquids") {
	var renderLiquids = new productList(liquids);
	renderLiquids.listProducts(liquids);
}

if (docTitle === "BeginnerModules") {
	var renderbeginnerMods = new productList(beginnerMods);
	renderbeginnerMods.listProducts(beginnerMods);
}

if (docTitle === "AdvancedModules") {
	var renderLiquids = new productList(advancedModules);
	renderLiquids.listProducts(advancedModules);
}

if (docTitle === "Accessoires") {
	var renderbeginnerMods = new productList(accessoires);
	renderbeginnerMods.listProducts(accessoires);
}



//renderLiquids.listProducts(liquids);
//renderLiquids.listProducts(beginnerMods);

var htmlContent = '<div class="product-element">
					<h1>Watermelon</h1>
					<img src="../images/watermelon.jpg">
					<p>4,5/5<span>€4.95</span></p>
					<button class="cart-button">Add To Cart</button>
					</div>'

					