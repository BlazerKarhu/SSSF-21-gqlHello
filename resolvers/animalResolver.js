import Animal from '../models/animal.js';

const animalData = [
  {
    id: '1',
    animalName: 'Frank',
    species: '1',
  },
];

export default {
  Query: {
    animals: (parent, args) => {
      return animalData;
    },
  },
  Mutation: {
    addAnimal: (parent, args) => {
      console.log('animalResolver, addAnimal', args);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
  },
};
