-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 11. 10:48
-- Kiszolgáló verziója: 10.4.20-MariaDB
-- PHP verzió: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bolt`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termekek`
--

CREATE TABLE `termekek` (
  `id` int(11) NOT NULL,
  `nev` varchar(150) NOT NULL,
  `leiras` varchar(255) NOT NULL,
  `ar` int(11) NOT NULL,
  `kep` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `termekek`
--

INSERT INTO `termekek` (`id`, `nev`, `leiras`, `ar`, `kep`) VALUES
(1, 'Dallas Pizza', 'paradicsomos alap, darált hús, füstölt kolbász, lila hagyma, tükörtojás', 2790, 'https://res.cloudinary.com/gb-web/image/upload/v1649664009/dallas-pizza_c65ulj.jpg'),
(2, 'Sonkás Pizza', 'paradicsomos alap, sajt, sonka', 1590, 'https://res.cloudinary.com/gb-web/image/upload/v1649664009/sonkas-pizza_oqqcr0.jpg'),
(3, 'Szegedi Pizza', 'paradicsomos alap, sajt, csípős paprika, sonka, kukorica', 2190, 'https://res.cloudinary.com/gb-web/image/upload/v1649664009/szegedi-pizza_ukvtnl.jpg'),
(4, 'Csülök Pizza', 'paradicsomos alap, sajt, csülkös hús, sonka, kukorica', 2490, 'https://res.cloudinary.com/gb-web/image/upload/v1649664009/csulok-pizza_waionm.jpg'),
(5, 'Margherita', 'Egyszerű, paradicsomszósz,sajt', 1800, 'http://res.cloudinary.com/gb-web/image/upload/v1649666126/saewfc9rmnjrqb14dpvf.jpg'),
(6, 'Szalámis pizza', 'paradicsomszósz, sajt,pikáns szalámi', 2200, 'http://res.cloudinary.com/gb-web/image/upload/v1649666610/l5jbcao68husl8pk20yj.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `termekek`
--
ALTER TABLE `termekek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `termekek`
--
ALTER TABLE `termekek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
