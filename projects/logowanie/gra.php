<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>GRA</title>
</head>
<body>


<?php

echo "<p>Witaj<b> ".$_SESSION['user']."</b>!</p>";
echo "<p><b>Twój email to:</b> ".$_SESSION['email']."</p>";
echo "<p><b>Kontro premium jest ważne : </b>".$_SESSION['dnipremium']." dni</p>";

?>

</body>
</html>