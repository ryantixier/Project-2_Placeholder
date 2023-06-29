const { Quote } = require("../models");

const quoteData = [
  {
    author: "Jackie Robinson",
    text: "A life is not important, except in the impact it has on other lives.",
  },
  {
    author: "Thomas Hobbes",
    text: "I am about to take my last voyage, a great leap in the dark.",
  },
  {
    author: "Ralph Waldo Emerson",
    text: "What forests of laurel we bring, and the tears of mankind, to those who stood firm against the opinion of their contemporaries!",
  },
  {
    author: "E. W. Howe",
    text: "Instead of loving your enemies - treat your friends a little better.",
  },
  {
    author: "Paulo Coelho",
    text: "One is loved because one is loved. No reason is needed for loving.",
  },
  {
    author: "John F. Kennedy",
    text: "The goal of education is the advancement of knowledge and the dissemination of truth.",
  },
  {
    author: "Oliver Goldsmith",
    text: "Hope, like the gleaming taper's light, adorns and cheers our way; and still, as darker grows the night, emits a brighter ray.",
  },
  {
    author: "William Allen White",
    text: "Reason has never failed men. Only force and repression have made the wrecks in the world.",
  },
  {
    author: "Douglas Adams",
    text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
  },
];

const seedQuotes = () => Quote.bulkCreate(quoteData);

module.exports = seedQuotes;
