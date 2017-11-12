<?php
function carousel_html($artwork){
	$output = '<div><span class="helper"></span>';
	$output .= '<div class="image-wrapper"><img src="' . $artwork["path"] . '" alt="' . $artwork["title_no"] . '">';
	// overlay
	$output .= '<ul class="overlay"><li>' . $artwork["title_no"]; 
	$output .= ', ' . $artwork["year"]; 
	if ($artwork["sold"]){
		$output = $output .  '<span class="sold"> •</span>';
	}
	$output .= '</li><li>Fra ' . $artwork["series_no"] . 
				'</li><li>' . $artwork["technique"] . ', ' . $artwork["size"] . '</li>';
	if (!$artwork["sold"]){
		$output .= '<li>Til salgs, <a href='.'"contact.php">'.'ta kontakt</a></li>';
	};
	$output .= '</ul></div>' ;
	//caption
	$output .= '<p class="caption"><span class="artwork title">' . $artwork["title_no"] . '</span>'
				  . '&nbsp; <span class="series title">' . $artwork["year"]. '</span>'  
				  . '<button class=' . '"info"' . '>i</button></p></div>';
	return $output;
}
?>