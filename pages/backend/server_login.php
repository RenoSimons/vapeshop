<?php
include("dbConnect.php");

// CONNECTION
$conn = openCon();

// LOGIN
if (isset($_POST['login_user'])) {
  $username   = $_POST['username'];
  $password      = $_POST['password'];

  $login_query = "SELECT * FROM users WHERE username='$username'";
  $result = $conn->query($login_query);
  $row = mysqli_fetch_assoc($result);

  if (mysqli_num_rows($result) == 0) {
    header('Location: login.php?error=wrongusername');
    exit();
  }
  else {     
    $pwdCheck = password_verify($password, $row['password']);
      if (!$pwdCheck) {
        header('Location: login.php?error=wrongpwd');
        exit();
      }
      else {
        session_start();
        $_SESSION['username'] = $row['username'];
        header('Location: ../index.php?login=succes');
      }   
  }
  closeCon($conn);
}    





