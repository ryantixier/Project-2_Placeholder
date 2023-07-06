const { Quote } = require("../models");

const quoteData = [
  {
    author: "Robin Sharma",
    text: "If you don’t make time for exercise, you’ll probably have to make time for illness.",
  },
  {
    author: "Thomas Hobbes",
    text: "I am about to take my last voyage, a great leap in the dark.",
  },
  {
    author: "Abraham Lincoln",
    text: "Dead last finish is greater than did not finish, which trumps did not start.",
  },
  {
    author: "Michael John Bobak",
    text: "Rome wasn't built in a day, but they worked on it every single day.",
  },
  {
    author: "Michael John Bobak",
    text: "All progress takes place outside the comfort zone.",
  },
  {
    author: "Paulo Coelho",
    text: "One is loved because one is loved. No reason is needed for loving.",
  },
  {
    author: "Wayne Dyer",
    text: "Go the extra mile. It's never crowded.",
  },
  {
    author: "Oliver Goldsmith",
    text: "Hope, like the gleaming taper's light, adorns and cheers our way; and still, as darker grows the night, emits a brighter ray.",
  },
  {
    author: "Babe Ruth",
    text: "You just can't beat the person who never gives up.",
  },
  {
    author: "Sly Stallone",
    text: "Success is usually the culmination of controlling failure.",
  },
  {
    author: "Muhammad Ali",
    text: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
  },
  {
    author: "Buddha",
    text: "To keep the body in good health is a duty. Otherwise we shall not be able to keep our mind strong and clear.",
  },
  {
    author: "Matt McGorry",
    text: "The mind is the most important part of achieving any fitness goal. Mental change always comes before physical change.",
  },
];

const seedQuotes = () => Quote.bulkCreate(quoteData);

module.exports = seedQuotes;
