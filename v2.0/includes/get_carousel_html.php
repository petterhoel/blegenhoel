<?php
function get_carousel_html($artwork){
	$output = '<div><span class="helper"></span>';
	$output = $output . '<div class="image-wrapper"><img src="' . $artwork["path"] . '" alt="' . $artwork["title"] . '">';
	// overlay
	$output = $output . '<ul class="overlay"><li>' . $artwork["title"]; 
	$output = $output . ', ' . $artwork["year"]; 
	if ($artwork["sold"]){
		$output = $output .  '<span class="sold"> •</span>';
	}
	$output = $output . '</li><li>Fra ' . $artwork["series"] . 
						'</li><li>' . $artwork["technique"] . ', ' . $artwork["size"] . '</li>';
	if (!$artwork["sold"]){
		$output = $output .  '<li>Til salgs, <a href='.'"contact.php">'.'ta kontakt</a></li>';
	};
	$output = $output . '</ul></div>' ;
	//caption
	$output = $output . '<p class="caption"><span class="artwork title">' . $artwork["title"] . '</span>'
					  . '&nbsp; <span class="series title">' . $artwork["year"]. '</span>'  
					  . '<button class=' . '"info"' . '>i</button></p></div>';
	return $output;
}
?>