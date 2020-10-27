let reviews = [
	{
		name: "Josh Hapkinson",
		profilePhoto: "https://picsum.photos/200",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voluptatibus magni ducimus fuga est, iste, voluptas quibusdam quas aperiam maxime praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "****",
		date: "10/11/2002"
	},
	{
		name: "Bryan Adams",
		profilePhoto: "https://picsum.photos/201",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
		rating: "*****",
		date: "10/8/2003"
	},
	{
		name: "Brad Pitt",
		profilePhoto: "https://picsum.photos/202",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voluptatibus magni",
		rating: "****",
		date: "5/3/2004"
	},
	{
		name: "Bob Marley",
		profilePhoto: "https://picsum.photos/199",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voluptatibus magni ducimus fuga est, iste, volupntium delectus error necessitatibus animi similique.",
		rating: "****",
		date: "12/11/2006"
	},
	{
		name: "Josh Hapkinson",
		profilePhoto: "https://picsum.photos/198",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voluptatibus magni ducimus fuga est, iste, voluptas quibusdam quas aperiam maxime praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "****",
		date: "10/11/2007"
	},
	{
		name: "Ford Harrison",
		profilePhoto: "https://picsum.photos/197",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voe praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "***",
		date: "6/10/2009"
	},
	{
		name: "Big Joe",
		profilePhoto: "https://picsum.photos/206",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  voluptas quibusdam quas aperiam maxime praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "****",
		date: "10/11/2011"
	},
	{
		name: "Donald Trump",
		profilePhoto: "https://picsum.photos/205",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. voluptas quientium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "****",
		date: "10/11/2013"
	},
	{
		name: "John Wick",
		profilePhoto: "https://picsum.photos/204",
		review: "Lorem ipsum dolor sit amet, consectetur adipim quas aperiam maxime praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "*****",
		date: "10/11/2015"
	},
	{
		name: "Frodo Baggins",
		profilePhoto: "https://picsum.photos/195",
		review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat voluptatibus magni ducimus fuga est, iste, voluptas quibusdam quas aperiam maxime praesentium delectus eius ad nobis error necessitatibus animi similique.",
		rating: "****",
		date: "10/11/2018"
	},
]

function listReviews(reviews) {
	var content = document.getElementById('reviews-content');

	for (let i=0; i<reviews.length; i+=1) {
	 	var htmlContentNode = `<div class="review-element">
	 		<div class="review-photo">
	 			<img src="${reviews[i].profilePhoto}" class="user-image">
	 		</div>
	 		<div class="review-content">
				<h1>${reviews[i].name}</h1>
				<div id=${i}></div>
				<p>${reviews[i].review}</p>
				<p>${reviews[i].date}</p>
			</div>
		
			</div>
       	`;    	      	
	 	content.innerHTML += htmlContentNode;

	 	var htmlContentImgNode = ""

		var imgContent = document.getElementById(i)

		for (let j=0; j<reviews[i].rating.length; j+=1) {
			htmlContentImgNode += `<img class="rating-star" src="../images/star.png"> 		
       		`;
		}

		imgContent.innerHTML += htmlContentImgNode;
	}
}

listReviews(reviews)

textInput1 = document.querySelector("#form > form > p:nth-child(2) > input[type=text]")
radioInput = document.querySelector("#selector")
reviewInput = document.querySelector("#form > form > input.input-review")
submitButton = document.querySelector("#form > form > input[type=submit]:nth-child(7)")

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
   	handleData();
});

function handleData() {
	var today = new Date();
	var date = today.getDate() +'/'+ (today.getMonth()+1) +'/'+ today.getFullYear();

	if (textInput1.value.length >= 1 && reviewInput.value.length >= 1 && radioInput.value.length >= 1) {
		let newReview = {
			name: textInput1.value,
			profilePhoto: "https://picsum.photos/206",
			review: reviewInput.value,
			rating: radioInput.value,
			date: date
		}
		var content = document.getElementById('reviews-content');
		content.innerHTML = "";
		reviews.push(newReview)
		listReviews(reviews)

		var reviewsection = document.querySelector("#review-section")
		reviewsection.remove()

		var htmlThankNode = `<h1 id="thankyou-msg">Thank you for writing a review on our website!</h1>`
		content.innerHTML += htmlThankNode;
	} else {
		alert("Please fill in all fields!")
	}	
}


// get text inputs
// add text inputs in object
// add object to array 
// rerender array