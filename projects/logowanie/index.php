

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>GRA</title>
</head>
<body>


<form action="zaloguj.php" method="post">
	Login: <input type="text" name="login"><br>
	Hasło: <input type="password" name="password"><br><br>
			<input type="submit" name="submit" value="Zaloguj">
</form>
<?php
session_start();
if ((isset($_SESSION['blad']))&&($_SESSION['blad']==true))
echo '<font color="red">Nieprawidłowy login lub hasło</font>';
?>

</body>
</html>