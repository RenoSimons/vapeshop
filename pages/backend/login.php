<?php include('server_login.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Liquids</title>
	<link rel="stylesheet" href="../../css/styles.css">
	<link rel="stylesheet" href="../css/liquids.css">
	<link rel="stylesheet" href="../css/animations.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>
<body>
	<header>
		<h1 id="delivery-message">FREE DELIVIRY FROM €29,99</h1>
	</header>
		<div id="landing">
			<div id="landing-text">
				<div id="landing-text-inner">
					<h1>Vaping Store</h1>
					<h2>Created by Reno Simons</h2>			
				</div>
			</div>
			<div id="landing-image">
				<img src="../../images/vaping-landing.jpg" alt="">
			</div>

			<nav class="navbar">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li>
						<div class="dropdown">
							<button class="dropbtn">Our Products</button>
							<div class="dropdown-content">
							    <a href="../beginnerModules.html">Beginner Modules</a>
							    <a href="../advancedModules.html">Advanced Modules</a>
							    <a href="../accessoires.html">Accessoires</a>
							    <a href="../liquids.html">E-liquids</a>
							</div>
						</div>
					</li>
					<li><a href="">Our Promotions</a></li>
					<li><a href="">Orders</a></li>
					<li><a href="">Our Stores</a></li>
				</ul>				
			</nav>
		</div>

		<div id="login-section">
			<div class="login-form">
			<h1>Login Form</h1>
			<form action="login.php" method="POST">
				<input class="text"type="text" name="username" placeholder="Username" required>
				<input class="text"type="password" name="password" placeholder="Password" required>
				<?php if (isset($_GET['error'])) {
					switch ($_GET['error']) {
						case 'wrongusername':
							echo '<p class="register_error">The Username you entered is incorrect!</p>';
							break;
						
						case 'wrongpwd':
							echo '<p class="register_error">The Password you entered is incorrect!</p>';
							break;
					}
				} ?>
				<button class="submit-btn" type="submit" name="login_user">Log in </button>
			</form>

			<div id="register-section">
				<p>Click <a href="register.php">Here</a> to register</p>
			</div>
		</div>

		

		</div>

	<footer>
		<div id="legal-info">
			<h1>Terms & Conditions</h1>
			<h2>Privacy Policy</h2>
			<h2>Terms & Conditions</h2>
			<h2>Cookie Policy</h2>
		</div>
		<div class="socialmedia-icons">
			<img class="social-icon" src="../../images/twitter.png" alt="">
			<img class="social-icon" src="../../images/facebook.png" alt="">
			<img class="social-icon" src="../../images/instagram.png" alt="">
		</div>
	</footer>
	
</body>
</html>