<?php

$koszulki = $_POST['koszulki'];
$bluzy = $_POST['bluzy'];
$czapki = $_POST['czapki'];
$suma = $koszulki * 19.99 + $bluzy * 59.99 + $czapki * 15.99;
 echo <<<end
 <h2><b>PODSUMOWANIE</b></h2><br><br>
<table border="1" cellpadding="10" cellspacing="0" >
<tr>
	<td>Koszulki(19,99zł/szt):</td>
	<td>$koszulki</td>
<tr>
</tr>
	<td>Bluzy(59,99zł/szt):</td>
	<td>$bluzy</td>
</tr>
<tr>
	<td>Czapki(15,99zł/szt):</td>
	<td>$czapki</td>
</tr>
<tr>
	<td>SUMA:</td>
	<td>$suma</td>
</tr>
</table>

<a href="index.php">Wróć do strony głównej</a>
end;
?>