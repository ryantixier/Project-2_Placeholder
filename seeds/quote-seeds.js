const { Quote } = require("../models");

const quoteData = [
  {
    author: "Jackie Robinson",
    text: "A life is not important, except in the impact it has on other lives.",
  },
  {
    author: "I am about to take my last voyage, a great leap in the dark.",
    text: "Thomas Hobbes",
  },
  {
    author:
      "What forests of laurel we bring, and the tears of mankind, to those who stood firm against the opinion of their contemporaries!",
    text: "Ralph Waldo Emerson",
  },
  {
    author:
      "Instead of loving your enemies - treat your friends a little better.",
    text: "E. W. Howe",
  },
  {
    author:
      "One is loved because one is loved. No reason is needed for loving.",
    text: "Paulo Coelho",
  },
  {
    author:
      "The goal of education is the advancement of knowledge and the dissemination of truth.",
    text: "John F. Kennedy",
  },
  {
    author:
      "Hope, like the gleaming taper's light, adorns and cheers our way; and still, as darker grows the night, emits a brighter ray.",
    text: "Oliver Goldsmith",
  },
  {
    author:
      "Reason has never failed men. Only force and repression have made the wrecks in the world.",
    text: "William Allen White",
  },
  {
    author:
      "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    text: "Douglas Adams",
  },
];

const seedQuotes = () => Quote.bulkCreate(quoteData);

module.exports = seedQuotes;
