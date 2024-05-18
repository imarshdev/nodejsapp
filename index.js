// learning node.js from a pdf and these are just lessons..... the chat app is within the check.js
const yargs = require("yargs");
yargs.version("1.0.0");
yargs.command({
  command: "add",
  describe: "add new note",
  buider: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    console.log("title:", yargs.argv.title);
    console.log("body:", yargs.argv.body);
  },
});
console.log(yargs.argv);
const book = {
  name: "Dune Messiah",
  author: "Frank Herbert",
};

const jsonBook = JSON.stringify(book);
console.log(jsonBook);
const bookObject = JSON.parse(jsonBook);
console.log(bookObject.name);

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
event.printGuestList();
const square = (x) => x * x;
console.log(square(2));

const movie = {
  name: "X-men",
  description: "a movie about mutants",
  playMOvie() {
    console.log(this.name);
  },
};
movie.playMOvie();
console.log("starting");
setTimeout(() => {
  console.log("2 timer");
}, 3000);
console.log("stopping");


const password = "Red12345!";
const hashedPassword = await bcrypt.hash(password, 8);

const isMatch = await bcrypt.compare("red12345!", hashedPassword);
console.log(isMatch);




const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
transaction("order", product);

const request = require("request");

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/changes?page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWMyM2I4YWY5ZGY2OWZmYzE0MjgwOTdmZTRlY2RkNyIsInN1YiI6IjY1ZDExYzZiYWE2NTllMDE4NjQyN2MzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZhygPO6cbXj2Zgctxec8UJpPLPXnuqlzUOztOktQgs",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
