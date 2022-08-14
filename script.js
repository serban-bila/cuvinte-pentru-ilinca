let words = [
  "Car",
  "Bicycle",
  "Banknote",
  "Wallet",
  "Blouse",
  "Bag",
  "Shirt",
  "Helmet",
  "Toothbrush",
  "Key",
  "Table",
  "Coin",
  "Trousers",
  "Sweater",
  "Shoe",
  "Pen",
  "Computer",
  "Notebook",
  "Desk",
  "Pencil",
  "Bookcase",
  "Book",
  "Chair",
  "Backpack",
  "Paper",
  "Glue",
  "Door",
  "Ruler",
  "Clock",
  "Whiteboard",
  "Window",
  "Cupboard",
  "Pillow",
  "Coffee maker",
  "Bed",
  "Spoon",
  "Blanket",
  "Knife",
  "Stove",
  "Sink",
  "Washing machine",
  "Pot",
  "Dish",
  "Fridge",
  "Sofa",
  "Stool",
  "Cup",
  "Fork",
  "Glass",
];

console.log(words.length);

const randomWord = () => {
  let x = Math.floor(Math.random() * words.length);
  console.log(x);
  let word = words[x];
  document.getElementById("result").innerHTML = word;
  console.log(word);
};
