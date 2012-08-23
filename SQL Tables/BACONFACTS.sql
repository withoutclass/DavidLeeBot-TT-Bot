-- MySQL dump 10.13  Distrib 5.1.41, for debian-linux-gnu (i486)
--
-- Host: localhost    Database: nodejs_davidleebot
-- ------------------------------------------------------
-- Server version	5.1.41-3ubuntu12.6

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `BACONFACTS`
--

DROP TABLE IF EXISTS `BACONFACTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BACONFACTS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fact` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BACONFACTS`
--

LOCK TABLES `BACONFACTS` WRITE;
/*!40000 ALTER TABLE `BACONFACTS` DISABLE KEYS */;
INSERT INTO `BACONFACTS` VALUES
(1,'Everything is better with bacon!'),
(2,'Bacon makes the world go around.'),
(3,'Is there anything tastier than nice, crispy bacon?'),
(4,'Porkchops and bacon, my two favorite animals.'),
(5,'When you\'re in my house you shall do as I do and believe who I believe in. So Bart butter your bacon.'),
(6,'Is it Bacon Day?'),
(7,'Mmm. Move over, eggs. Bacon just got a new best friend - fudge.'),
(8,'Mmm... bacon'),
(9,'Mmm... unexplained bacon'),
(10,'I\'m not Canadian, although I tend to like their bacon.'),
(11,'If it can\'t be fried in bacon grease, it ain\'t worth cooking, let alone eating.'),
(12,'I\'m never gonna get used to the 31st century. Caffeinated bacon? Baconated grapefruit? ADMIRAL Crunch?'),
(13,'I used to have trouble choking down the pills I have to take for controlling my cholesterol, but it\'s a lot easier now that I wrap them in bacon.'),
(14,'Life expectancy would grow by leaps and bounds if green vegetables smelled as good as bacon.'),
(15,'As soon as I learned what the smell of bacon was, I learned how to make it.'),
(16,'Veggie bacon?!? That sounds like a sign of the Apocalypse.'),
(17,'The universal food of the people of Texas, both rich and poor, seems to be corn-dodger and fried bacon.'),
(18,'Sir Francis? Is that you?');
/*!40000 ALTER TABLE `BACONFACTS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-08-19 11:32:15
