const quizData = [
  {
    category: "food",
    questions: [
      {
        question: "Which fruit is known as the 'king of fruits'?",
        options: ["Banana", "Mango", "Apple", "Pineapple"],
        answer: "Mango"
      },
      {
        question: "Which vitamin is found in oranges?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin C"
      },
      {
        question: "Sushi is a traditional dish from which country?",
        options: ["Korea", "Japan", "China", "Thailand"],
        answer: "Japan"
      },
      {
        question: "Which spice is the most expensive by weight?",
        options: ["Cinnamon", "Cardamom", "Saffron", "Vanilla"],
        answer: "Saffron"
      },
      {
        question: "What is tofu made from?",
        options: ["Rice", "Beans", "Soybeans", "Milk"],
        answer: "Soybeans"
      },
      {
        question: "Which cheese is traditionally used for pizza?",
        options: ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
        answer: "Mozzarella"
      },
      {
        question: "Which type of pasta is shaped like little rice grains?",
        options: ["Orzo", "Penne", "Fusilli", "Linguine"],
        answer: "Orzo"
      },
      {
        question: "What is the main ingredient in hummus?",
        options: ["Lentils", "Chickpeas", "Beans", "Rice"],
        answer: "Chickpeas"
      },
      {
        question: "Which fruit has its seeds on the outside?",
        options: ["Strawberry", "Blueberry", "Raspberry", "Blackberry"],
        answer: "Strawberry"
      },
      {
        question: "Which country is the origin of the croissant?",
        options: ["France", "Austria", "Italy", "Germany"],
        answer: "Austria"
      }
    ]
  },
  {
    category: "good",
    questions: [
      {
        question: "What is the best-selling video game of all time?",
        options: ["GTA V", "Minecraft", "Tetris", "Wii Sports"],
        answer: "Minecraft"
      },
      {
        question: "Which console was released first?",
        options: ["PlayStation 2", "Xbox", "Nintendo 64", "Sega Dreamcast"],
        answer: "Sega Dreamcast"
      },
      {
        question: "In which game do you use a pickaxe to mine blocks?",
        options: ["Terraria", "Minecraft", "Roblox", "Fortnite"],
        answer: "Minecraft"
      },
      {
        question: "What game features characters like Mario and Luigi?",
        options: ["Zelda", "Metroid", "Sonic", "Super Mario"],
        answer: "Super Mario"
      },
      {
        question: "Which battle royale game is made by Epic Games?",
        options: ["PUBG", "Call of Duty: Warzone", "Fortnite", "Apex Legends"],
        answer: "Fortnite"
      },
      {
        question: "What is the name of the main character in 'The Legend of Zelda'?",
        options: ["Zelda", "Link", "Ganondorf", "Epona"],
        answer: "Link"
      },
      {
        question: "Which game is known for the phrase 'Finish Him'?",
        options: ["Tekken", "Street Fighter", "Mortal Kombat", "Injustice"],
        answer: "Mortal Kombat"
      },
      {
        question: "What year was the PlayStation 5 released?",
        options: ["2018", "2019", "2020", "2021"],
        answer: "2020"
      },
      {
        question: "In which game do players build structures and defend against creatures?",
        options: ["Minecraft", "Terraria", "Don't Starve", "Valheim"],
        answer: "Minecraft"
      },
      {
        question: "What color is Sonic the Hedgehog?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Blue"
      }
    ]
  },
  {
    category: "mathematic",
    questions: [
      {
        question: "What is 7 × 8?",
        options: ["56", "64", "49", "58"],
        answer: "56"
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        answer: "12"
      },
      {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: "30"
      },
      {
        question: "What is the value of π (pi) approximately?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: "3.14"
      },
      {
        question: "What is the perimeter of a square with side 5?",
        options: ["10", "15", "20", "25"],
        answer: "20"
      },
      {
        question: "What is 3² + 4²?",
        options: ["25", "9", "16", "13"],
        answer: "25"
      },
      {
        question: "Which number is a prime number?",
        options: ["9", "15", "11", "21"],
        answer: "11"
      },
      {
        question: "What is 100 divided by 4?",
        options: ["20", "25", "30", "40"],
        answer: "25"
      },
      {
        question: "What is the next number in the pattern: 2, 4, 8, 16, ...?",
        options: ["18", "24", "32", "20"],
        answer: "32"
      },
      {
        question: "How many degrees are in a right angle?",
        options: ["45", "60", "90", "120"],
        answer: "90"
      }
    ]
  },

  {
    category: "geography",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Rome", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "Europe"],
        answer: "Africa"
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
      },
      {
        question: "Which country has the most population?",
        options: ["India", "USA", "China", "Brazil"],
        answer: "China"
      },
      {
        question: "Mount Everest is part of which mountain range?",
        options: ["Andes", "Rockies", "Alps", "Himalayas"],
        answer: "Himalayas"
      },
      {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
      },
      {
        question: "Which US state is the Grand Canyon located in?",
        options: ["Nevada", "Arizona", "California", "Utah"],
        answer: "Arizona"
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
      },
      {
        question: "Which country is shaped like a boot?",
        options: ["Spain", "Portugal", "Italy", "Greece"],
        answer: "Italy"
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
      }
    ]
  },

  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Text Markup Language",
          "Hyperlinking Text Machine Language"
        ],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Color Style Sheets"
        ],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Apple", "Oracle"],
        answer: "Netscape"
      },
      {
        question: "What keyword is used to declare a variable in JavaScript?",
        options: ["let", "var", "const", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which HTML tag is used to insert JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>"
      },
      {
        question: "Which method converts JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "parseJSON()"],
        answer: "JSON.parse()"
      },
      {
        question: "Which data type is not primitive in JavaScript?",
        options: ["String", "Object", "Boolean", "Number"],
        answer: "Object"
      },
      {
        question: "What does DOM stand for?",
        options: ["Data Object Model", "Document Object Model", "Digital Order Map", "Document Order Model"],
        answer: "Document Object Model"
      },
      {
        question: "Which loop is guaranteed to run at least once?",
        options: ["for", "while", "do...while", "none"],
        answer: "do...while"
      }
    ]
  },

  {
    category: "animals",
    questions: [
      {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Elephant", "Lion", "Leopard"],
        answer: "Lion"
      },
      {
        question: "Which mammal can fly?",
        options: ["Eagle", "Bat", "Owl", "Penguin"],
        answer: "Bat"
      },
      {
        question: "What is the largest land animal?",
        options: ["Elephant", "Hippopotamus", "Giraffe", "Rhino"],
        answer: "Elephant"
      },
      {
        question: "What do pandas mainly eat?",
        options: ["Fish", "Bamboo", "Leaves", "Insects"],
        answer: "Bamboo"
      },
      {
        question: "Which animal is known for its long neck?",
        options: ["Camel", "Giraffe", "Llama", "Deer"],
        answer: "Giraffe"
      },
      {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        answer: "8"
      },
      {
        question: "Which sea creature has eight arms?",
        options: ["Squid", "Octopus", "Crab", "Lobster"],
        answer: "Octopus"
      },
      {
        question: "Which animal is the fastest on land?",
        options: ["Cheetah", "Horse", "Antelope", "Tiger"],
        answer: "Cheetah"
      },
      {
        question: "What is a baby goat called?",
        options: ["Kid", "Cub", "Calf", "Fawn"],
        answer: "Kid"
      },
      {
        question: "Which bird is known for mimicking human speech?",
        options: ["Owl", "Crow", "Parrot", "Eagle"],
        answer: "Parrot"
      }
    ]
  }
];
export default quizData

