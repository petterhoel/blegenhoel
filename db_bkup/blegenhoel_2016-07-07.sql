# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: blegenhoel.mysql.domeneshop.no (MySQL 5.5.5-10.0.25-MariaDB-1~wheezy)
# Database: blegenhoel
# Generation Time: 2016-07-07 18:22:09 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table artwork_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `artwork_info`;

CREATE TABLE `artwork_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title_no` varchar(100) CHARACTER SET utf8 NOT NULL,
  `title_it` varchar(100) CHARACTER SET utf8 NOT NULL,
  `title_en` varchar(100) CHARACTER SET utf8 NOT NULL,
  `series_no` varchar(100) CHARACTER SET utf8 NOT NULL,
  `series_it` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `series_en` varchar(100) CHARACTER SET utf8 NOT NULL,
  `technique` int(11) DEFAULT NULL,
  `dimmentions` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `production_year` varchar(4) CHARACTER SET utf8 DEFAULT NULL,
  `sold` tinyint(1) DEFAULT NULL,
  `display` tinyint(1) DEFAULT NULL,
  `img_path` varchar(100) CHARACTER SET utf8 NOT NULL,
  `buyer` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `carousel_order` int(11) NOT NULL,
  `carousel` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8;

LOCK TABLES `artwork_info` WRITE;
/*!40000 ALTER TABLE `artwork_info` DISABLE KEYS */;

INSERT INTO `artwork_info` (`id`, `title_no`, `title_it`, `title_en`, `series_no`, `series_it`, `series_en`, `technique`, `dimmentions`, `production_year`, `sold`, `display`, `img_path`, `buyer`, `carousel_order`, `carousel`)
VALUES
	(151,'Motstandskraft','La forza della resistenza','Resistance','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-01.jpg','',13,'natura+paper'),
	(152,'Varsel','Avvertimento','Wistle blow','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-02.jpg','',14,'natura+paper'),
	(153,'Smerte','Dolore','Agony','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-03.jpg','',15,'natura+paper'),
	(154,'Morgensang','Canzone del mattino','Morning Song','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-04.jpg','',16,'natura+paper'),
	(155,'Fly lille fugl','Vola uccellino','Little Bird, Fly','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-05.jpg','',17,'natura+paper'),
	(156,'Forkledning','Travestimento','Disguise','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',1,1,'img/natura/A4-1-06.jpg','???',18,'natura+paper'),
	(157,'Forsvarsposisjon','Posizione di difesa','Defence Stance','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-07.jpg','',19,'natura+paper'),
	(158,'Portrett','Ritratto','Portrait','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-08.jpg','',20,'natura+paper'),
	(159,'Kjærtegn','Carezza','Caress','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-09.jpg','',21,'natura+paper'),
	(160,'Sjelden fugl','Un uccello raro','Rare Bird','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-10.jpg','',22,'natura+paper'),
	(161,'Hårsår','Permaloso','Touchy','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-11.jpg','',23,'natura+paper'),
	(162,'Studiofugl','Il merlo dello studio','Studio Bird','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-12.jpg','',24,'natura+paper'),
	(163,'Litt kjent figur','Figura un po’ conosciuta','Slightly Familiar Bird','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-13.jpg','',25,'natura+paper'),
	(164,'Kittelsens katt','Il gatto di Kittelsen','Kittelsen\'s Cat','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-14.jpg','',26,'natura+paper'),
	(165,'Kjernefamilie','La famiglia','Conjugal Family','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-15.jpg','',27,'natura+paper'),
	(166,'Hardfør plante','Pianta resistente','Hardy Plant','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-16.jpg','',28,'natura+paper'),
	(167,'Vinter','Inverno','Winter','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-17.jpg','',29,'natura+paper'),
	(168,'Jakt','Caccia','Hunt','Natura +','Natura +','Natura +',3,'28,3 x 21 cm','2014',0,1,'img/natura/A4-1-18.jpg','',30,'natura+paper'),
	(169,'Natura +','Natura +','Natura +','Natura +','Natura +','Natura +',5,'60 x 50 cm','2012',0,1,'img/natura/oil-07.jpg','',1,'natura+oil'),
	(170,'Gudinne mot overmakten','La dea contro la forza superiore','The Goddess Against Preponderance','Natura +','Natura +','Natura +',5,'60 x 73 cm','2013',0,1,'img/natura/oil-02.jpg','',2,'natura+oil'),
	(171,'Natt-tjern','Lo stagno notturno','Nocturnal Pond','Natura +','Natura +','Natura +',5,'60 x 73 cm','2012',0,1,'img/natura/oil-03.jpg','',3,'natura+oil'),
	(172,'Sol etter regn','Sole dopo la pioggia','The Sun After the Rain','Natura +','Natura +','Natura +',5,'60 x 50 cm','2013',0,1,'img/natura/oil-04.jpg','',4,'natura+oil'),
	(173,'Stor elv','Il grande fiume','Great River','Natura +','Natura +','Natura +',5,'60 x 50 cm','2013',0,1,'img/natura/oil-05.jpg','',5,'natura+oil'),
	(174,'Fri flyt','Il libero fluire','Free Flow','Natura +','Natura +','Natura +',5,'60 x 50 cm','2013',0,1,'img/natura/oil-06.jpg','',6,'natura+oil'),
	(175,'Syklus; sakte, sakte','Ciclo; lento, lento','Cycle; slow, slow','Natura +','Natura +','Natura +',5,'120 x 90 cm','2012',0,0,'img/natura/oil-01.jpg','',-1,'natura+oil'),
	(176,'Sirkus Antico','Circo Antico','Circus Antico','Natura +','Natura +','Natura +',5,'60 x 50 cm','2012',0,1,'img/natura/oil-08.jpg','',7,'natura+oil'),
	(177,'Tidlig vår','L’ inizio della primavera','Early Spring','Natura +','Natura +','Natura +',5,'60 x 50 cm','2012',0,1,'img/natura/oil-09.jpg','',8,'natura+oil'),
	(178,'Tåken letter','Si alza la nebbia','Fog Clearing','Natura +','Natura +','Natura +',5,'50 x 70 cm','2013',0,1,'img/natura/oil-10.jpg','',9,'natura+oil'),
	(179,'Endelig et øyeblikks fred','Finalmente un momento di pace','Finally a Moment of Peace','Natura +','Natura +','Natura +',5,'50 x 70 cm','2012',0,1,'img/natura/oil-11.jpg','',10,'natura+oil'),
	(180,'Ved Tevere','Sul Tevere','By the Tiber','Natura +','Natura +','Natura +',5,'50 x 70 cm','2012',1,1,'img/natura/oil-12.jpg','???',11,'natura+oil'),
	(181,'Tid','Il tempo','Time','Natura +','Natura +','Natura +',5,'50 x 40 cm','2013',0,1,'img/natura/oil-13.jpg','',12,'natura+oil'),
	(182,'Gul kjærlighet','Amore giallo','Yellow Love','Natura +','Natura +','Natura +',5,'35 x 27 cm','2013',1,1,'img/natura/oil-14.jpg','???',13,'natura+oil'),
	(183,'Lykkerus','Gioiosa ebbrezza','Euphoria','Natura +','Natura +','Natura +',5,'30 x 24 cm','2012',1,1,'img/natura/oil-15.jpg','???',14,'natura+oil'),
	(184,'Figurer i himmelstorm','Figure nel cielo burracoso','Figures in Storm','Natura +','Natura +','Natura +',5,'30 x 24 cm','2012',0,1,'img/natura/oil-16.jpg','',15,'natura+oil'),
	(185,'Begrenset revir','Territoro limitato','Limited Territory','Natura +','Natura +','Natura +',5,'30 x 40 cm','2012',1,1,'img/natura/oil-17.jpg','???',16,'natura+oil'),
	(186,'Tidlig høst','L’ inizio dell’ autunno','Early Autumn','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',10,'19, 5 x 23 cm','2011',1,1,'img/works/works-1-01.jpg','???',1,'works-1'),
	(187,'Natteliv','Vita notturna','Night life','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',10,'23 x 32, 5 cm','2011',1,1,'img/works/works-1-02.jpg','???',2,'works-1'),
	(188,'Aldri alene','Mai soli','Never Alone','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',10,'23 x 19, 5 cm','2011',1,1,'img/works/works-1-03.jpg','???',3,'works-1'),
	(189,'Blå dagdrøm','Un sogno blu ad occhi aperti','Blue Daydream','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',10,'19, 5 x 23 cm','2011',0,1,'img/works/works-1-04.jpg','',4,'works-1'),
	(190,'Det søte liv','La dolce vita','The Good Life','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'24 x 17 cm','2011',1,1,'img/works/works-1-05.jpg','???',5,'works-1'),
	(191,'Dialog bak fasaden','Il dialogo dietro l’apparenza','Dialogue Behind the Facade','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',8,'24 x 18 cm','2010',1,1,'img/works/works-1-06.jpg','???',6,'works-1'),
	(192,'Figur med sigarett','Il fumatore','The Smoker','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',9,'29,5 x 24,6 cm','2006',0,1,'img/works/works-1-07.jpg','',7,'works-1'),
	(193,'Lys i gammel skog','La luce nel vecchio bosco','Clearing (old forrest)','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'24x 32 cm','2011',0,1,'img/works/works-1-08.jpg','',8,'works-1'),
	(194,'Forjettet landskap','La terra promessa','Promised Landscape','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',3,'23 x 31 cm','2011',1,1,'img/works/works-1-09.jpg','???',9,'works-1'),
	(195,'Ruging','La cova','Brooding','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',3,'23 x 31 cm','2011',0,1,'img/works/works-1-10.jpg','',10,'works-1'),
	(196,'Stående fugl','Uccello in piedi','Standing Bird','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'10,5 x 14,8 cm','2010',1,1,'img/works/works-2-01.jpg','???',1,'works-2'),
	(197,'Uccello II (og sort slange)','Uccello II (e serpente nero)','Uccello II (black serpent)','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',11,'14,8 x 10,5 cm','2009',0,1,'img/works/works-2-02.jpg','',2,'works-2'),
	(198,'Kort gledesstund','Breve momente di gioia','Moment of Joy','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',3,'10,5 x 14,8 cm','2009',0,1,'img/works/works-2-03.jpg','',3,'works-2'),
	(199,'Under fullmånen','Sotto la luna piena','Under the Full Moon','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',12,'10,5 x 14,8 cm','2009',1,1,'img/works/works-2-04.jpg','???',4,'works-2'),
	(200,'Gående fugl','Uccello che cammina','Walking Bird','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'14,8 x 10,5 cm','2010',1,1,'img/works/works-2-05.jpg','???',5,'works-2'),
	(201,'Uccello III','Uccello III','Uccello III','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',11,'14, 8 cm x 10, 5','2009',0,1,'img/works/works-2-06.jpg','',6,'works-2'),
	(202,'Endelig fremme','Finalmente arrivato','Arrival at Last','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'10,5 x 14,8 cm','2011',0,1,'img/works/works-2-07.jpg','',7,'works-2'),
	(203,'Flernebbet fugl','Uccello con tanti becchi','Bird with Beaks','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',11,'10, 5 x 14, 8 cm','2009',1,1,'img/works/works-2-08.jpg','???',8,'works-2'),
	(204,'Under halvmånen','Sotto la mezzaluna','Under the Half Moon','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',11,'10, 5 x 14, 8 cm','2010',1,1,'img/works/works-2-09.jpg','???',9,'works-2'),
	(205,'Tonebbet fugl','Uccello con due becchi','Bird with Two Beaks','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',12,'14,8 x 10,5 cm','2009',0,1,'img/works/works-2-10.jpg','',10,'works-2'),
	(206,'Snart fugl i himmelen','Uccello quasi in paradiso','Soon a Bird in Heaven','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',3,'10,5 x 14,8 cm','2011',1,1,'img/works/works-2-11.jpg','???',11,'works-2'),
	(207,'Blek fugl','Uccello pallido','Faded Bird','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',11,'10,5 x 14,8 cm','2009',1,1,'img/works/works-2-12.jpg','???',12,'works-2'),
	(208,'Uccello I','Uccello I','Uccello I','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',2,'14,8 cm x 10,5','2009',0,1,'img/works/works-2-13.jpg','',13,'works-2'),
	(209,'Liten rovfugl','Piccolo rapace','Small Bird of Pray','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',5,'54 x 72,5 cm','2010',1,1,'img/works/works-2-14.jpg','???',14,'works-2'),
	(210,'I kampens hete','Nel fuoco della battaglia','In the Heat of The Fight','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',1,'70 x 100 cm','2011',1,1,'img/works/works-2-15.jpg','???',15,'works-2'),
	(211,'Naturlig orden','Ordine naturale','Natural Order','Arbeider 2009-2011','Lavori 2009-2011','Works 2009-2011',1,'70 x 100 cm','2011',0,1,'img/works/works-2-16.jpg','',16,'works-2'),
	(212,'Revitalitet','Revitalità','Re-vitality','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-06.jpg','',1,'natura+paper'),
	(213,'Tilnærming på nytt','Nuovo tentativo di avvicinamento','Approaching Again','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-02.jpg','',2,'natura+paper'),
	(214,'Barndom','Infanzia','Childhood','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-03.jpg','',3,'natura+paper'),
	(215,'Viljens grenseland','I confine della volontà','Limit of Will','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-04.jpg','',4,'natura+paper'),
	(216,'Avsluttet dialog','Dialogo concluso','Concluded Dialouge','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-05.jpg','',5,'natura+paper'),
	(217,'Antydning av fortid','Una sensazione di passato','Suggested Past','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,0,'img/natura/A3-01.jpg','',-1,'natura+paper'),
	(218,'Avblomstring','Sfiorire','De-flowering','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-07.jpg','',6,'natura+paper'),
	(219,'Sårbart landskap','Paesaggio vulnerabile','Vunerable Landscape','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-08.jpg','',7,'natura+paper'),
	(220,'Duett','Duetto','Duet','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-09.jpg','',8,'natura+paper'),
	(221,'Etter vind','Dopo il vento','After wind','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-10.jpg','',9,'natura+paper'),
	(222,'St. Uccello','Sant’ Uccello','St. Uccello','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,0,'img/natura/A3-11.jpg','',-1,'natura+paper'),
	(223,'Forfølgelse','','','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,0,'img/natura/A3-12.jpg','',-1,'natura+paper'),
	(224,'Leik','Gioco','Play','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-13.jpg','',11,'natura+paper'),
	(225,'Nærkontakt','Stretto contatto','Encounter','Natura +','Natura +','Natura +',3,'40,5 x 29,7 cm','2014',0,1,'img/natura/A3-14.jpg',' ',12,'natura+paper');

/*!40000 ALTER TABLE `artwork_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table log_entry
# ------------------------------------------------------------

DROP TABLE IF EXISTS `log_entry`;

CREATE TABLE `log_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time_of_entry` int(11) NOT NULL,
  `poster_name` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `message` text NOT NULL,
  `user_agent` varchar(300) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `http_reference` varchar(200) NOT NULL,
  `captcha_success` varchar(100) NOT NULL,
  `captcha_error` varchar(100) DEFAULT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

LOCK TABLES `log_entry` WRITE;
/*!40000 ALTER TABLE `log_entry` DISABLE KEYS */;

INSERT INTO `log_entry` (`id`, `time_of_entry`, `poster_name`, `email`, `message`, `user_agent`, `ip`, `http_reference`, `captcha_success`, `captcha_error`, `visible`)
VALUES
	(1,1422265847,'Petter','petter@petterhoel.net','HeiÃ¦Ã¸Ã¥','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36','193.157.197.228','http://blegenhoel.no/contacttest.php','1',NULL,1),
	(2,1422627165,'Petter','petter@petterhoel.net','jwdlfkcdlcs','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36','::1','http://localhost:8888/blegenhoel.no/contacttest.php','1',NULL,1),
	(3,1423422448,'Petter','','Test','Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4','37.191.203.76','http://blegenhoel.no/contact.php','1',NULL,1),
	(4,1423422467,'Petter','petter@petterhoel.net','Hei fatter! Denne meldingen er skrevet fra det nye kontaktskjemaet ditt, pÃ¥ nettsiden din ;)','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36','37.191.203.76','http://blegenhoel.no/contact.php','1',NULL,1),
	(5,1423424858,'Petter','petter@petterhoel.net','Hei igjen, \r\n\r\nda har jeg rettet italiensktekst pÃ¥:\r\nbio, naturatekst og i menyen. NÃ¥r det gjelder menyen sÃ¥ skrev jeg Natura + (storia) istedenfor bare Natura+. Det er fordi jeg synes det er bra Ã¥ gi den som besÃ¸ker nettsiden et hint om at det er en tekst, i motsetning til menyvalgene ovenfor som er bildegallerier. \r\n\r\nGi meg tilbakemelding pÃ¥ om du synes det er ok, eller ikke.\r\n\r\n:)\r\n','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36','37.191.203.76','http://blegenhoel.no/contact.php','1',NULL,1),
	(6,1423557916,'Bente','harikke@hotmail.com','Hei, dette er en test.','Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4','176.11.109.72','http://blegenhoel.no/contact.php','1',NULL,1);

/*!40000 ALTER TABLE `log_entry` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table size
# ------------------------------------------------------------

DROP TABLE IF EXISTS `size`;

CREATE TABLE `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `width` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;

INSERT INTO `size` (`id`, `width`, `height`)
VALUES
	(1,73,60),
	(2,50,60),
	(3,50,61),
	(4,70,50),
	(5,40,50),
	(6,27,35),
	(7,24,30),
	(8,40,30),
	(9,29.7,40.5),
	(10,21,28.3),
	(11,90,120);

/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table technique
# ------------------------------------------------------------

DROP TABLE IF EXISTS `technique`;

CREATE TABLE `technique` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(200) CHARACTER SET utf8 NOT NULL,
  `it` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_it` (`it`),
  UNIQUE KEY `unique_no` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

LOCK TABLES `technique` WRITE;
/*!40000 ALTER TABLE `technique` DISABLE KEYS */;

INSERT INTO `technique` (`id`, `no`, `it`)
VALUES
	(1,'Akryl på papir','Acrillico su carta'),
	(2,'Akvarell på papir','Acquarello su carta'),
	(3,'Akvarell og tusj på papir','Acquarello e inchiostro di china su carta'),
	(4,'Akvarell, tusj og blyant på papir','Acquarello, inchostro di china e matita su carta'),
	(5,'Olje på lerret','Olio su tela'),
	(6,'Olje og akryl på lerret','Olio e acrillico su tela'),
	(7,'Olje og gesso på lerret','Olio e gesso su tela'),
	(8,'Olje på lerretsplate','Olio su cartone telato'),
	(9,'Oljekritt på papir','Gesso olio su carta'),
	(10,'Gouache på kartong','Gouache su cartone'),
	(11,'Tusj på papir','Inchiostro di china su carta'),
	(12,'Tusj og en dash olje på papir','Inchiostro di china e una goccia di olio su carta');

/*!40000 ALTER TABLE `technique` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
