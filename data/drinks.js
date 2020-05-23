const drinksArr = ["'57 Chevy with a White License Plate", '1-900-FUK-MEUP', '110 in the shade', '151 Florida Bushwacker', '155 Belmont',
       '24k nightmare', '252', '3 Wise Men',
       '3-Mile Long Island Iced Tea', '410 Gone', '50/50', '501 Blue',
       '69 Special', '747', '9 1/2 Weeks', 'A Day at the Beach',
       'A Furlong Too Late', "A Gilligan's Island",
       'A Night In Old Mandalay', 'A Piece of Ass', 'A Splash of Nash',
       'A True Amaretto Sour', 'A midsummernight dream', 'A. J.',
       'A.D.M. (After Dinner Mint)', 'A1', 'ABC', 'ACID', 'AT&T',
       'Abbey Cocktail', 'Abbey Martini', 'Abilene', 'Absinthe #2',
       'Absolut Evergreen', 'Absolut Sex', 'Absolut Stress #2',
       'Absolut Summertime', 'Absolut limousine',
       'Absolutely Cranberry Smash', 'Absolutely Fabulous',
       'Absolutly Screwed Up', 'Acapulco', 'Ace', 'Adam', 'Adam & Eve',
       'Adam Bomb', 'Adam Sunrise', 'Addington', 'Addison',
       'Addison Special', 'Adios Amigos Cocktail', 'Adonis Cocktail',
       'Affair', 'Affinity', 'After Dinner Cocktail', 'After Five',
       'After Supper Cocktail', 'After sex', 'Afterglow', 'Afternoon',
       'Alabama Slammer', 'Alaska Cocktail', 'Alexander',
       'Alfie Cocktail', 'Algonquin', 'Alice Cocktail',
       'Alice in Wonderland', 'Allegheny', 'Allies Cocktail', 'Almeria',
       'Almond Chocolate Coffee', 'Almond Joy', 'Aloha Fruit punch',
       'Amaretto And Cream', 'Amaretto Liqueur', 'Amaretto Mist',
       'Amaretto Rose', 'Amaretto Shake', 'Amaretto Sour',
       'Amaretto Stinger', 'Amaretto Stone Sour',
       'Amaretto Stone Sour #3', 'Amaretto Sunrise', 'Amaretto Sunset',
       'Amaretto Sweet & Sour', 'Amaretto Tea', 'Americano', 'Angel Face',
       'Angelica Liqueur', 'Apello', 'Apple Berry Smoothie',
       'Apple Cider Punch #1', 'Apple Grande', 'Apple Karate',
       'Apple Pie with A Crust', 'Apple Slammer', 'Applecar', 'Applejack',
       'Apricot Lady', 'Apricot punch', 'Archbishop', 'Arctic Fish',
       'Arctic Mouthwash', 'Arise My Love', 'Arizona Antifreeze',
       'Arizona Stingers', 'Arizona Twister', 'Army special',
       'Arthur Tompkins', 'Artillery', 'Artillery Punch', 'Atlantic Sun',
       'Atomic Lokade', 'Auburn Headbanger', 'Autodafé', 'Avalanche',
       'Avalon', 'Aviation', 'Aztec Punch', 'B-52', 'B-53', 'Baby Eskimo',
       'Baby Guinness', 'Bacardi Cocktail', "Bailey's Dream Shake",
       'Balmoral', 'Banana Cantaloupe Smoothie', 'Banana Daiquiri',
       'Banana Milk Shake', 'Banana Strawberry Shake',
       'Banana Strawberry Shake Daiquiri-type', 'Barracuda',
       'Belgian Blue', 'Bellini', 'Bellini Martini', 'Bermuda Highball',
       'Berry Deadly', 'Between The Sheets', 'Bible Belt', 'Big Red',
       'Black & Tan', 'Black Forest Shake', 'Black Russian',
       'Black and Brown', 'Blackthorn', 'Bleeding Surgeon',
       'Blind Russian', 'Bloody Maria', 'Bloody Mary', 'Blue Lagoon',
       'Blue Margarita', 'Blue Mountain', 'Bluebird', 'Bob Marley',
       'Bobby Burns Cocktail', 'Boomerang', 'Boozy Snickers Milkshake',
       'Bora Bora', 'Boston Sidecar', 'Boston Sour', 'Bourbon Sling',
       'Bourbon Sour', 'Boxcar', 'Brain Fart', 'Brainteaser', 'Bramble',
       "Brandon and Will's Coke Float", 'Brandy Alexander',
       'Brandy Cobbler', 'Brandy Flip', 'Brandy Sour',
       'Brave Bull Shooter', "Bruce's Puce", 'Bruised Heart',
       'Bubble Gum', 'Buccaneer', 'Bumble Bee #1', 'Butter Baby',
       'Cafe Savoy', 'Caipirinha', 'Caipirissima', 'California Lemonade',
       'California Root Beer', 'Campari Beer', 'Caribbean Boilermaker',
       'Caribbean Orange Liqueur', 'Casino', 'Casino Royale',
       'Castillian Hot Chocolate', 'Champagne Cocktail',
       'Cherry Electric Lemonade', 'Cherry Rum', 'Chicago Fizz',
       'Chocolate Beverage', 'Chocolate Black Russian', 'Chocolate Drink',
       'Chocolate Milk', 'Chocolate Monkey', 'Citrus Coke',
       'City Slicker', 'Classic Old-Fashioned', 'Clove Cocktail',
       'Clover Club', 'Coffee Liqueur', 'Coffee-Vodka', 'Coke and Drops',
       'Cosmopolitan', 'Cosmopolitan Martini', 'Cranberry Cordial',
       'Cranberry Punch', 'Cream Soda', 'Creme de Menthe', 'Cuba Libra',
       'Cuba Libre', 'Daiquiri', 'Damned if you do', 'Danbooka',
       'Dark Caipirinha', 'Dark and Stormy', 'Darkwood Sling', 'Derby',
       'Diesel', 'Dirty Martini', 'Dirty Nipple', 'Downshift',
       'Dragonfly', 'Drinking Chocolate', 'Dry Rob Roy',
       'Dubonnet Cocktail', "Duchamp's Punch", 'Egg Cream', 'Egg Nog #4',
       'Egg Nog - Healthy', 'Egg-Nog - Classic Cooked',
       'English Highball', 'English Rose Cocktail', 'Espresso Martini',
       'Fahrenheit 5000', 'Flaming Dr. Pepper', 'Flaming Lamborghini',
       "Flander's Flake-Out", 'Flying Dutchman', 'Flying Scotchman',
       'Foxy Lady', 'Frappé', 'Freddy Kruger', 'French "75"', 'French 75',
       'French Connection', 'French Martini', 'Frisco Sour',
       'Frozen Daiquiri', 'Frozen Mint Daiquiri',
       'Frozen Pineapple Daiquiri', 'Fruit Cooler', 'Fruit Flip-Flop',
       'Fruit Shake', 'Fuzzy Asshole', 'GG', 'Gagliardo',
       "Gentleman's Club", "Gideon's Green Dinosaur", 'Gin And Tonic',
       'Gin Cooler', 'Gin Daisy', 'Gin Fizz', 'Gin Rickey', 'Gin Sling',
       'Gin Smash', 'Gin Sour', 'Gin Squirt', 'Gin Swizzle', 'Gin Toddy',
       'Girl From Ipanema', 'Gluehwein', 'Godchild', 'Godfather',
       'Godmother', 'Golden dream', 'Grand Blue',
       'Grape lemon pineapple Smoothie', 'Grass Skirt', 'Grasshopper',
       'Green Goblin', 'Grim Reaper', 'Grizzly Bear', 'H.D.',
       'Happy Skipper', 'Harvey Wallbanger', 'Havana Cocktail',
       'Hawaiian Cocktail', 'Hemingway Special', 'Herbal flame',
       'Highland Fling Cocktail', 'Holloween Punch', 'Homemade Kahlua',
       "Horse's Neck", 'Hot Chocolate to Die for', 'Hot Creamy Bush',
       'Ice Pick #1', 'Iced Coffee', 'Iced Coffee Fillip',
       'Imperial Cocktail', 'Imperial Fizz', 'Ipamena', 'Irish Coffee',
       'Irish Cream', 'Irish Curdling Cow', 'Irish Russian',
       'Irish Spring', 'Jack Rose Cocktail', "Jack's Vanilla Coke",
       'Jackhammer', 'Jam Donut', 'Jamaica Kiss', 'Jamaican Coffee',
       'Japanese Fizz', 'Jello shots', 'Jelly Bean', 'Jewel Of The Nile',
       'Jitterbug', 'John Collins', 'Just a Moonmint', 'Kamikaze',
       'Karsk', 'Kentucky B And B', 'Kentucky Colonel',
       'Kill the cold Smoothie', 'Kioki Coffee', 'Kir', 'Kir Royale',
       'Kiss me Quick', 'Kiwi Lemon', 'Kiwi Papaya Smoothie',
       'Kool First Aid', 'Kool-Aid Shot', 'Kool-Aid Slammer',
       'Kurant Tea', 'Lady Love Fizz', 'Lassi - A South Indian Drink',
       'Lassi - Mango', 'Lassi - Sweet', 'Lassi Khara', 'Lassi Raita',
       'Lemon Drop', 'Lemon Shot', 'Lemouroudji', 'Limeade',
       'Limona Corona', 'Loch Lomond', 'London Town',
       'Lone Tree Cocktail', 'Lone Tree Cooler', 'Long Island Iced Tea',
       'Long Island Tea', 'Long vodka', 'Lord And Lady', 'Lunch Box',
       'Mai Tai', 'Malibu Twister', 'Mango Orange Smoothie', 'Manhattan',
       'Margarita', 'Martinez Cocktail', 'Martini', 'Mary Pickford',
       'Masala Chai', 'Melya', 'Miami Vice', 'Microwave Hot Cocoa',
       'Midnight Cowboy', 'Midnight Manx', 'Midnight Mint', 'Mimosa',
       'Mississippi Planters Punch', 'Mocha-Berry', 'Mojito', 'Mojito #3',
       'Monkey Gland', 'Monkey Wrench', 'Moranguito', 'Moscow Mule',
       "Mother's Milk", 'Mudslinger', 'Mulled Wine', 'National Aquarium',
       'Negroni', 'New York Lemonade', 'New York Sour',
       'Nuked Hot Chocolate', 'Nutty Irishman', 'Old Fashioned',
       'Orange Crush', 'Orange Oasis', 'Orange Push-up',
       'Orange Scented Hot Chocolate', 'Orange Whip', 'Orangeade',
       'Oreo Mudslide', 'Orgasm', "Owen's Grandmother's Revenge",
       'Paradise', 'Pina Colada', 'Pineapple Gingerale Smoothie',
       'Pink Gin', 'Pink Lady', 'Pink Panty Pulldowns', 'Pink Penocha',
       'Pisco Sour', "Planter's Punch", 'Popped cherry', 'Poppy Cocktail',
       'Port And Starboard', 'Port Wine Cocktail', 'Port Wine Flip',
       'Porto flip', 'Pysch Vitamin Light', "Quaker's Cocktail",
       'Quarter Deck Cocktail', 'Queen Bee', 'Queen Charlotte',
       'Queen Elizabeth', 'Quentin', 'Quick F**K', 'Quick-sand',
       'Radioactive Long Island Iced Tea', 'Radler', 'Rail Splitter',
       'Raspberry Cooler', 'Red Snapper', 'Rose', 'Royal Bitch',
       'Royal Fizz', 'Royal Flush', 'Royal Gin Fizz', 'Ruby Tuesday',
       'Rum Cobbler', 'Rum Cooler', 'Rum Milk Punch', 'Rum Old-fashioned',
       'Rum Punch', 'Rum Runner', 'Rum Screwdriver', 'Rum Sour',
       'Rum Toddy', 'Russian Spring Punch', 'Rusty Nail', 'Salty Dog',
       'San Francisco', 'Sangria #1', "Sangria - The World's Best",
       'Sazerac', 'Scooter', 'Scotch Cobbler', 'Scotch Sour',
       'Scottish Highland Liqueur', 'Screaming Orgasm', 'Screwdriver',
       'Sea breeze', 'Sex on the Beach', 'Shanghai Cocktail',
       'Shark Attack', 'Sherry Eggnog', 'Sherry Flip', 'Shot-gun',
       'Sidecar', 'Sidecar Cocktail', 'Singapore Sling',
       'Sloe Gin Cocktail', 'Smut', 'Snake Bite (UK)',
       'Snakebite and Black', 'Snowball', 'Sol Y Sombra', 'Space Odyssey',
       'Spanish chocolate', 'Spiced Peach Punch', 'Spiking coffee',
       'Spritz', 'Stinger', 'Stone Sour', 'Strawberry Daiquiri',
       'Strawberry Lemonade', 'Strawberry Margarita',
       'Strawberry Shivers', 'Sunny Holiday Punch', 'Surf City Lifesaver',
       'Swedish Coffee', 'Sweet Bananas', 'Sweet Sangria', 'Sweet Tooth',
       'Talos Coffee', 'Tennesee Mud', 'Tequila Fizz', 'Tequila Sour',
       'Tequila Sunrise', 'Tequila Surprise', 'Texas Rattlesnake',
       'Texas Sling', 'Thai Coffee', 'Thai Iced Coffee', 'Thai Iced Tea',
       'The Evil Blue Thing', 'Thriller', 'Tia-Maria', 'Tom Collins',
       'Tomato Tang', "Tommy's Margarita", 'Turf Cocktail', 'Turkeyball',
       'Tuxedo Cocktail', 'Valencia Cocktail', 'Vampiro', 'Van Vleet',
       'Vermouth Cassis', 'Vesper', 'Vesuvio', 'Veteran', 'Victor',
       'Victory Collins', 'Vodka And Tonic', 'Vodka Fizz',
       'Vodka Martini', 'Vodka Russian', 'Waikiki Beachcomber',
       'Whiskey Sour', 'Whisky Mac', 'White Lady', 'White Russian',
       'Whitecap Margarita', 'Wine Cooler', 'Wine Punch', 'Yellow Bird',
       'Yoghurt Cooler', 'Zambeer', 'Zenmeister',
       'Ziemes Martini Apfelsaft', 'Zima Blaster', 'Zimadori Zinger',
       'Zinger', 'Zipperhead', "Zippy's Revenge", 'Zizi Coin-coin',
       'Zoksel', 'Zorbatini', 'Zorro']