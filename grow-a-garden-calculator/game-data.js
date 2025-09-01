// Game Data for Grow a Garden Calculator
// This contains all plant data, mutations, and game parameters

const gameData = {
    // Plant database with base values and growth parameters (based on reference site)
    plants: {
        // Fruits & Vegetables
        'carrot': { id: 'carrot', name: 'Carrot', category: 'fruits', baseValue: 5, icon: '🥕' },
        'strawberry': { id: 'strawberry', name: 'Strawberry', category: 'fruits', baseValue: 15, icon: '🍓' },
        'blueberry': { id: 'blueberry', name: 'Blueberry', category: 'fruits', baseValue: 25, icon: '🫐' },
        'tomato': { id: 'tomato', name: 'Tomato', category: 'fruits', baseValue: 20, icon: '🍅' },
        'cauliflower': { id: 'cauliflower', name: 'Cauliflower', category: 'fruits', baseValue: 30, icon: '🥬' },
        'watermelon': { id: 'watermelon', name: 'Watermelon', category: 'fruits', baseValue: 40, icon: '🍉' },
        'rafflesia': { id: 'rafflesia', name: 'Rafflesia', category: 'fruits', baseValue: 85, icon: '🌺' },
        'greenapple': { id: 'greenapple', name: 'Green Apple', category: 'fruits', baseValue: 45, icon: '🍏' },
        'avocado': { id: 'avocado', name: 'Avocado', category: 'fruits', baseValue: 55, icon: '🥑' },
        'banana': { id: 'banana', name: 'Banana', category: 'fruits', baseValue: 50, icon: '🍌' },
        'pineapple': { id: 'pineapple', name: 'Pineapple', category: 'fruits', baseValue: 75, icon: '🍍' },
        'kiwi': { id: 'kiwi', name: 'Kiwi', category: 'fruits', baseValue: 35, icon: '🥝' },
        'bellpepper': { id: 'bellpepper', name: 'Bell Pepper', category: 'fruits', baseValue: 25, icon: '🫑' },
        'pricklypear': { id: 'pricklypear', name: 'Prickly Pear', category: 'fruits', baseValue: 45, icon: '🌵' },
        'loquat': { id: 'loquat', name: 'Loquat', category: 'fruits', baseValue: 40, icon: '🍑' },
        'feijoa': { id: 'feijoa', name: 'Feijoa', category: 'fruits', baseValue: 42, icon: '🟢' },
        'pitcherplant': { id: 'pitcherplant', name: 'Pitcher Plant', category: 'fruits', baseValue: 65, icon: '🪴' },
        'corn': { id: 'corn', name: 'Corn', category: 'fruits', baseValue: 12, icon: '🌽' },
        'pumpkin': { id: 'pumpkin', name: 'Pumpkin', category: 'fruits', baseValue: 60, icon: '🎃' },
        'apple': { id: 'apple', name: 'Apple', category: 'fruits', baseValue: 35, icon: '🍎' },
        'bamboo': { id: 'bamboo', name: 'Bamboo', category: 'fruits', baseValue: 30, icon: '🎋' },
        'coconut': { id: 'coconut', name: 'Coconut', category: 'fruits', baseValue: 70, icon: '🥥' },
        'cactus': { id: 'cactus', name: 'Cactus', category: 'fruits', baseValue: 25, icon: '🌵' },
        'dragonfruit': { id: 'dragonfruit', name: 'Dragon Fruit', category: 'fruits', baseValue: 95, icon: '🐲' },
        'mango': { id: 'mango', name: 'Mango', category: 'fruits', baseValue: 80, icon: '🥭' },
        'grape': { id: 'grape', name: 'Grape', category: 'fruits', baseValue: 45, icon: '🍇' },
        'mushroom': { id: 'mushroom', name: 'Mushroom', category: 'fruits', baseValue: 22, icon: '🍄' },
        'pepper': { id: 'pepper', name: 'Pepper', category: 'fruits', baseValue: 18, icon: '🌶️' },
        'cacao': { id: 'cacao', name: 'Cacao', category: 'fruits', baseValue: 85, icon: '🍫' },
        'beanstalk': { id: 'beanstalk', name: 'Beanstalk', category: 'fruits', baseValue: 120, icon: '🫘' },
        'emberlily': { id: 'emberlily', name: 'Ember Lily', category: 'fruits', baseValue: 150, icon: '🔥' },
        'sugarapple': { id: 'sugarapple', name: 'Sugar Apple', category: 'fruits', baseValue: 90, icon: '🍎' },
        'burningbud': { id: 'burningbud', name: 'Burning Bud', category: 'fruits', baseValue: 180, icon: '🔥' },
        'giantpinecone': { id: 'giantpinecone', name: 'Giant Pinecone', category: 'fruits', baseValue: 140, icon: '🌲' },
        'elderstrawberry': { id: 'elderstrawberry', name: 'Elder Strawberry', category: 'fruits', baseValue: 200, icon: '🍓' },
        'romanesco': { id: 'romanesco', name: 'Romanesco', category: 'fruits', baseValue: 110, icon: '🥬' },
        'papaya': { id: 'papaya', name: 'Papaya', category: 'fruits', baseValue: 75, icon: '🧡' },
        'passionfruit': { id: 'passionfruit', name: 'Passion Fruit', category: 'fruits', baseValue: 85, icon: '🟣' },
        'soulfruit': { id: 'soulfruit', name: 'Soul Fruit', category: 'fruits', baseValue: 300, icon: '👻' },
        'cursedfruit': { id: 'cursedfruit', name: 'Cursed Fruit', category: 'fruits', baseValue: 250, icon: '💀' },
        'raspberry': { id: 'raspberry', name: 'Raspberry', category: 'fruits', baseValue: 28, icon: '🔴' },
        'peach': { id: 'peach', name: 'Peach', category: 'fruits', baseValue: 55, icon: '🍑' },
        'chocolatecarrot': { id: 'chocolatecarrot', name: 'Chocolate Carrot', category: 'fruits', baseValue: 95, icon: '🍫' },
        'redlolipop': { id: 'redlolipop', name: 'Red Lollipop', category: 'fruits', baseValue: 88, icon: '🍭' },
        'candysunflower': { id: 'candysunflower', name: 'Candy Sunflower', category: 'fruits', baseValue: 105, icon: '🍬' },
        'candyblossom': { id: 'candyblossom', name: 'Candy Blossom', category: 'fruits', baseValue: 92, icon: '🌸' },
        'easteregg': { id: 'easteregg', name: 'Easter Egg', category: 'fruits', baseValue: 125, icon: '🥚' },
        'cranberry': { id: 'cranberry', name: 'Cranberry', category: 'fruits', baseValue: 32, icon: '🔴' },
        'durian': { id: 'durian', name: 'Durian', category: 'fruits', baseValue: 120, icon: '🟤' },
        'eggplant': { id: 'eggplant', name: 'Eggplant', category: 'fruits', baseValue: 38, icon: '🍆' },
        'lotus': { id: 'lotus', name: 'Lotus', category: 'fruits', baseValue: 85, icon: '🪷' },
        'venusflytrap': { id: 'venusflytrap', name: 'Venus Flytrap', category: 'fruits', baseValue: 95, icon: '🪲' },
        'nightshade': { id: 'nightshade', name: 'Nightshade', category: 'fruits', baseValue: 110, icon: '🌙' },
        'mint': { id: 'mint', name: 'Mint', category: 'fruits', baseValue: 22, icon: '🌿' },
        'glowshroom': { id: 'glowshroom', name: 'Glow Shroom', category: 'fruits', baseValue: 75, icon: '✨' },
        'onion': { id: 'onion', name: 'Onion', category: 'fruits', baseValue: 18, icon: '🧅' },
        'artichoke': { id: 'artichoke', name: 'Artichoke', category: 'fruits', baseValue: 45, icon: '🟢' },
        'tacofern': { id: 'tacofern', name: 'Taco Fern', category: 'fruits', baseValue: 88, icon: '🌮' },
        'sugarglaze': { id: 'sugarglaze', name: 'Sugar Glaze', category: 'fruits', baseValue: 92, icon: '🍯' },
        'jalapeno': { id: 'jalapeno', name: 'Jalapeño', category: 'fruits', baseValue: 35, icon: '🌶️' },
        'crownmelon': { id: 'crownmelon', name: 'Crown Melon', category: 'fruits', baseValue: 150, icon: '👑' },
        'tallasparagus': { id: 'tallasparagus', name: 'Tall Asparagus', category: 'fruits', baseValue: 55, icon: '🟢' },
        'grandtomato': { id: 'grandtomato', name: 'Grand Tomato', category: 'fruits', baseValue: 120, icon: '🍅' },
        'rhubarb': { id: 'rhubarb', name: 'Rhubarb', category: 'fruits', baseValue: 42, icon: '🔴' },
        'springonion': { id: 'springonion', name: 'Spring Onion', category: 'fruits', baseValue: 28, icon: '🌱' },
        'pricklefruit': { id: 'pricklefruit', name: 'Prickle Fruit', category: 'fruits', baseValue: 65, icon: '🌵' },
        'bittermelon': { id: 'bittermelon', name: 'Bitter Melon', category: 'fruits', baseValue: 48, icon: '🥒' },
        'badlandpepper': { id: 'badlandpepper', name: 'Badland Pepper', category: 'fruits', baseValue: 85, icon: '🌶️' },
        'kingcabbage': { id: 'kingcabbage', name: 'King Cabbage', category: 'fruits', baseValue: 110, icon: '👑' },
        'butternutsquash': { id: 'butternutsquash', name: 'Butternut Squash', category: 'fruits', baseValue: 68, icon: '🧡' },
        'mandrake': { id: 'mandrake', name: 'Mandrake', category: 'fruits', baseValue: 95, icon: '🌿' },
        'mangosteen': { id: 'mangosteen', name: 'Mangosteen', category: 'fruits', baseValue: 88, icon: '🟣' },
        'poseidonplant': { id: 'poseidonplant', name: 'Poseidon Plant', category: 'fruits', baseValue: 200, icon: '🔱' },
        'flaredaisy': { id: 'flaredaisy', name: 'Flare Daisy', category: 'fruits', baseValue: 125, icon: '🔥' },
        'gleamroot': { id: 'gleamroot', name: 'Gleam Root', category: 'fruits', baseValue: 105, icon: '✨' },
        'canarymelon': { id: 'canarymelon', name: 'Canary Melon', category: 'fruits', baseValue: 78, icon: '🟡' },
        'duskpuff': { id: 'duskpuff', name: 'Dusk Puff', category: 'fruits', baseValue: 85, icon: '🌙' },
        'goldenegg': { id: 'goldenegg', name: 'Golden Egg', category: 'fruits', baseValue: 250, icon: '🥚' },
        'amberheart': { id: 'amberheart', name: 'Amber Heart', category: 'fruits', baseValue: 180, icon: '🧡' },
        'princessthorn': { id: 'princessthorn', name: 'Princess Thorn', category: 'fruits', baseValue: 155, icon: '👸' },
        'flaremelon': { id: 'flaremelon', name: 'Flare Melon', category: 'fruits', baseValue: 142, icon: '🔥' },
        'crownofthorn': { id: 'crownofthorn', name: 'Crown of Thorn', category: 'fruits', baseValue: 188, icon: '👑' },
        'callalily': { id: 'callalily', name: 'Calla Lily', category: 'fruits', baseValue: 95, icon: '🤍' },
        'glowpod': { id: 'glowpod', name: 'Glow Pod', category: 'fruits', baseValue: 85, icon: '✨' },
        'willowberry': { id: 'willowberry', name: 'Willow Berry', category: 'fruits', baseValue: 72, icon: '🌿' },
        'cyclamen': { id: 'cyclamen', name: 'Cyclamen', category: 'fruits', baseValue: 68, icon: '🌸' },

        // Moon Plants
        'moonmelon': { id: 'moonmelon', name: 'Moon Melon', category: 'moon', baseValue: 180, icon: '🌙' },
        'starfruit': { id: 'starfruit', name: 'Star Fruit', category: 'moon', baseValue: 220, icon: '⭐' },
        'moonflower': { id: 'moonflower', name: 'Moon Flower', category: 'moon', baseValue: 190, icon: '🌙' },
        'bloodbanana': { id: 'bloodbanana', name: 'Blood Banana', category: 'moon', baseValue: 200, icon: '🩸' },
        'moonglow': { id: 'moonglow', name: 'Moon Glow', category: 'moon', baseValue: 250, icon: '🌙' },
        'moonblossom': { id: 'moonblossom', name: 'Moon Blossom', category: 'moon', baseValue: 210, icon: '🌙' },
        'celestiberry': { id: 'celestiberry', name: 'Celesti Berry', category: 'moon', baseValue: 280, icon: '⭐' },
        'moonmango': { id: 'moonmango', name: 'Moon Mango', category: 'moon', baseValue: 240, icon: '🌙' },

        // Flowers
        'orangetulip': { id: 'orangetulip', name: 'Orange Tulip', category: 'flowers', baseValue: 45, icon: '🌷' },
        'daffodil': { id: 'daffodil', name: 'Daffodil', category: 'flowers', baseValue: 38, icon: '🌼' },
        'hive': { id: 'hive', name: 'Hive', category: 'flowers', baseValue: 120, icon: '🍯' },
        'nectarine': { id: 'nectarine', name: 'Nectarine', category: 'flowers', baseValue: 65, icon: '🍑' },
        'rose': { id: 'rose', name: 'Rose', category: 'flowers', baseValue: 85, icon: '🌹' },
        'foxglove': { id: 'foxglove', name: 'Foxglove', category: 'flowers', baseValue: 75, icon: '🦊' },
        'purpledahlia': { id: 'purpledahlia', name: 'Purple Dahlia', category: 'flowers', baseValue: 88, icon: '🟣' },
        'pinklily': { id: 'pinklily', name: 'Pink Lily', category: 'flowers', baseValue: 72, icon: '🌸' },
        'lilac': { id: 'lilac', name: 'Lilac', category: 'flowers', baseValue: 68, icon: '💜' },
        'sunflower': { id: 'sunflower', name: 'Sunflower', category: 'flowers', baseValue: 95, icon: '🌻' },
        'lavender': { id: 'lavender', name: 'Lavender', category: 'flowers', baseValue: 78, icon: '💜' },
        'nectarshade': { id: 'nectarshade', name: 'Nectar Shade', category: 'flowers', baseValue: 105, icon: '🍯' },
        'manuka': { id: 'manuka', name: 'Manuka', category: 'flowers', baseValue: 110, icon: '🍯' },
        'dandelion': { id: 'dandelion', name: 'Dandelion', category: 'flowers', baseValue: 25, icon: '🌼' },
        'lumira': { id: 'lumira', name: 'Lumira', category: 'flowers', baseValue: 125, icon: '✨' },
        'honeysuckle': { id: 'honeysuckle', name: 'Honeysuckle', category: 'flowers', baseValue: 85, icon: '🍯' },
        'beebalm': { id: 'beebalm', name: 'Bee Balm', category: 'flowers', baseValue: 92, icon: '🐝' },
        'nectarthorn': { id: 'nectarthorn', name: 'Nectar Thorn', category: 'flowers', baseValue: 118, icon: '🌹' },
        'suncoil': { id: 'suncoil', name: 'Sun Coil', category: 'flowers', baseValue: 135, icon: '🌻' },
        'crocus': { id: 'crocus', name: 'Crocus', category: 'flowers', baseValue: 42, icon: '🟣' },
        'succulent': { id: 'succulent', name: 'Succulent', category: 'flowers', baseValue: 55, icon: '🪴' },
        'violetcorn': { id: 'violetcorn', name: 'Violet Corn', category: 'flowers', baseValue: 78, icon: '🟣' },
        'bendboo': { id: 'bendboo', name: 'Bend Boo', category: 'flowers', baseValue: 65, icon: '👻' },
        'cocovine': { id: 'cocovine', name: 'Coco Vine', category: 'flowers', baseValue: 88, icon: '🥥' },
        'dragonpepper': { id: 'dragonpepper', name: 'Dragon Pepper', category: 'flowers', baseValue: 125, icon: '🐲' },
        'wildcarrot': { id: 'wildcarrot', name: 'Wild Carrot', category: 'flowers', baseValue: 45, icon: '🥕' },
        'pear': { id: 'pear', name: 'Pear', category: 'flowers', baseValue: 52, icon: '🍐' },
        'cantaloupe': { id: 'cantaloupe', name: 'Cantaloupe', category: 'flowers', baseValue: 68, icon: '🍈' },
        'parasolflower': { id: 'parasolflower', name: 'Parasol Flower', category: 'flowers', baseValue: 95, icon: '☂️' },
        'rosydelight': { id: 'rosydelight', name: 'Rosy Delight', category: 'flowers', baseValue: 105, icon: '🌹' },
        'elephantears': { id: 'elephantears', name: 'Elephant Ears', category: 'flowers', baseValue: 88, icon: '🐘' },
        'peacelily': { id: 'peacelily', name: 'Peace Lily', category: 'flowers', baseValue: 85, icon: '☮️' },
        'delphinium': { id: 'delphinium', name: 'Delphinium', category: 'flowers', baseValue: 75, icon: '🟦' },
        'travelersfruit': { id: 'travelersfruit', name: 'Travelers Fruit', category: 'flowers', baseValue: 120, icon: '🧳' },
        'lilyofthevalley': { id: 'lilyofthevalley', name: 'Lily of the Valley', category: 'flowers', baseValue: 95, icon: '🤍' },
        'aloevera': { id: 'aloevera', name: 'Aloe Vera', category: 'flowers', baseValue: 55, icon: '🌿' },
        'guanabana': { id: 'guanabana', name: 'Guanabana', category: 'flowers', baseValue: 78, icon: '🟢' },
        'libertylily': { id: 'libertylily', name: 'Liberty Lily', category: 'flowers', baseValue: 155, icon: '🗽' },
        'fireworkflower': { id: 'fireworkflower', name: 'Firework Flower', category: 'flowers', baseValue: 185, icon: '🎆' },
        'boneblossom': { id: 'boneblossom', name: 'Bone Blossom', category: 'flowers', baseValue: 125, icon: '💀' },
        'stonebite': { id: 'stonebite', name: 'Stone Bite', category: 'flowers', baseValue: 95, icon: '🪨' },
        'paradisepetal': { id: 'paradisepetal', name: 'Paradise Petal', category: 'flowers', baseValue: 200, icon: '🌺' },
        'horneddinoshroom': { id: 'horneddinoshroom', name: 'Horned Dino Shroom', category: 'flowers', baseValue: 180, icon: '🦕' },
        'boneboo': { id: 'boneboo', name: 'Bone Boo', category: 'flowers', baseValue: 105, icon: '👻' },
        'fireflyfern': { id: 'fireflyfern', name: 'Firefly Fern', category: 'flowers', baseValue: 125, icon: '✨' },
        'fossilight': { id: 'fossilight', name: 'Fossi Light', category: 'flowers', baseValue: 155, icon: '💎' },
        'horsetail': { id: 'horsetail', name: 'Horsetail', category: 'flowers', baseValue: 68, icon: '🐎' },
        'amberspine': { id: 'amberspine', name: 'Amber Spine', category: 'flowers', baseValue: 145, icon: '🧡' },
        'grandvolcania': { id: 'grandvolcania', name: 'Grand Volcania', category: 'flowers', baseValue: 250, icon: '🌋' },
        'lingonberry': { id: 'lingonberry', name: 'Lingon Berry', category: 'flowers', baseValue: 48, icon: '🔴' },
        'monoblooma': { id: 'monoblooma', name: 'Mono Blooma', category: 'flowers', baseValue: 85, icon: '⚫' },
        'spikedmango': { id: 'spikedmango', name: 'Spiked Mango', category: 'flowers', baseValue: 118, icon: '🥭' },
        'taroflower': { id: 'taroflower', name: 'Taro Flower', category: 'flowers', baseValue: 95, icon: '🟣' },
        'softsunshine': { id: 'softsunshine', name: 'Soft Sunshine', category: 'flowers', baseValue: 105, icon: '☀️' },
        'serenity': { id: 'serenity', name: 'Serenity', category: 'flowers', baseValue: 135, icon: '☮️' },
        'zenflare': { id: 'zenflare', name: 'Zen Flare', category: 'flowers', baseValue: 125, icon: '🧘' },
        'zenrocks': { id: 'zenrocks', name: 'Zen Rocks', category: 'flowers', baseValue: 88, icon: '🪨' },
        'hinomai': { id: 'hinomai', name: 'Hinomai', category: 'flowers', baseValue: 155, icon: '🌸' },
        'mapleapple': { id: 'mapleapple', name: 'Maple Apple', category: 'flowers', baseValue: 95, icon: '🍁' },
        'dezen': { id: 'dezen', name: 'Dezen', category: 'flowers', baseValue: 142, icon: '🌿' },
        'luckybamboo': { id: 'luckybamboo', name: 'Lucky Bamboo', category: 'flowers', baseValue: 108, icon: '🎋' },
        'sakurabush': { id: 'sakurabush', name: 'Sakura Bush', category: 'flowers', baseValue: 185, icon: '🌸' },
        'tranquilbloom': { id: 'tranquilbloom', name: 'Tranquil Bloom', category: 'flowers', baseValue: 165, icon: '🧘' },
        'enkaku': { id: 'enkaku', name: 'Enkaku', category: 'flowers', baseValue: 195, icon: '⚫' },
        'fruitball': { id: 'fruitball', name: 'Fruit Ball', category: 'flowers', baseValue: 88, icon: '⚽' },
        'twistedtangle': { id: 'twistedtangle', name: 'Twisted Tangle', category: 'flowers', baseValue: 125, icon: '🌀' },
        'veinpetal': { id: 'veinpetal', name: 'Vein Petal', category: 'flowers', baseValue: 105, icon: '🩸' },
        'tomato': { id: 'tomato', name: 'Tomato', category: 'fruits', baseValue: 15, growthTime: 600, icon: '🍅' },
        'watermelon': { id: 'watermelon', name: 'Watermelon', category: 'fruits', baseValue: 25, growthTime: 900, icon: '🍉' },
        'pumpkin': { id: 'pumpkin', name: 'Pumpkin', category: 'fruits', baseValue: 35, growthTime: 1200, icon: '🎃' },
        'strawberry': { id: 'strawberry', name: 'Strawberry', category: 'fruits', baseValue: 20, growthTime: 720, icon: '🍓' },
        'blueberry': { id: 'blueberry', name: 'Blueberry', category: 'fruits', baseValue: 30, growthTime: 1080, icon: '🫐' },
        'apple': { id: 'apple', name: 'Apple', category: 'fruits', baseValue: 40, growthTime: 1500, icon: '🍎' },
        'grape': { id: 'grape', name: 'Grape', category: 'fruits', baseValue: 50, growthTime: 1800, icon: '🍇' },
        'orange': { id: 'orange', name: 'Orange', category: 'fruits', baseValue: 45, growthTime: 1350, icon: '🍊' },
        'lemon': { id: 'lemon', name: 'Lemon', category: 'fruits', baseValue: 38, growthTime: 1260, icon: '🍋' },
        'banana': { id: 'banana', name: 'Banana', category: 'fruits', baseValue: 55, growthTime: 1980, icon: '🍌' },
        'pear': { id: 'pear', name: 'Pear', category: 'fruits', baseValue: 42, growthTime: 1440, icon: '🍐' },
        'peach': { id: 'peach', name: 'Peach', category: 'fruits', baseValue: 48, growthTime: 1620, icon: '🍑' },
        'cherry': { id: 'cherry', name: 'Cherry', category: 'fruits', baseValue: 52, growthTime: 1740, icon: '🍒' },
        'broccoli': { id: 'broccoli', name: 'Broccoli', category: 'fruits', baseValue: 22, growthTime: 660, icon: '🥦' },
        'lettuce': { id: 'lettuce', name: 'Lettuce', category: 'fruits', baseValue: 18, growthTime: 540, icon: '🥬' },
        'cucumber': { id: 'cucumber', name: 'Cucumber', category: 'fruits', baseValue: 28, growthTime: 840, icon: '🥒' },
        'pepper': { id: 'pepper', name: 'Pepper', category: 'fruits', baseValue: 32, growthTime: 960, icon: '🌶️' },

        // Flowers
        'rose': { id: 'rose', name: 'Rose', category: 'flowers', baseValue: 60, growthTime: 900, icon: '🌹' },
        'tulip': { id: 'tulip', name: 'Tulip', category: 'flowers', baseValue: 45, growthTime: 720, icon: '🌷' },
        'sunflower': { id: 'sunflower', name: 'Sunflower', category: 'flowers', baseValue: 75, growthTime: 1200, icon: '🌻' },
        'lily': { id: 'lily', name: 'Lily', category: 'flowers', baseValue: 85, growthTime: 1350, icon: '🌺' },
        'daisy': { id: 'daisy', name: 'Daisy', category: 'flowers', baseValue: 35, growthTime: 600, icon: '🌼' },
        'violet': { id: 'violet', name: 'Violet', category: 'flowers', baseValue: 40, growthTime: 660, icon: '🟣' },
        'orchid': { id: 'orchid', name: 'Orchid', category: 'flowers', baseValue: 120, growthTime: 1800, icon: '🌺' },
        'carnation': { id: 'carnation', name: 'Carnation', category: 'flowers', baseValue: 50, growthTime: 780, icon: '🌸' },
        'chrysanthemum': { id: 'chrysanthemum', name: 'Chrysanthemum', category: 'flowers', baseValue: 65, growthTime: 1020, icon: '🏵️' },
        'hibiscus': { id: 'hibiscus', name: 'Hibiscus', category: 'flowers', baseValue: 70, growthTime: 1080, icon: '🌺' },
        'jasmine': { id: 'jasmine', name: 'Jasmine', category: 'flowers', baseValue: 90, growthTime: 1440, icon: '🤍' },
        'lavender': { id: 'lavender', name: 'Lavender', category: 'flowers', baseValue: 80, growthTime: 1260, icon: '💜' },
        'marigold': { id: 'marigold', name: 'Marigold', category: 'flowers', baseValue: 42, growthTime: 690, icon: '🟡' },
        'petunia': { id: 'petunia', name: 'Petunia', category: 'flowers', baseValue: 38, growthTime: 630, icon: '🌺' },
        'azalea': { id: 'azalea', name: 'Azalea', category: 'flowers', baseValue: 95, growthTime: 1500, icon: '🌸' },

        // Special Plants
        'golden_carrot': { id: 'golden_carrot', name: 'Golden Carrot', category: 'special', baseValue: 250, growthTime: 360, icon: '✨🥕' },
        'diamond_apple': { id: 'diamond_apple', name: 'Diamond Apple', category: 'special', baseValue: 500, growthTime: 900, icon: '💎🍎' },
        'crystal_corn': { id: 'crystal_corn', name: 'Crystal Corn', category: 'special', baseValue: 400, growthTime: 720, icon: '💎🌽' },
        'rainbow_rose': { id: 'rainbow_rose', name: 'Rainbow Rose', category: 'special', baseValue: 750, growthTime: 1200, icon: '🌈🌹' },
        'ruby_tomato': { id: 'ruby_tomato', name: 'Ruby Tomato', category: 'special', baseValue: 350, growthTime: 600, icon: '💎🍅' },
        'emerald_grape': { id: 'emerald_grape', name: 'Emerald Grape', category: 'special', baseValue: 600, growthTime: 1080, icon: '💚🍇' },
        'sapphire_berry': { id: 'sapphire_berry', name: 'Sapphire Berry', category: 'special', baseValue: 450, growthTime: 840, icon: '💙🫐' },
        'platinum_peach': { id: 'platinum_peach', name: 'Platinum Peach', category: 'special', baseValue: 800, growthTime: 1440, icon: '⚪🍑' },
        'titanium_tulip': { id: 'titanium_tulip', name: 'Titanium Tulip', category: 'special', baseValue: 650, growthTime: 1020, icon: '⚡🌷' },
        'cosmic_sunflower': { id: 'cosmic_sunflower', name: 'Cosmic Sunflower', category: 'special', baseValue: 900, growthTime: 1680, icon: '🌌🌻' },

        // Moon Plants
        'lunar_lettuce': { id: 'lunar_lettuce', name: 'Lunar Lettuce', category: 'moon', baseValue: 180, growthTime: 420, icon: '🌙🥬' },
        'star_fruit': { id: 'star_fruit', name: 'Star Fruit', category: 'moon', baseValue: 220, growthTime: 540, icon: '⭐🍎' },
        'nebula_flower': { id: 'nebula_flower', name: 'Nebula Flower', category: 'moon', baseValue: 280, growthTime: 720, icon: '🌌🌸' },
        'meteor_melon': { id: 'meteor_melon', name: 'Meteor Melon', category: 'moon', baseValue: 350, growthTime: 900, icon: '☄️🍈' },
        'galaxy_grape': { id: 'galaxy_grape', name: 'Galaxy Grape', category: 'moon', baseValue: 420, growthTime: 1080, icon: '🌌🍇' },
        'comet_carrot': { id: 'comet_carrot', name: 'Comet Carrot', category: 'moon', baseValue: 160, growthTime: 360, icon: '☄️🥕' },
        'astro_apple': { id: 'astro_apple', name: 'Astro Apple', category: 'moon', baseValue: 380, growthTime: 1020, icon: '👨‍🚀🍎' },
        'cosmic_corn': { id: 'cosmic_corn', name: 'Cosmic Corn', category: 'moon', baseValue: 320, growthTime: 780, icon: '🌌🌽' },
        'satellite_sunflower': { id: 'satellite_sunflower', name: 'Satellite Sunflower', category: 'moon', baseValue: 480, growthTime: 1260, icon: '🛰️🌻' },
        'space_strawberry': { id: 'space_strawberry', name: 'Space Strawberry', category: 'moon', baseValue: 240, growthTime: 600, icon: '🚀🍓' },

        // Rare Plants
        'phoenix_pepper': { id: 'phoenix_pepper', name: 'Phoenix Pepper', category: 'rare', baseValue: 1200, growthTime: 1800, icon: '🔥🌶️' },
        'dragon_fruit': { id: 'dragon_fruit', name: 'Dragon Fruit', category: 'rare', baseValue: 1500, growthTime: 2160, icon: '🐉🍎' },
        'unicorn_berry': { id: 'unicorn_berry', name: 'Unicorn Berry', category: 'rare', baseValue: 2000, growthTime: 2700, icon: '🦄🫐' },
        'celestial_bloom': { id: 'celestial_bloom', name: 'Celestial Bloom', category: 'rare', baseValue: 2800, growthTime: 3600, icon: '⭐🌸' },
        'ethereal_rose': { id: 'ethereal_rose', name: 'Ethereal Rose', category: 'rare', baseValue: 3200, growthTime: 4200, icon: '👻🌹' },
        'void_violet': { id: 'void_violet', name: 'Void Violet', category: 'rare', baseValue: 2600, growthTime: 3300, icon: '🕳️🟣' },
        'time_tulip': { id: 'time_tulip', name: 'Time Tulip', category: 'rare', baseValue: 2200, growthTime: 2880, icon: '⏰🌷' },
        'quantum_corn': { id: 'quantum_corn', name: 'Quantum Corn', category: 'rare', baseValue: 1800, growthTime: 2400, icon: '⚛️🌽' },
        'infinity_apple': { id: 'infinity_apple', name: 'Infinity Apple', category: 'rare', baseValue: 4000, growthTime: 5400, icon: '♾️🍎' },
        'omega_orange': { id: 'omega_orange', name: 'Omega Orange', category: 'rare', baseValue: 3600, growthTime: 4800, icon: 'Ω🍊' },

        // Exotic Plants
        'prismatic_peach': { id: 'prismatic_peach', name: 'Prismatic Peach', category: 'exotic', baseValue: 5000, growthTime: 6000, icon: '🌈🍑' },
        'mythical_melon': { id: 'mythical_melon', name: 'Mythical Melon', category: 'exotic', baseValue: 7500, growthTime: 7200, icon: '🔮🍈' },
        'legendary_lemon': { id: 'legendary_lemon', name: 'Legendary Lemon', category: 'exotic', baseValue: 6200, growthTime: 6600, icon: '⚡🍋' },
        'divine_daisy': { id: 'divine_daisy', name: 'Divine Daisy', category: 'exotic', baseValue: 8000, growthTime: 7800, icon: '✨🌼' },
        'celestial_cherry': { id: 'celestial_cherry', name: 'Celestial Cherry', category: 'exotic', baseValue: 9500, growthTime: 8400, icon: '🌟🍒' },
        'galactic_grape': { id: 'galactic_grape', name: 'Galactic Grape', category: 'exotic', baseValue: 12000, growthTime: 9600, icon: '🌌🍇' },
        'universal_berry': { id: 'universal_berry', name: 'Universal Berry', category: 'exotic', baseValue: 15000, growthTime: 10800, icon: '🌍🫐' },
        'cosmic_carrot': { id: 'cosmic_carrot', name: 'Cosmic Carrot', category: 'exotic', baseValue: 10500, growthTime: 9000, icon: '🌌🥕' },
        'eternal_sunflower': { id: 'eternal_sunflower', name: 'Eternal Sunflower', category: 'exotic', baseValue: 18000, growthTime: 12000, icon: '♾️🌻' },
        'transcendent_tomato': { id: 'transcendent_tomato', name: 'Transcendent Tomato', category: 'exotic', baseValue: 20000, growthTime: 13200, icon: '🔮🍅' },

        // Additional Common Plants
        'broccoli': { id: 'broccoli', name: 'Broccoli', category: 'fruits', baseValue: 22, growthTime: 660, icon: '🥦' },
        'lettuce': { id: 'lettuce', name: 'Lettuce', category: 'fruits', baseValue: 18, growthTime: 540, icon: '🥬' },
        'cucumber': { id: 'cucumber', name: 'Cucumber', category: 'fruits', baseValue: 28, growthTime: 840, icon: '🥒' },
        'pepper': { id: 'pepper', name: 'Bell Pepper', category: 'fruits', baseValue: 32, growthTime: 960, icon: '🫑' },
        'onion': { id: 'onion', name: 'Onion', category: 'fruits', baseValue: 14, growthTime: 420, icon: '🧅' },
        'garlic': { id: 'garlic', name: 'Garlic', category: 'fruits', baseValue: 16, growthTime: 480, icon: '🧄' },
        'cabbage': { id: 'cabbage', name: 'Cabbage', category: 'fruits', baseValue: 26, growthTime: 780, icon: '🥬' },
        'cauliflower': { id: 'cauliflower', name: 'Cauliflower', category: 'fruits', baseValue: 24, growthTime: 720, icon: '🥬' },
        'radish': { id: 'radish', name: 'Radish', category: 'fruits', baseValue: 10, growthTime: 240, icon: '🔴' },
        'beet': { id: 'beet', name: 'Beet', category: 'fruits', baseValue: 19, growthTime: 570, icon: '🟤' },

        // Additional Flowers
        'daffodil': { id: 'daffodil', name: 'Daffodil', category: 'flowers', baseValue: 38, growthTime: 630, icon: '🌻' },
        'iris': { id: 'iris', name: 'Iris', category: 'flowers', baseValue: 55, growthTime: 870, icon: '🟣' },
        'peony': { id: 'peony', name: 'Peony', category: 'flowers', baseValue: 72, growthTime: 1140, icon: '🌸' },
        'begonia': { id: 'begonia', name: 'Begonia', category: 'flowers', baseValue: 48, growthTime: 750, icon: '🌺' },
        'geranium': { id: 'geranium', name: 'Geranium', category: 'flowers', baseValue: 41, growthTime: 660, icon: '🔴' },
        'pansy': { id: 'pansy', name: 'Pansy', category: 'flowers', baseValue: 33, growthTime: 540, icon: '🟣' },
        'snapdragon': { id: 'snapdragon', name: 'Snapdragon', category: 'flowers', baseValue: 58, growthTime: 930, icon: '🐉' },
        'zinnia': { id: 'zinnia', name: 'Zinnia', category: 'flowers', baseValue: 36, growthTime: 600, icon: '🌸' },
        'cosmos': { id: 'cosmos', name: 'Cosmos', category: 'flowers', baseValue: 44, growthTime: 720, icon: '🌌' },
        'dahlia': { id: 'dahlia', name: 'Dahlia', category: 'flowers', baseValue: 62, growthTime: 990, icon: '🟡' }
    },

    // Mutation database with exact multipliers from reference site
    mutations: {
        // Base Multipliers
        'rainbow': { name: 'Rainbow', multiplier: 50, category: 'Base', color: '#FF6B9D' },
        'gold': { name: 'Gold', multiplier: 20, category: 'Base', color: '#FFD700' },
        'silver': { name: 'Silver', multiplier: 5, category: 'Base', color: '#C0C0C0' },
        
        // High Tier Mutations
        'harmonisedfoxfire': { name: 'Harmonised Foxfire', multiplier: 190, category: 'Ultra Rare', color: '#FF0066' },
        'dawnbound': { name: 'Dawnbound', multiplier: 150, category: 'Ultra Rare', color: '#FFE4B5' },
        'voidtouched': { name: 'Voidtouched', multiplier: 135, category: 'Ultra Rare', color: '#483D8B' },
        'meteoric': { name: 'Meteoric', multiplier: 125, category: 'Epic', color: '#FF4500' },
        'disco': { name: 'Disco', multiplier: 125, category: 'Epic', color: '#FF69B4' },
        'celestial': { name: 'Celestial', multiplier: 120, category: 'Epic', color: '#87CEEB' },
        'galactic': { name: 'Galactic', multiplier: 120, category: 'Epic', color: '#8A2BE2' },
        'touchdown': { name: 'Touchdown', multiplier: 105, category: 'Epic', color: '#228B22' },
        'shocked': { name: 'Shocked', multiplier: 100, category: 'Epic', color: '#FFFF00' },
        'alienlike': { name: 'Alienlike', multiplier: 100, category: 'Epic', color: '#32CD32' },
        'paradisal': { name: 'Paradisal', multiplier: 100, category: 'Epic', color: '#FF1493' },
        'brainrot': { name: 'Brainrot', multiplier: 100, category: 'Epic', color: '#8B008B' },
        'beanbound': { name: 'Beanbound', multiplier: 100, category: 'Epic', color: '#8B4513' },
        'maelstrom': { name: 'Maelstrom', multiplier: 100, category: 'Epic', color: '#4682B4' },
        
        // High-Mid Tier Mutations
        'foxfire': { name: 'Foxfire', multiplier: 90, category: 'Rare', color: '#FF4500' },
        'aurora': { name: 'Aurora', multiplier: 90, category: 'Rare', color: '#00FF7F' },
        'sundried': { name: 'Sundried', multiplier: 85, category: 'Rare', color: '#FFA500' },
        'warped': { name: 'Warped', multiplier: 75, category: 'Rare', color: '#9932CC' },
        'infected': { name: 'Infected', multiplier: 75, category: 'Rare', color: '#800080' },
        'friendbound': { name: 'Friendbound', multiplier: 70, category: 'Rare', color: '#FFB6C1' },
        'radioactive': { name: 'Radioactive', multiplier: 55, category: 'Rare', color: '#ADFF2F' },
        'cyclonic': { name: 'Cyclonic', multiplier: 50, category: 'Rare', color: '#87CEEB' },
        'sliced': { name: 'Sliced', multiplier: 50, category: 'Rare', color: '#FF6347' },
        'fortune': { name: 'Fortune', multiplier: 50, category: 'Rare', color: '#FFD700' },
        'lightcycle': { name: 'Lightcycle', multiplier: 50, category: 'Rare', color: '#00CED1' },
        'blitzshock': { name: 'Blitzshock', multiplier: 50, category: 'Rare', color: '#FFFF00' },
        'ancientamber': { name: 'Ancient Amber', multiplier: 50, category: 'Rare', color: '#FFBF00' },
        'junkshock': { name: 'Junkshock', multiplier: 45, category: 'Rare', color: '#696969' },
        'subzero': { name: 'Subzero', multiplier: 40, category: 'Rare', color: '#B0E0E6' },
        'harmonisedchakra': { name: 'Harmonised Chakra', multiplier: 35, category: 'Rare', color: '#DDA0DD' },
        'ceramic': { name: 'Ceramic', multiplier: 32, category: 'Rare', color: '#F5DEB3' },
        
        // Mid Tier Mutations
        'gloom': { name: 'Gloom', multiplier: 30, category: 'Uncommon', color: '#2F4F4F' },
        'molten': { name: 'Molten', multiplier: 25, category: 'Uncommon', color: '#FF4500' },
        'zombified': { name: 'Zombified', multiplier: 25, category: 'Uncommon', color: '#228B22' },
        'tranquil': { name: 'Tranquil', multiplier: 20, category: 'Uncommon', color: '#20B2AA' },
        'corrupt': { name: 'Corrupt', multiplier: 20, category: 'Uncommon', color: '#800080' },
        'eclipsed': { name: 'Eclipsed', multiplier: 20, category: 'Uncommon', color: '#2F4F4F' },
        'oldamber': { name: 'Old Amber', multiplier: 20, category: 'Uncommon', color: '#FFBF00' },
        'spaghetti': { name: 'Spaghetti', multiplier: 15, category: 'Uncommon', color: '#FFE4B5' },
        'chakra': { name: 'Chakra', multiplier: 15, category: 'Uncommon', color: '#DDA0DD' },
        'jackpot': { name: 'Jackpot', multiplier: 15, category: 'Uncommon', color: '#FFD700' },
        'acidic': { name: 'Acidic', multiplier: 15, category: 'Uncommon', color: '#32CD32' },
        'aromatic': { name: 'Aromatic', multiplier: 15, category: 'Uncommon', color: '#FF69B4' },
        'oil': { name: 'Oil', multiplier: 15, category: 'Uncommon', color: '#696969' },
        'boil': { name: 'Boil', multiplier: 15, category: 'Uncommon', color: '#FF4500' },
        'gnomed': { name: 'Gnomed', multiplier: 15, category: 'Uncommon', color: '#8FBC8F' },
        'tempestous': { name: 'Tempestous', multiplier: 12, category: 'Uncommon', color: '#4682B4' },
        
        // Low Tier Mutations
        'frozen': { name: 'Frozen', multiplier: 10, category: 'Common', color: '#B0E0E6' },
        'cooked': { name: 'Cooked', multiplier: 10, category: 'Common', color: '#D2691E' },
        'amber': { name: 'Amber', multiplier: 10, category: 'Common', color: '#FFBF00' },
        'fried': { name: 'Fried', multiplier: 8, category: 'Common', color: '#DAA520' },
        'rot': { name: 'Rot', multiplier: 8, category: 'Common', color: '#8B4513' },
        'bloom': { name: 'Bloom', multiplier: 8, category: 'Common', color: '#FF69B4' },
        'static': { name: 'Static', multiplier: 8, category: 'Common', color: '#FFFF00' },
        'plasma': { name: 'Plasma', multiplier: 5, category: 'Common', color: '#FF00FF' },
        'heavenly': { name: 'Heavenly', multiplier: 5, category: 'Common', color: '#F0F8FF' },
        'twisted': { name: 'Twisted', multiplier: 5, category: 'Common', color: '#8B0000' },
        'cloudtouched': { name: 'Cloudtouched', multiplier: 5, category: 'Common', color: '#F5F5F5' },
        'drenched': { name: 'Drenched', multiplier: 5, category: 'Common', color: '#1E90FF' },
        'clay': { name: 'Clay', multiplier: 5, category: 'Common', color: '#8B4513' },
        'honeyglazed': { name: 'Honeyglazed', multiplier: 5, category: 'Common', color: '#FFD700' },
        'bloodlit': { name: 'Bloodlit', multiplier: 4, category: 'Common', color: '#8B0000' },
        'burnt': { name: 'Burnt', multiplier: 4, category: 'Common', color: '#8B4513' },
        'verdant': { name: 'Verdant', multiplier: 4, category: 'Common', color: '#228B22' },
        'pollinated': { name: 'Pollinated', multiplier: 3, category: 'Common', color: '#FFD700' },
        'sandy': { name: 'Sandy', multiplier: 3, category: 'Common', color: '#F4A460' },
        'sauce': { name: 'Sauce', multiplier: 3, category: 'Common', color: '#FF6347' },
        'pasta': { name: 'Pasta', multiplier: 3, category: 'Common', color: '#FFEBCD' },
        'meatball': { name: 'Meatball', multiplier: 3, category: 'Common', color: '#8B4513' },
        'wet': { name: 'Wet', multiplier: 2, category: 'Common', color: '#1E90FF' },
        'chilled': { name: 'Chilled', multiplier: 2, category: 'Common', color: '#B0E0E6' },
        'choc': { name: 'Choc', multiplier: 2, category: 'Common', color: '#D2691E' },
        'moonlit': { name: 'Moonlit', multiplier: 2, category: 'Common', color: '#E6E6FA' },
        'windstruck': { name: 'Windstruck', multiplier: 2, category: 'Common', color: '#F0F8FF' },

        // Admin Mutations (Hidden by default)
        'admin': { name: 'Admin', multiplier: 1000, category: 'Admin', color: '#000000' },
        'developer': { name: 'Developer', multiplier: 999, category: 'Admin', color: '#3F51B5' },
        'owner': { name: 'Owner', multiplier: 2000, category: 'Admin', color: '#9C27B0' }
    },

    // Garden sizes and their tile counts
    gardenSizes: {
        '3x3': 9,
        '3x5': 15,
        '5x5': 25,
        '5x7': 35,
        '7x7': 49,
        '7x9': 63,
        '9x9': 81
    },

    // Fertilizer types and their effects
    fertilizers: {
        'none': { 
            name: 'None', 
            timeMultiplier: 1.0, 
            cost: 0,
            description: 'No fertilizer used'
        },
        'regular': { 
            name: 'Regular Fertilizer', 
            timeMultiplier: 0.9, 
            cost: 1,
            description: 'Reduces growth time by 10%'
        },
        'super': { 
            name: 'Super Fertilizer', 
            timeMultiplier: 0.8, 
            cost: 2,
            description: 'Reduces growth time by 20%'
        },
        'mega': { 
            name: 'Mega Fertilizer', 
            timeMultiplier: 0.7, 
            cost: 3,
            description: 'Reduces growth time by 30%'
        }
    },

    // Game passes and their effects
    gamePasses: {
        'instaGrow': {
            name: 'Insta-Grow',
            effect: 'timeMultiplier',
            value: 0.5,
            description: 'Plants grow 50% faster'
        },
        'richSoil': {
            name: 'Rich Soil',
            effect: 'yieldMultiplier',
            value: 1.25,
            description: 'Plants yield 25% more'
        },
        'extraDrops': {
            name: 'Extra Drops',
            effect: 'yieldMultiplier',
            value: 1.25,
            description: 'Get 25% more drops'
        },
        'mythicalLuck': {
            name: 'Mythical Luck',
            effect: 'yieldMultiplier',
            value: 1.25,
            description: 'Increases rare drop chance by 25%'
        },
        'waterCapacity': {
            name: '2x Water Capacity',
            effect: 'waterStorage',
            value: 2.0,
            description: 'Doubles water storage capacity'
        },
        'fertilizerCapacity': {
            name: '2x Fertilizer Capacity',
            effect: 'fertilizerStorage',
            value: 2.0,
            description: 'Doubles fertilizer storage capacity'
        }
    },

    // Equipment effects
    equipment: {
        sprinkler: {
            name: 'Sprinkler',
            waterRange: 1, // Range in tiles
            waterPerTick: 5,
            description: 'Automatically waters plants in a 3x3 area'
        },
        lamp: {
            name: 'Lamp',
            lightRange: 1, // Range in tiles
            growthBonus: 1, // Reduces growth time by X seconds per lamp
            description: 'Speeds up plant growth in nearby tiles'
        }
    },

    // Base multipliers for different plant rarities
    baseMultipliers: {
        normal: { name: 'Normal', value: 1, color: '#9E9E9E' },
        silver: { name: 'Silver', value: 5, color: '#C0C0C0' },
        gold: { name: 'Gold', value: 20, color: '#FFD700' },
        rainbow: { name: 'Rainbow', value: 50, color: '#FF1493' }
    },

    // Categories for organizing plants
    plantCategories: [
        'All',
        'Seed Shop',
        'Special',
        'Rare',
        'Event',
        'Admin'
    ],

    // Categories for organizing mutations
    mutationCategories: [
        'All',
        'Common',
        'Uncommon', 
        'Rare',
        'Epic',
        'Ultra Rare',
        'Event',
        'Admin'
    ]
};

// Helper functions for calculations
const gameCalculations = {
    // Calculate plant value with mutations and base multiplier
    calculatePlantValue: function(plantId, weight, baseMultiplier, mutations) {
        const plant = gameData.plants[plantId];
        if (!plant) return 0;

        // Base value calculation
        const baseValue = plant.baseValue * weight;
        
        // Calculate total mutation multiplier
        let totalMutationMultiplier = 1;
        if (mutations && mutations.length > 0) {
            // Sum all mutation multipliers, then subtract number of mutations (as per game logic)
            const mutationSum = mutations.reduce((sum, mutationId) => {
                const mutation = gameData.mutations[mutationId];
                return sum + (mutation ? mutation.multiplier : 0);
            }, 0);
            
            totalMutationMultiplier = mutationSum - mutations.length + 1;
        }

        // Final calculation: base value × base multiplier × mutation multiplier
        return Math.floor(baseValue * baseMultiplier * Math.max(1, totalMutationMultiplier));
    },

    // Calculate growth time with all modifiers
    calculateGrowthTime: function(plantId, fertilizerType, lampCount, gamePasses) {
        const plant = gameData.plants[plantId];
        if (!plant) return 0;

        let growthTime = plant.baseGrowthTime;

        // Apply fertilizer effect
        const fertilizer = gameData.fertilizers[fertilizerType] || gameData.fertilizers.none;
        growthTime *= fertilizer.timeMultiplier;

        // Apply lamp effect (each lamp reduces growth time by X seconds)
        const lampBonus = lampCount * gameData.equipment.lamp.growthBonus;
        growthTime = Math.max(1, growthTime - lampBonus);

        // Apply game pass effects
        if (gamePasses && gamePasses.includes('instaGrow')) {
            growthTime *= gameData.gamePasses.instaGrow.value;
        }

        return Math.max(1, Math.floor(growthTime));
    },

    // Calculate total yield with modifiers
    calculateTotalYield: function(plantableTiles, gamePasses) {
        let baseYield = plantableTiles;
        let yieldMultiplier = 1.0;

        // Apply yield-boosting game passes
        if (gamePasses) {
            if (gamePasses.includes('richSoil')) {
                yieldMultiplier *= gameData.gamePasses.richSoil.value;
            }
            if (gamePasses.includes('extraDrops')) {
                yieldMultiplier *= gameData.gamePasses.extraDrops.value;
            }
            if (gamePasses.includes('mythicalLuck')) {
                yieldMultiplier *= gameData.gamePasses.mythicalLuck.value;
            }
        }

        return Math.floor(baseYield * yieldMultiplier);
    },

    // Calculate resources needed
    calculateResourcesNeeded: function(plantId, plantableTiles) {
        const plant = gameData.plants[plantId];
        if (!plant) return { water: 0, fertilizer: 0 };

        return {
            water: plant.waterNeeded * plantableTiles,
            fertilizer: plant.fertilizerNeeded * plantableTiles
        };
    },

    // Format time from seconds to human-readable format
    formatTime: function(seconds) {
        if (seconds < 60) {
            return `${seconds}s`;
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
        } else {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;
            let result = `${hours}h`;
            if (minutes > 0) result += ` ${minutes}m`;
            if (remainingSeconds > 0) result += ` ${remainingSeconds}s`;
            return result;
        }
    },

    // Format currency values
    formatCurrency: function(value) {
        if (value >= 1000000000) {
            return `$${(value / 1000000000).toFixed(1)}B`;
        } else if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `$${(value / 1000).toFixed(1)}K`;
        } else {
            return `$${value.toLocaleString()}`;
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameData, gameCalculations };
}