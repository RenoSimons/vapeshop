<?php include('server_register.php') ?>

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
				<h1>Register</h1>
				
				<form action="register.php" method="POST">
					<input class="text" type="text" name="username" placeholder="Username" required>
					<input class="text" type="text" name="email" placeholder="Email" required>
					<input class="text" type="password" name="password_1" placeholder="Password" required>
					<input class="text" type="password" name="password_2" placeholder="Confirm password" required>

					<?php if (isset($_GET['error'])) {
					switch ($_GET['error']) {
						case 'invalidemail':
							echo '<p class="register_error">The Email you entered is incorrect!</p>';
							break;
						
						case 'pwdsdonotmatch':
							echo '<p class="register_error">Passwords do not match!</p>';
							break;

						case 'usernametaken':
							echo '<p class="register_error">This username has already been taken!</p>';
							break;

						case 'emailtaken':
							echo '<p class="register_error">This Email has already been used!</p>';
							break;

						case 'succes':
							echo '<p class="register_error">Register succes! Redirecting...</p>';
							break;
					}
				} ?>
					<button class="submit-btn" type="submit" name="reg_user">Register </button>
				</form>


				<div id="login-section">
					<p>Click <a href="login.php">Here</a> to login</p>
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