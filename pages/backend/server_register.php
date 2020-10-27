<?php
include("dbConnect.php");

$error = false;

// CONNECTION
$conn = openCon();

// REGISTER 
if (isset($_POST['reg_user'])) {
  $username   = $_POST['username'];
  $email      = $_POST['email'];
  $password_1 = $_POST['password_1'];
  $password_2 = $_POST['password_2'];

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: register.php?error=invalidemail');
    $error = true;
  }

  else if ($password_1 != $password_2) {
   $error = true;
   header('Location: register.php?error=pwdsdonotmatch');
  }

  //CHECK FOR EXISTENCE
  $user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
  $result = $conn->query($user_check_query);
  $user = mysqli_fetch_assoc($result);

  if ($user) { 
    if ($user['username'] === $username) {
      $error = true;
      header('Location: register.php?error=usernametaken');
    }

    if ($user['email'] === $email) {
      $error = true;
      header('Location: register.php?error=emailtaken');
    }
  }

  //ENCRYPTIE
  $password = password_hash($password_1, PASSWORD_DEFAULT); 

  //INSERT IN DB
  if (!$error) {
    $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";         
    $conn->query($query);

    closeCon($conn);

    header('Location: login.php');
  }    
}


  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  
  
  

  // Finally, register user if there are no errors in the form



  //mysqli_query($db, $query);
  //$_SESSION['username'] = $username;
  //$_SESSION['success'] = "You are now logged in";
  //header('location: index.html');
  

