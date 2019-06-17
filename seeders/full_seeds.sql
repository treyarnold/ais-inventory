use ais_db;
INSERT INTO orders (total_price) VALUES (200), (160);
INSERT INTO drinks (drink_name, price, num_sold, pic_url) VALUES 
('Old Fashioned', 4, 10, 'https://cdn.liquor.com/wp-content/uploads/2017/08/08074649/6-Rules-for-Drinking-Bourbone-bourbon-old-fashioned-720x720-slideshow.jpg'), 
('Cosmopolitan', 5, 5, 'http://shake-that.com/wp-content/uploads/2015/07/Cosmopolitan-780x1015.jpg'),
('Negroni', 4, 7, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocktail-negroni-on-a-old-wooden-board-drink-with-royalty-free-image-922744216-1557251200.jpg?crop=0.447xw:1.00xh;0.434xw,0&resize=*:1857'),
('Whiskey Sour', 4.50, 6, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-126551868-1-1508962528.jpg?crop=1.00xw:0.949xh;0,0.0259xh&resize=*:1857'),
('Manhattan', 5, 4, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-89804127-1508971287.jpg?crop=0.864516129032258xw:1xh;center,top&resize=*:1857'),
('Gimlet', 4.50, 3, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-86159584-1508963306.jpg?crop=0.785xw:0.785xh;0,0.176xh&resize=*:1857'),
('Palmoa', 4, 6, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocktail-sparkling-pink-paloma-royalty-free-image-1000649118-1557250108.jpg?crop=1xw:1xh;center,top&resize=*:1857'),
('Sidecar', 5, 3, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-503700853-1508962805.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=*:1857'),
('Martini', 5, 4, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/martini-glasses-royalty-free-image-71917252-1557251652.jpg?crop=0.447xw:1.00xh;0.379xw,0&resize=*:1857');
INSERT INTO amounts (amount) VALUES (.125), (.25), (.5), (1), (1.5), (2);
INSERT INTO inventories (name, type, quantity_bottles, price_bottle, inventory_value) VALUES
('Smirnoff', 'Vodka', 20, 25, 500),
('Absolut', 'Vodka', 15, 35, 525),
('Skyy', 'Vodka', 10, 27, 270),
('Grey Goose', 'Vodka', 5, 50, 250),
('Jack Daniels', 'Whiskey', 15, 27, 405),
('Makers Mark', 'Whiskey', 10, 30, 300),
('Jameson', 'Whiskey', 5, 30, 150),
('Jim Beam', 'Whiskey', 10, 15, 150),
('Johnnie Walker Black', 'Scotch', 5, 60, 300),
('Johnnie Walker Blue', 'Scotch', 2, 165, 330),
('Glenfiddich', 'Scotch', 5, 25, 125),
('Glenlivet', 'Scotch', 5, 30, 150),
('Singleton', 'Scotch', 5, 30, 150),
('Tanqueray', 'Gin', 5, 35, 175),
('Beefeater', 'Gin', 10, 25, 250),
('Gordons', 'Gin', 10, 15, 150),
('Hendricks', 'Gin', 2, 65, 130),
('Don Julio', 'Tequila', 5, 55, 275),
('Patron', 'Tequila', 10, 40, 400),
('Jose Cuervo', 'Tequila', 10, 20, 200),
('Avion', 'Tequila', 5, 35, 175),
('Bacardi', 'Rum', 10, 15, 150 ),
('Captain Morgan', 'Rum', 10, 15, 150),
('Malibu', 'Rum', 5, 15, 75),
('Kraken', 'Rum', 5, 20, 100);
