<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vaping Website</title>
	<link rel="stylesheet" href="../css/swiper.min.css">
	<link rel="stylesheet" href="../css/styles.css">
	<link rel="stylesheet" href="../css/animations.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
</head>
<body>
	<main>
		<header>
			<h1 id="delivery-message">FREE DELIVIRY FROM €29,99</h1>
						
			<?php if(isset($_SESSION['username'])) {
						echo "you are logged in!";
						echo "<form action='backend/logout.php' method='POST'>
								<button type='submit' name='logout-submit'>Logout</button>
							</form>";
					} else {
						echo "you are logged out!";
						echo "<form action='backend/login.php' method='POST'>
								<button type='submit' name='login-submit'>Login</button>
							</form>";
					} ?>
		</header>
		<div id="landing">
			<div id="landing-text">
				<div id="landing-text-inner">
					<h1>Vaping Store</h1>
					<h2>Created by Reno Simons</h2>			
				</div>
			</div>
			<div id="landing-image">
				<img src="../images/vaping-landing.jpg" alt="">
			</div>

			<nav class="navbar">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li>
						<div class="dropdown">
							<button class="dropbtn">Our Products</button>
							<div class="dropdown-content">
							    <a href="beginnerModules.html">Beginner Modules</a>
							    <a href="advancedModules.html">Advanced Modules</a>
							    <a href="accessoires.html">Accessoires</a>
							    <a href="liquids.html">E-liquids</a>
							</div>
						</div>
					</li>
					<li><a href="">Our Promotions</a></li>
					<li><a href="reviews.html">Reviews</a></li>
					<li><a href="">Our Stores</a></li>
				</ul>				
			</nav>
		</div>
	
		<div id="tweets-sidebar" class="hidden">
			<a class="twitter-timeline" data-width="200" data-height="1300" data-theme="light" data-tweet-limit="3" 
             href="https://twitter.com/GuideToVaping?ref_src=twsrc%5Etfw">Tweets by GuideToVaping</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>

		<div>
			<button class ="show-twitter-btn" type="button" onClick="showTwitterFeed();">Show Twitter Feed</button>		
		</div>

		<div id="content">
			<div id="our-vision">
				<h2 class="title-striped"><span class="white-background">Our Vision</span></h2>
				<p>"If you are an all-day smoker and you want to change your habit of inhaling more than 100 toxic chemicals, this could be intersting for you. Vaping is the gateway to a cigarette-free life when done correctly. Modify you favorite way of inhaling smoke, the taste and the right amount of nicotine."</p>
				<p id="center">Explore and find what suits you well! </p>			
			</div>

			<div id="our-products">
				<h2 class="title-striped"><span class="white-background">Our Products</span></h2>
			</div>
			
			<div id="flexbox-items">
				<div class="product-title">				
					<h3><span>Beginner Modules</span></h3>
					<a href="beginnerModules.html"><img src="../images/beginner.jpg" alt=""></a>
				</div>

				<div class="product-title">
					<h3><span>Advanced Modules</span></h3>
					<a href="advancedModules.html"><img src="../images/advanced.jpg" alt=""></a>
				</div>

				<div class="product-title">
					<h3><span>Accessoires</span></h3>
					<a href="accessoires.html"><img src="../images/accessoires.jpg" alt=""></a>
				</div>

				<div class="product-title">
					<h3><span>E-Liquids</span></h3>
					<a href="liquids.html"><img src="../images/juices.jpg" alt=""></a>
				</div>
			</div>

			<div id="our-promotions">
				<h2 class="title-striped"><span class="white-background2">Our Promotions</span></h2>
				
				<div class="swiper-container">
				    <div class="swiper-wrapper">

				      <div class="swiper-slide">
						<h1 class="promo-title">IVG Summer Blaze</h1>
				      	<img src="../images/summer-blaze.jpg" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€9,75</span><span class="red">€5,95</span></h2>
				      	</div>
				      </div>

				      <div class="swiper-slide">
						<h1 class="promo-title">IVG Pink Lemonade</h1>
				      	<img src="../images/pink-lemonade.jpg" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€8,75</span><span class="red">€5,95</span></h2>
				      	</div>
				      </div>

				      <div class="swiper-slide">
						<h1 class="promo-title">Twelve Monkeys Harambe</h1>
				      	<img src="../images/harambe.jpg" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€9,75</span><span class="red">€5,95</span></h2>
				      	</div>
				      </div>

				      <div class="swiper-slide">
						<h1 class="promo-title">Pukka Juice Rainbow Blaze</h1>
				      	<img src="../images/pukka-juice.png" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€9,75</span><span class="red">€5,95</span></h2>
				      	</div>
				      </div>

				      <div class="swiper-slide">
						<h1 class="promo-title">Dinner Lady Watermelon Slices</h1>
				      	<img src="../images/watermelon.jpg" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€5,95</span><span class="red">€4,95</span></h2>
				      	</div>
				      </div>

				      <div class="swiper-slide">
						<h1 class="promo-title">Zeus Juice Black Reloaded</h1>
				      	<img src="../images/black.jpg" alt="">
				      	<div class="reductions">
				      		<h2 class="original-price"><span class="striped">€6,00</span><span class="red">€3,99</span></h2>
				      	</div>
				      </div>
				    </div>
				    <!-- Add Pagination -->
				    <div class="swiper-pagination"></div>
			  	</div>

			</div>

			<div id="service-contact">
				<img id="contact" src="../images/contact.png" alt="">
				<h1>Service and contact</h1>
				<img id="order" src="../images/order.png" alt="">
				<h1>Follow your order</h1>
				<img id="questions" src="../images/questions.png" alt="">
				<h1>Do you have any questions?</h1>
			</div>	

			<div id="our-stores">
				<h2 class="title-striped"><span class="white-background">Find Our Stores</span></h2>
			</div>

			<div #centered-map>
		    	<div id="map"></div>
			</div>
		</div>
	</main>

	<footer>	
		<div id="legal-info">
			<h1>Terms & Conditions</h1>
			<h2>Privacy Policy</h2>
			<h2>Terms & Conditions</h2>
			<h2>Cookie Policy</h2>
		</div>

		<div class="socialmedia-icons">
			<img class="social-icon" src="../images/twitter.png" alt="">
			<img class="social-icon" src="../images/facebook.png" alt="">
			<img class="social-icon" src="../images/instagram.png" alt="">
		</div>
	</footer>

	<script src="../js/swiper.min.js"></script>
	<script src="../js/main.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD22QUBGWvcXZHK8qHYTXo3qwyg6nUKoDM&callback=initMap"
  		type="text/javascript">
  	</script>

</body>
</html>

