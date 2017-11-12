<?php


function carousel_html($artwork){
	$output = '<div><span class="helper"></span>';
	$output = $output . '<div class="image-wrapper"><img src="' . $artwork["path"] . '" alt="' . $artwork["title_it"] . '">';
	// overlay
	$output = $output . '<ul class="overlay"><li>' . $artwork["title_it"]; 
	$output = $output . ', ' . $artwork["year"]; 
	if ($artwork["sold"]){
		$output = $output .  '<span class="sold"> •</span>';
	}
	$output = $output . '</li><li>Da ' . $artwork["series_it"] . 
						'</li><li>' . $artwork["technique"] . ', ' . $artwork["size"] . '</li>';
	if (!$artwork["sold"]){
		$output = $output .  '<li>In vendita, <a href='.'"contact.php">'.'contatti</a></li>';
	};
	$output = $output . '</ul></div>' ;
	//caption
	$output = $output . '<p class="caption"><span class="artwork title">' . $artwork["title_it"] . '</span>'
					  . '&nbsp; <span class="series title">' . $artwork["year"]. '</span>'  
					  . '<button class=' . '"info"' . '>i</button></p></div>';
	return $output;
}
?>