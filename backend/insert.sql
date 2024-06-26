CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    watchlist TEXT -- Tableau d'IDs des films stockés sous forme de chaîne JSON
);




INSERT INTO films (title, category, image_url, synopsis)
VALUES 
('Inception', 'film', 'https://cdn.cinematerial.com/p/136x/7uwb4va7/inception-movie-poster-sm.jpg?v=1456797089', 'Un voleur spécialisé dans l\'extraction d\'informations à travers les rêves est chargé d\'une mission d\'inception - implanter une idée dans l\'esprit d\'une personne.'),
('The Shawshank Redemption', 'film', 'https://cdn.cinematerial.com/p/136x/b5v2e9jg/the-shawshank-redemption-movie-poster-sm.jpg?v=1596989012', 'Un banquier innocent est condamné à la prison à vie pour le meurtre de sa femme et son amant, mais il maintient son espoir et son humanité en aidant ses compagnons de prison.'),
('The Godfather', 'film', 'https://cdn.cinematerial.com/p/136x/id2w2swk/the-godfather-movie-poster-sm.jpg?v=1518295861', 'Le patriarche de la famille mafieuse Corleone transfère le contrôle de son empire criminel à son fils le plus jeune, déclenchant une série de tragédies.'),
('Pulp Fiction', 'film', 'https://cdn.cinematerial.com/p/136x/srmnoyxu/pulp-fiction-movie-poster-sm.jpg?v=1668291848', 'Plusieurs histoires entrelacées s\'entrecroisent dans l\'univers de la criminalité de Los Angeles, mettant en vedette des personnages inoubliables et des dialogues percutants.'),
('The Dark Knight', 'film', 'https://cdn.cinematerial.com/p/136x/udapnxr3/the-dark-knight-movie-poster-sm.jpg?v=1456051180', 'Le justicier masqué Batman affronte le criminel génie Joker dans une lutte pour le destin de Gotham City.'),
('Forrest Gump', 'film', 'https://cdn.cinematerial.com/p/136x/hncfztv7/forrest-gump-movie-poster-sm.jpg?v=1602182137', 'Un homme simple d\'esprit traverse accidentellement plusieurs décennies de l\'histoire américaine, laissant son empreinte sur le monde et ceux qui l\'entourent.'),
('Schindler\'s List', 'film', 'https://cdn.cinematerial.com/p/136x/qbsdx7kq/schindlers-list-movie-poster-sm.jpg?v=1456259195', 'Un homme d\'affaires allemand sauve la vie de milliers de Juifs pendant l\'Holocauste en les employant dans son usine, malgré les risques personnels.'),
('Fight Club', 'film', 'https://cdn.cinematerial.com/p/136x/ebwzwl5t/fight-club-movie-poster-sm.jpg?v=1606055389', 'Un homme insatisfait de sa vie crée un club clandestin où les hommes peuvent se battre pour ressentir quelque chose de réel dans un monde de consommation et de conformité.'),
('The Matrix', 'film', 'https://cdn.cinematerial.com/p/136x/sejtqyfp/the-matrix-movie-poster-sm.jpg?v=1673723611', 'Un pirate informatique découvre que le monde dans lequel il vit est une simulation informatique contrôlée par des machines, et il se lance dans une quête pour libérer l\'humanité.'),
('Heat', 'film', 'https://cdn.cinematerial.com/p/136x/bkbqij3o/heat-movie-poster-sm.jpg?v=1467844284', 'Un maître du crime et un policier déterminé s\'affrontent dans un jeu mortel de chat et de souris à Los Angeles.'),
('Interstellar', 'film', 'https://cdn.cinematerial.com/p/136x/ctpnz4mq/interstellar-movie-poster-sm.jpg?v=1456424450', 'Une équipe de scientifiques et d\'explorateurs entreprend un voyage interstellaire pour trouver une nouvelle planète habitable pour l\'humanité, confrontant les défis de l\'espace et du temps.'),
('Her', 'film', 'https://cdn.cinematerial.com/p/136x/gvhk15ff/her-movie-poster-sm.jpg?v=1456065325', 'Los Angeles, dans un futur proche. Theodore Twombly, un homme sensible au caractère complexe, est inconsolable suite à une rupture difficile. Il fait alors l\'acquisition d\'un programme informatique ultramoderne, capable de s\'adapter à la personnalité de chaque utilisateur.'),
('Gladiator', 'film', 'https://cdn.cinematerial.com/p/136x/eoqdxh0o/gladiator-movie-poster-sm.jpg?v=1456289024', 'Un général romain déchu devient un gladiateur forcé de combattre pour sa survie dans l\'arène, cherchant à venger la mort de sa famille et à restaurer son honneur.'),
('Saving Private Ryan', 'film', 'https://cdn.cinematerial.com/p/136x/timgoz1w/saving-private-ryan-movie-poster-sm.jpg?v=1456232067', 'Un groupe de soldats américains est envoyé en mission de sauvetage en France pendant la Seconde Guerre mondiale pour retrouver un soldat dont les frères sont tous morts au combat.'),
('Girl Interrupted', 'film', 'https://cdn.cinematerial.com/p/136x/jz8fxhsq/girl-interrupted-movie-poster-sm.jpg?v=1679139129', 'En 1967, lors d\'un entretien avec un psychanalyste, Susanna Kaysen apprend qu\'elle souffre d\'un trouble de la personnalité. Elle est envoyée dans un hôpital psychiatrique renommé de la Nouvelle-Angleterre et se retrouve dans un univers étrange peuplé de jeunes filles aussi séduisantes que dérangées.'),
('Breaking Bad', 'serie', 'https://cdn.cinematerial.com/p/136x/9ataipeq/breaking-bad-movie-poster-sm.jpg?v=1456265621', 'Un professeur de chimie du lycée se transforme en fabricant de méthamphétamine et s\'associe avec un ancien élève pour créer et vendre la drogue.'),
('Game of Thrones', 'serie', 'https://cdn.cinematerial.com/p/136x/wr16gdf4/game-of-thrones-movie-poster-sm.jpg?v=1554234761', 'Neuf familles nobles se battent pour le contrôle des terres de Westeros, tandis qu\'un ancien ennemi refait surface après avoir dormi pendant des millénaires.'),
('Stranger Things', 'serie', 'https://cdn.cinematerial.com/p/136x/7ad94k1r/stranger-things-movie-poster-sm.jpg?v=1652408500', 'Un groupe d\'enfants découvre une dimension alternative étrange et dangereuse dans une petite ville où tout le monde se connaît.'),
('The Haunting of Hill House', 'serie', 'https://cdn.cinematerial.com/p/136x/oh6hnyit/the-haunting-of-hill-house-movie-poster-sm.jpg?v=1537371576', 'Une famille fracturée confronte des souvenirs hantés de leur ancienne maison et les événements terrifiants qui les ont chassés de là.'),
('The Office', 'serie', 'https://cdn.cinematerial.com/p/136x/ntkf882y/the-office-dvd-movie-cover-sm.jpg?v=1456217838', 'Un groupe de travailleurs de bureau typiques est suivi par une équipe de tournage, révélant des affrontements d\'ego, des comportements inappropriés et de l\'ennui.'),
('The Wire', 'serie', 'https://cdn.cinematerial.com/p/136x/dmyn2t9i/the-wire-movie-poster-sm.jpg?v=1456238448', 'Le monde de la drogue de Baltimore est vu à travers les yeux des trafiquants de drogue et des forces de l\'ordre.'),
('Shogun', 'serie', 'https://cdn.cinematerial.com/p/136x/0m1afvef/shogun-movie-poster-sm.jpg?v=1691221394', 'En 1600 au Japon, à l’aube d’une guerre civile qui marquera le siècle, John Blackthorne, le commandant anglais d’un mystérieux navire abandonné sur la plage d’un village de pêcheurs voisin, est porteur de secrets qui pourraient faire pencher la balance en faveur du seigneur Yoshii Toranaga, engagé dans une lutte à mort contre ses ennemis du Conseil des régents.'),
('Sons of Anarchy', 'serie', 'https://cdn.cinematerial.com/p/136x/hby1cbfk/sons-of-anarchy-movie-poster-sm.jpg?v=1456288507', 'Un motard lutte pour concilier sa vie de père et son implication dans un club de moto hors-la-loi.'),
('The Sopranos', 'serie', 'https://cdn.cinematerial.com/p/136x/g38uldt3/the-sopranos-movie-poster-sm.jpg?v=1578320840', 'Un chef de la mafia du New Jersey, Tony Soprano, fait face à des problèmes personnels et professionnels dans sa vie familiale et professionnelle.'),
('Narcos', 'serie', 'https://cdn.cinematerial.com/p/136x/i4ecwca9/narcos-movie-poster-sm.jpg?v=1471973330', 'On retrace les exploits criminels du seigneur de la drogue colombien Pablo Escobar.'),
('Peaky Blinders', 'serie', 'https://cdn.cinematerial.com/p/136x/j0uzfs1i/peaky-blinders-british-movie-poster-sm.jpg?v=1456500122', 'Une saga familiale de gangsters se déroule dans l\'Angleterre de 1919, à Birmingham.'),
('Vikings', 'serie', 'https://cdn.cinematerial.com/p/136x/czkvv8bz/vikings-movie-poster-sm.jpg?v=1456543279', 'Les Vikings nous transportent dans le monde brutal et mystérieux de Ragnar Lothbrok, un guerrier et fermier viking qui aspire à l\'exploration.'),
('Dark', 'serie', 'https://cdn.cinematerial.com/p/136x/tlobd1ky/dark-german-movie-poster-sm.jpg?v=1592668499', 'Une saga familiale avec une touche surnaturelle se déroule dans une ville allemande, où la disparition de deux jeunes enfants expose les relations entre quatre familles.'),
('Westworld', 'serie', 'https://cdn.cinematerial.com/p/136x/koge9gno/westworld-movie-poster-sm.jpg?v=1584907910', 'Une odyssée sombre raconte les débuts de la conscience artificielle et l\'évolution du péché.');




CREATE TABLE List(
    list_id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    LISTE TEXT,
    PRIMARY KEY (list_id), 
    FOREIGN KEY (user_id) REFERENCES users (id));