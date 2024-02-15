CREATE DATABASE  IF NOT EXISTS `eu_secondhanded_platform` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eu_secondhanded_platform`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: eu_secondhanded_platform
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billing_trade`
--

DROP TABLE IF EXISTS `billing_trade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing_trade` (
  `trade_id` int NOT NULL,
  `billingPrice` decimal(9,2) NOT NULL,
  `Accept` tinyint(1) NOT NULL COMMENT '0代表pending，在处理\n1代表接受\n2代表拒绝',
  KEY `fk_billing_trade_trade1_idx` (`trade_id`),
  CONSTRAINT `fk_billing_trade_trade1` FOREIGN KEY (`trade_id`) REFERENCES `trade` (`trade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='一个人对一个商品可能有讨价还价不同的出价过程\n表示同一个商品的不同竞价；我们不提供交易的中间平台，交易和Bargain由买卖双方完成';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_trade`
--

LOCK TABLES `billing_trade` WRITE;
/*!40000 ALTER TABLE `billing_trade` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_trade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `seller_id` int NOT NULL COMMENT '卖家ID',
  `item_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(600) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '商品描述',
  `thumbnail` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '商品首页，主要图片的url\n默认为第一张图片',
  `price` decimal(9,2) NOT NULL,
  `onsale` tinyint(1) NOT NULL COMMENT '1为在售\n2为卖出\n从清单移出\n',
  PRIMARY KEY (`item_id`),
  UNIQUE KEY `item_id_UNIQUE` (`item_id`),
  KEY `fk_item_user1_idx` (`seller_id`),
  CONSTRAINT `fk_item_user1` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100000000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='商品清单\nid为9位自动生成\nthumbnail需要逻辑读取，为上传的图片的第一张';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_pictures`
--

DROP TABLE IF EXISTS `item_pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_pictures` (
  `item id` int NOT NULL,
  `pictures_url` varchar(255) NOT NULL,
  `picOrder` tinyint NOT NULL COMMENT '1-9\n一个商品，9张图片的排列顺序，第一张是封面图片',
  KEY `fk_item_pictures_item_idx` (`item id`),
  CONSTRAINT `fk_item_pictures_item` FOREIGN KEY (`item id`) REFERENCES `item` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='一个物品可以传9张上限的图片\n这个图表用于连接物品和多张图片';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_pictures`
--

LOCK TABLES `item_pictures` WRITE;
/*!40000 ALTER TABLE `item_pictures` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trade`
--

DROP TABLE IF EXISTS `trade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trade` (
  `trade_id` int NOT NULL AUTO_INCREMENT,
  `item_id` int NOT NULL,
  `seller_id` int NOT NULL COMMENT '卖家',
  `buyer_id` int NOT NULL COMMENT '买家',
  PRIMARY KEY (`trade_id`),
  UNIQUE KEY `trade_id_UNIQUE` (`trade_id`),
  KEY `fk_trade_item1_idx` (`item_id`),
  KEY `fk_trade_user1_idx` (`seller_id`),
  KEY `fk_trade_user2_idx` (`buyer_id`),
  CONSTRAINT `fk_trade_item1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `fk_trade_user1` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_trade_user2` FOREIGN KEY (`buyer_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='追踪每一笔交易\n当有人出价的时候，此项便会记录生成';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trade`
--

LOCK TABLES `trade` WRITE;
/*!40000 ALTER TABLE `trade` DISABLE KEYS */;
/*!40000 ALTER TABLE `trade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '自动生成的8位ID',
  `wechat_number` varchar(45) DEFAULT NULL,
  `wechat_name` varchar(45) DEFAULT NULL COMMENT '微信号\\n获得了权限之后读取放入数据库',
  `userName` varchar(50) DEFAULT NULL COMMENT 'interface展示的名字\\n如果用户没有起名则用微信名 if null, userName = wechat_Name\\n\\n如果微信无权限则显示自动生成ID && if wechat_name == null, userName = ID\\n\\nID是1000000开始的8位数字 \\n显示成  10****22',
  `location` varchar(255) DEFAULT NULL COMMENT '不需要详细地址\\n获取权限读取所在区',
  `selfDesc` varchar(255) DEFAULT NULL COMMENT '自我介绍',
  `thumbnail` varchar(255) DEFAULT NULL COMMENT '头像的url',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `wechat_number_UNIQUE` (`wechat_number`)
) ENGINE=InnoDB AUTO_INCREMENT=10000000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='基本用户信息，商品和其他交互通过foreign key 导入\\n\\nusername有逻辑方法，需要后端实现；\\n其余可以返回空值，前端定义空值的展示数据';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_history`
--

DROP TABLE IF EXISTS `user_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_history` (
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `type` tinyint NOT NULL COMMENT '1 = 购买历史\n0 = 卖出历史',
  KEY `fk_user_history_user1_idx` (`user_id`),
  KEY `fk_user_history_item1_idx` (`item_id`),
  CONSTRAINT `fk_user_history_item1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `fk_user_history_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='历史记录';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_history`
--

LOCK TABLES `user_history` WRITE;
/*!40000 ALTER TABLE `user_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_itemonsale`
--

DROP TABLE IF EXISTS `user_itemonsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_itemonsale` (
  `seller_id` int NOT NULL,
  `item_id` int NOT NULL,
  KEY `fk_user_itemonsale_user1_idx` (`seller_id`),
  KEY `fk_user_itemonsale_item1_idx` (`item_id`),
  CONSTRAINT `fk_user_itemonsale_item1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `fk_user_itemonsale_user1` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='一个用户可能有卖不同的商品';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_itemonsale`
--

LOCK TABLES `user_itemonsale` WRITE;
/*!40000 ALTER TABLE `user_itemonsale` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_itemonsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_watchlist`
--

DROP TABLE IF EXISTS `user_watchlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_watchlist` (
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  KEY `fk_user_watchlist_user1_idx` (`user_id`),
  KEY `fk_user_watchlist_item1_idx` (`item_id`),
  CONSTRAINT `fk_user_watchlist_item1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  CONSTRAINT `fk_user_watchlist_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户的心愿单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_watchlist`
--

LOCK TABLES `user_watchlist` WRITE;
/*!40000 ALTER TABLE `user_watchlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_watchlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15  9:41:55
