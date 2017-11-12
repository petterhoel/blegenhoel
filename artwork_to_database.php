<?php
ini_set('display_errors', 1); // remove before prod
error_reporting(E_ALL); // remove before prod
?>


<h1>La oss legge inn data</h1>
<?php

$artworks = array();
$artworks[0] = array(
    "title_no" => "Motstandskraft",
    "title_it" => "La forza della resistenza",
    "title_en" => "Resistance",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-01.jpg"
);
$artworks[1] = array(
    "title_no" => "Varsel",
    "title_it" => "Avvertimento",
    "title_en" => "Wistle blow",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-02.jpg"
);
$artworks[2] = array(
    "title_no" => "Smerte",
    "title_it" => "Dolore",
    "title_en" => "Agony",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-03.jpg"
);
$artworks[3] = array(
    "title_no" => "Morgensang",
    "title_it" => "Canzone del mattino",
    "title_en" => "Morning Song",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-04.jpg"
);
$artworks[4] = array(
    "title_no" => "Fly lille fugl",
    "title_it" => "Vola uccellino",
    "title_en" => "Little Bird, Fly",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-05.jpg"
);
$artworks[5] = array(
    "title_no" => "Forkledning",
    "title_it" => "Travestimento",
    "title_en" => "Disguise",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/natura/A4-1-06.jpg"
);
$artworks[6] = array(
    "title_no" => "Forsvarsposisjon",
    "title_it" => "Posizione di difesa",
    "title_en" => "Defence Stance",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-07.jpg"
);
$artworks[7] = array(
    "title_no" => "Portrett",
    "title_it" => "Ritratto",
    "title_en" => "Portrait",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-08.jpg"
);
$artworks[8] = array(
    "title_no" => "Kjærtegn",
    "title_it" => "Carezza",
    "title_en" => "Caress",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-09.jpg"
);
$artworks[9] = array(
    "title_no" => "Sjelden fugl",
    "title_it" => "Un uccello raro",
    "title_en" => "Rare Bird",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-10.jpg"
);
$artworks[10] = array(
    "title_no" => "Hårsår",
    "title_it" => "Permaloso",
    "title_en" => "Touchy",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-11.jpg"
);
$artworks[11] = array(
    "title_no" => "Studiofugl",
    "title_it" => "Il merlo dello studio",
    "title_en" => "Studio Bird",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-12.jpg"
);
$artworks[12] = array(
    "title_no" => "Litt kjent figur",
    "title_it" => "Figura un po’ conosciuta",
    "title_en" => "Slightly Familiar Bird",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-13.jpg"
);
$artworks[13] = array(
    "title_no" => "Kittelsens katt",
    "title_it" => "Il gatto di Kittelsen",
    "title_en" => "Kittelsen's Cat",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-14.jpg"
);
$artworks[14] = array(
    "title_no" => "Kjernefamilie",
    "title_it" => "La famiglia",
    "title_en" => "Conjugal Family",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-15.jpg"
);
$artworks[15] = array(
    "title_no" => "Hardfør plante",
    "title_it" => "Pianta resistente",
    "title_en" => "Hardy Plant",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-16.jpg"
);
$artworks[16] = array(
    "title_no" => "Vinter",
    "title_it" => "Inverno",
    "title_en" => "Winter",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-17.jpg"
);
$artworks[17] = array(
    "title_no" => "Jakt",
    "title_it" => "Caccia",
    "title_en" => "Hunt",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "28,3 x 21 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A4-1-18.jpg"
);

$artworks[18] = array(
    "title_no" => "Natura +",
    "title_it" => "Natura +",
    "title_en" => "Natura +",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-07.jpg"
);
$artworks[19] = array(
    "title_no" => "Gudinne mot overmakten",
    "title_it" => "La dea contro la forza superiore",
    "title_en" => "The Goddess Against Preponderance",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 73 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-02.jpg"
);
$artworks[20] = array(
    "title_no" => "Natt-tjern",
    "title_it" => "Lo stagno notturno",
    "title_en" => "Nocturnal Pond",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 73 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-03.jpg"
);
$artworks[21] = array(
    "title_no" => "Sol etter regn",
    "title_it" => "Sole dopo la pioggia",
    "title_en" => "The Sun After the Rain",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-04.jpg"
);
$artworks[22] = array(
    "title_no" => "Stor elv",
    "title_it" => "Il grande fiume",
    "title_en" => "Great River",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-05.jpg"
);
$artworks[23] = array(
    "title_no" => "Fri flyt",
    "title_it" => "Il libero fluire",
    "title_en" => "Free Flow",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-06.jpg"
);
$artworks[24] = array(
	"title_no" => "Syklus; sakte, sakte",
	"title_it" => "Ciclo; lento, lento",
	"title_en" => "Cycle; slow, slow",
	"series_no" => "Natura +",
	"series_it" => "Natura +",
	"series_en" => "Natura +",
	"technique" => 5,
	"size" => "120 x 90 cm",
	"year" => "2012",
	"sold" => False,
    "buyer" => "",
	"display" => False,
    "path" => "img/natura/oil-01.jpg"
);
$artworks[25] = array(
    "title_no" => "Sirkus Antico",
    "title_it" => "Circo Antico",
    "title_en" => "Circus Antico",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-08.jpg"
);
$artworks[26] = array(
    "title_no" => "Tidlig vår",
    "title_it" => "L’ inizio della primavera",
    "title_en" => "Early Spring",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "60 x 50 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-09.jpg"
);
$artworks[27] = array(
    "title_no" => "Tåken letter",
    "title_it" => "Si alza la nebbia",
    "title_en" => "Fog Clearing",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "50 x 70 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-10.jpg"
);
$artworks[28] = array(
    "title_no" => "Endelig et øyeblikks fred",
    "title_it" => "Finalmente un momento di pace",
    "title_en" => "Finally a Moment of Peace",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "50 x 70 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-11.jpg"
);
$artworks[29] = array(
    "title_no" => "Ved Tevere",
    "title_it" => "Sul Tevere",
    "title_en" => "By the Tiber",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "50 x 70 cm",
    "year" => "2012",
    "sold" => true,
    "buyer" => "???",
    "display" => True,
    "path" => "img/natura/oil-12.jpg"
);
$artworks[30] = array(
    "title_no" => "Tid",
    "title_it" => "Il tempo",
    "title_en" => "Time",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "50 x 40 cm",
    "year" => "2013",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-13.jpg"
);
$artworks[31] = array(
    "title_no" => "Gul kjærlighet",
    "title_it" => "Amore giallo",
    "title_en" => "Yellow Love",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "35 x 27 cm",
    "year" => "2013",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/natura/oil-14.jpg"
);
$artworks[32] = array(
    "title_no" => "Lykkerus",
    "title_it" => "Gioiosa ebbrezza",
    "title_en" => "Euphoria",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "30 x 24 cm",
    "year" => "2012",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/natura/oil-15.jpg"
);
$artworks[33] = array(
    "title_no" => "Figurer i himmelstorm",
    "title_it" => "Figure nel cielo burracoso",
    "title_en" => "Figures in Storm",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "30 x 24 cm",
    "year" => "2012",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/oil-16.jpg"
);
$artworks[34] = array(
    "title_no" => "Begrenset revir",
    "title_it" => "Territoro limitato",
    "title_en" => "Limited Territory",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 5,
    "size" => "30 x 40 cm",
    "year" => "2012",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/natura/oil-17.jpg"
);



$artworks[35] = array(
    "title_no" => "Tidlig høst",
    "title_it" => "L’ inizio dell’ autunno",
    "title_en" => "Early Autumn",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 10,
    "size" => "19, 5 x 23 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-01.jpg"
);
$artworks[36] = array(
    "title_no" => "Natteliv",
    "title_it" => "Vita notturna",
    "title_en" => "Night life",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 10,
    "size" => "23 x 32, 5 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-02.jpg"
);
$artworks[37] = array(
    "title_no" => "Aldri alene",
    "title_it" => "Mai soli",
    "title_en" => "Never Alone",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 10,
    "size" => "23 x 19, 5 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-03.jpg"
);
$artworks[38] = array(
    "title_no" => "Blå dagdrøm",
    "title_it" => "Un sogno blu ad occhi aperti",
    "title_en" => "Blue Daydream",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 10,
    "size" => "19, 5 x 23 cm",
    "year" => "2011",
    "sold" => "True",
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-1-04.jpg"
);
$artworks[39] = array(
    "title_no" => "Det søte liv",
    "title_it" => "La dolce vita",
    "title_en" => "The Good Life",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "24 x 17 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-05.jpg"
);
$artworks[40] = array(
    "title_no" => "Dialog bak fasaden",
    "title_it" => "Il dialogo dietro l’apparenza",
    "title_en" => "Dialogue Behind the Facade",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 8,
    "size" => "24 x 18 cm",
    "year" => "2010",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-06.jpg"
);
$artworks[41] = array(
    "title_no" => "Figur med sigarett",
    "title_it" => "Il fumatore",
    "title_en" => "The Smoker",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 9,
    "size" => "29,5 x 24,6 cm",
    "year" => "2006",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-1-07.jpg"
);
$artworks[42] = array(
    "title_no" => "Lys i gammel skog",
    "title_it" => "La luce nel vecchio bosco",
    "title_en" => "Clearing (old forrest)",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "24x 32 cm",
    "year" => "2011",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-1-08.jpg"
);
$artworks[43] = array(
    "title_no" => "Forjettet landskap",
    "title_it" => "La terra promessa",
    "title_en" => "Promised Landscape",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 3,
    "size" => "23 x 31 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-1-09.jpg"
);
$artworks[44] = array(
    "title_no" => "Ruging",
    "title_it" => "La cova",
    "title_en" => "Brooding",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 3,
    "size" => "23 x 31 cm",
    "year" => "2011",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-1-10.jpg"
);
$artworks[45] = array(
    "title_no" => "Stående fugl",
    "title_it" => "Uccello in piedi",
    "title_en" => "Standing Bird",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "10,5 x 14,8 cm",
    "year" => "2010",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-01.jpg"
);
$artworks[46] = array(
    "title_no" => "Uccello II (og sort slange)",
    "title_it" => "Uccello II (e serpente nero)",
    "title_en" => "Uccello II (black serpent)",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 11,
    "size" => "14,8 x 10,5 cm",
    "year" => "2009",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-02.jpg"
);
$artworks[47] = array(
    "title_no" => "Kort gledesstund",
    "title_it" => "Breve momente di gioia",
    "title_en" => "Moment of Joy",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 3,
    "size" => "10,5 x 14,8 cm",
    "year" => "2009",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-03.jpg"
);
$artworks[48] = array(
    "title_no" => "Under fullmånen",
    "title_it" => "Sotto la luna piena",
    "title_en" => "Under the Full Moon",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 12,
    "size" => "10,5 x 14,8 cm",
    "year" => "2009",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-04.jpg"
);
$artworks[49] = array(
    "title_no" => "Gående fugl",
    "title_it" => "Uccello che cammina",
    "title_en" => "Walking Bird",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "14,8 x 10,5 cm",
    "year" => "2010",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-05.jpg"
);
$artworks[50] = array(
    "title_no" => "Uccello III",
    "title_it" => "Uccello III",
    "title_en" => "Uccello III",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 11,
    "size" => "14, 8 cm x 10, 5",
    "year" => "2009",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-06.jpg"
);
$artworks[51] = array(
    "title_no" => "Endelig fremme",
    "title_it" => "Finalmente arrivato",
    "title_en" => "Arrival at Last",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "10,5 x 14,8 cm",
    "year" => "2011",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-07.jpg"
);
$artworks[52] = array(
    "title_no" => "Flernebbet fugl",
    "title_it" => "Uccello con tanti becchi",
    "title_en" => "Bird with Beaks",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 11,
    "size" => "10, 5 x 14, 8 cm",
    "year" => "2009",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-08.jpg"
);
$artworks[53] = array(
    "title_no" => "Under halvmånen",
    "title_it" => "Sotto la mezzaluna",
    "title_en" => "Under the Half Moon",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 11,
    "size" => "10, 5 x 14, 8 cm",
    "year" => "2010",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-09.jpg"
);
$artworks[54] = array(
    "title_no" => "Tonebbet fugl",
    "title_it" => "Uccello con due becchi",
    "title_en" => "Bird with Two Beaks",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 12,
    "size" => "14,8 x 10,5 cm",
    "year" => "2009",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-10.jpg"
);
$artworks[55] = array(
    "title_no" => "Snart fugl i himmelen",
    "title_it" => "Uccello quasi in paradiso",
    "title_en" => "Soon a Bird in Heaven",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 3,
    "size" => "10,5 x 14,8 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-11.jpg"
);
$artworks[56] = array(
    "title_no" => "Blek fugl",
    "title_it" => "Uccello pallido",
    "title_en" => "Faded Bird",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 11,
    "size" => "10,5 x 14,8 cm",
    "year" => "2009",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-12.jpg"
);
$artworks[57] = array(
    "title_no" => "Uccello I",
    "title_it" => "Uccello I",
    "title_en" => "Uccello I",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 2,
    "size" => "14,8 cm x 10,5",
    "year" => "2009",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-13.jpg"
);
$artworks[58] = array(
    "title_no" => "Liten rovfugl",
    "title_it" => "Piccolo rapace",
    "title_en" => "Small Bird of Pray",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 5,
    "size" => "54 x 72,5 cm",
    "year" => "2010",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-14.jpg"
);
$artworks[59] = array(
    "title_no" => "I kampens hete",
    "title_it" => "Nel fuoco della battaglia",
    "title_en" => "In the Heat of The Fight",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 1,
    "size" => "70 x 100 cm",
    "year" => "2011",
    "sold" => True,
    "buyer" => "???",
    "display" => True,
    "path" => "img/works/works-2-15.jpg"
);
$artworks[60] = array(
    "title_no" => "Naturlig orden",
    "title_it" => "Ordine naturale", #???
    "title_en" => "Natural Order",
    "series_no" => "Arbeider 2009-2011",
    "series_it" => "Lavori 2009-2011",
    "series_en" => "Works 2009-2011",
    "technique" => 1,
    "size" => "70 x 100 cm",
    "year" => "2011",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/works/works-2-16.jpg"
);
$artworks[61] = array(
    "title_no" => "Revitalitet",
    "title_it" => "Revitalità",
    "title_en" => "Re-vitality",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-06.jpg"
);
$artworks[62] = array(
    "title_no" => "Tilnærming på nytt",
    "title_it" => "Nuovo tentativo di avvicinamento",
    "title_en" => "Approaching Again",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-02.jpg"
);
$artworks[63] = array(
    "title_no" => "Barndom",
    "title_it" => "Infanzia",
    "title_en" => "Childhood",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-03.jpg"
);
$artworks[64] = array(
    "title_no" => "Viljens grenseland",
    "title_it" => "I confine della volontà",
    "title_en" => "Limit of Will",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-04.jpg"
);
$artworks[65] = array(
    "title_no" => "Avsluttet dialog",
    "title_it" => "Dialogo concluso",
    "title_en" => "Concluded Dialouge",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-05.jpg"
);
$artworks[66] = array(
    "title_no" => "Antydning av fortid",
    "title_it" => "Una sensazione di passato",
    "title_en" => "Suggested Past",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => False,
    "path" => "img/natura/A3-01.jpg"
);
$artworks[67] = array(
    "title_no" => "Avblomstring",
    "title_it" => "Sfiorire",
    "title_en" => "De-flowering",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-07.jpg"
);
$artworks[68] = array(
    "title_no" => "Sårbart landskap",
    "title_it" => "Paesaggio vulnerabile",
    "title_en" => "Vunerable Landscape",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-08.jpg"
);
$artworks[69] = array(
    "title_no" => "Duett",
    "title_it" => "Duetto",
    "title_en" => "Duet",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-09.jpg"
);
$artworks[70] = array(
    "title_no" => "Etter vind",
    "title_it" => "Dopo il vento",
    "title_en" => "After wind",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-10.jpg"
);
$artworks[71] = array(
    "title_no" => "St. Uccello",
    "title_it" => "Sant’ Uccello",
    "title_en" => "St. Uccello",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => False,
    "path" => "img/natura/A3-11.jpg"
);
$artworks[72] = array(
    "title_no" => "Forfølgelse",
    "title_it" => "",
    "title_en" => "",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => False,
    "path" => "img/natura/A3-12.jpg"
);
$artworks[73] = array(
    "title_no" => "Leik",
    "title_it" => "Gioco",
    "title_en" => "Play",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => "",
    "display" => True,
    "path" => "img/natura/A3-13.jpg"
);
$artworks[74] = array(
    "title_no" => "Nærkontakt",
    "title_it" => "Stretto contatto",
    "title_en" => "Encounter",
    "series_no" => "Natura +",
    "series_it" => "Natura +",
    "series_en" => "Natura +",
    "technique" => 3,
    "size" => "40,5 x 29,7 cm",
    "year" => "2014",
    "sold" => False,
    "buyer" => " ",
    "display" => True,
    "path" => "img/natura/A3-14.jpg"
);


/////// DATA er importert ///////

/*
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', 'root');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'blegenhoel');

$database_connection = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not connect to MySQL: ' . mysqli_connect_error());


//var_dump($artworks);
$database_connection->set_charset("utf8");

// set parameters and
foreach ($artworks as $artwork){
    if ($statement = $database_connection->prepare("INSERT INTO artwork_info (title_no, title_it, title_en, series_no, series_it, series_en, technique, dimmentions, production_year, sold, display, img_path, buyer)
                                                VALUES(?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?)")){
        $statement->bind_param("ssssssissiiss", $artwork["title_no"], $artwork["title_it"], $artwork['title_en'], $artwork['series_no'], $artwork['series_it'], $artwork['series_en'], $artwork['technique'], $artwork['size'], $artwork['year'], $artwork['sold'], $artwork['display'], $artwork['path'], $artwork['buyer']);
        $statement->execute();
        echo 'Entry success! ' . $artwork["title_no"] . '<br>';

    } else {
        echo mysqli_error($database_connection);
        die();
    }
    $statement->close();
  }
$database_connection->close();*/
?>

<h2>Ferdig</h2>
