<header> 
	<div class="menu-btn"></div>
	<h1><a href="index.php"></a></h1>
    <ul class="language-selector">
        <li <?php  if ($language == 'no') echo 'class="active" ' ?>><a href="<?php echo basename($_SERVER['PHP_SELF']) . "?lang=no";?>">NO</a></li
       ><li <?php  if ($language == 'it') echo 'class="active" ' ?>><a  href="<?php echo basename($_SERVER['PHP_SELF']) . "?lang=it";?>">IT</a></li>
    </ul>
</header>