<!-- NIET VERWIJDEREN -->
<?php
  if (isset($_GET['update'])) {
    exec('auto_update.sh');
	sleep(4);
	echo '<meta http-equiv=Refresh content="0;url=index.php">';
  }
?>
<a href='index.php?update=true'>Update Server</a>
<!-- NIET VERWIJDEREN -->

<?php
	echo "Dit is een test en dit is nieuw";
?>