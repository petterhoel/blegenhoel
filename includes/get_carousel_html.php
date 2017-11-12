<?php
function carousel_html($artwork){
  global $technique, $carousel_info; // må bruke de glbale variablene
  $artwork['technique'] =  $technique[$artwork['technique']]; // hent ut riktig teknikk fra lang.no eller it
  $output = '<div><span class="helper"></span>';
	$output .= '<div class="image-wrapper"><img src="' . $artwork["img_path"] . '" alt="' . $artwork["title"] . '">';
	// overlay
	$output .= "<ul class='overlay'><li>" . $artwork['title'];
	$output .= ", " . $artwork['production_year'];
	if ($artwork['sold']){
		$output = $output .  "<span class='sold'> solgt</span>";
	}
	$output .= "</li><li>". $carousel_info['from'] . " " . $artwork['series'] .
				"</li><li>" . $artwork['technique'] . ", " . $artwork['dimmentions'] . "</li>";
	if (!$artwork['sold']){
		$output .= "<li>".$carousel_info['for_sale'].", <a href="."'contact.php'>".$carousel_info['get_in_touch']."</a>.</li>";
	};
	$output .= "</ul></div>" ;
	//caption
	$output .= "<p class='caption'><span class='artwork title'>" . $artwork['title'] . "</span>"
				  . "&nbsp; <span class='series title'>" . $artwork['production_year']. "</span>"
				  . "<button class=" . "'info'" . ">i</button></p></div>";
	return $output;
}
?>