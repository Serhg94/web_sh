<?php
	$link = mysql_connect('localhost', 'root', '');
	if (!$link) {
		die('Ошибка соединения: ' . mysql_error());
	}
	if (!mysql_select_db("smarthouse")) {
		echo "Ошибка выбора базы данных smarthouse: " . mysql_error();
		exit;
	}
	mysql_set_charset('utf8');
	$sql = "SELECT * FROM `events` ORDER BY `idevents` DESC LIMIT 100";
	$result = mysql_query($sql);
	if (!$result) {
		echo "Ошибка выполнения запроса: " . mysql_error();
		exit;
	}
	if (mysql_num_rows($result) == 0) {
		echo "Нет событий.";
		exit;
	}
	while($row = mysql_fetch_assoc($result)) {
		$row["description"] = mb_convert_encoding($row["description"], "UTF-8", "auto");
		echo  "<b>" . $row["time"] .
			"  " . "</b>" . $row["description"] . "<br><br>";
	}
	mysql_free_result($result);
	mysql_close($link);
?>

