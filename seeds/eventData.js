const Event = require('../models/Event');

const eventdata = [
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'march 27 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'april 3 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'april 10 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'april 17 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'april 24 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'may 1 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'may 8 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'may 15 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'may 22 2024 @8PM',
  },
  {
    game: 'NBA live 07',
    location: 'Wenona Beer Lodge',
    date: 'may 29 2024 @8PM',
  },
];

const seedEvents = () => Event.bulkCreate(eventdata);

module.exports = seedEvents;