<?php
include_once 'lang/common.php';
include 'includes/head.php';
include 'includes/body.php';
include 'includes/carousel_loader.php';
?>
<section class="carousel" id="carousel">
	<?php

	$carousel_name = '"natura+paper"';
	echo load_carousel($carousel_name);

	?>
</section>
</div><!-- end container -->
<?php  include "includes/scripts.php"; ?>
</body>
</html>