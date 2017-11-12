<?php
include_once 'lang/common.php';
include 'includes/head.php';
include 'includes/body.php';
?>
<article id="project-text">
	<!-- needs language selection -->

	<?php 
    if ($_GET['lang'] == "it") {
        include "includes/articles/natura.it.php";
    } else {
        include "includes/articles/natura.no.php";
    }
    ?>
</article>

</div><!-- end container -->
<?php  include "includes/scripts.php"; ?>
</body>
</html>