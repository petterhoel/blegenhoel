<?php
include_once 'lang/common.php';
include 'includes/head.php'
?>

<body>
<div class="page-wrapper">
<?php include "includes/header.php" ?>
<?php include "includes/menu.php" ?>

	<section class="carousel" id="carousel">
	  <?php
	  include("img-natura-preview/art_work_info.php");
	  //put all images in carousel
	  $carousel_html = "";
	  foreach($artworks as $artwork){
	    $carousel_html = $carousel_html . get_carousel_html($artwork);
	  }
	  echo $carousel_html;
	  ?>
	</section>

</div><!-- end page-wrapper -->

<?php  include "includes/scripts.php" ?>
</body>
</html>