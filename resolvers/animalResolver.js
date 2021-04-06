import {AuthenticationError} from 'apollo-server-errors';
import Animal from '../models/animal.js';

export default {
  Query: {
    animals: (parent, args) => {
      return Animal.find();
    },
  },
  Mutation: {
    addAnimal: (parent, args, {user}) => {
      console.log('animalResolver, addAnimal', args, user);
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    modifyAnimal: (parent, args) => {
      console.log('animalResolver, modifyAnimal', args);
      const data = {
        animalName: args.animalName,
        species: args.species,
      };
      return Animal.findByIdAndUpdate(args.id, data);
    },
    deleteAnimal: (parent, args) => {
      return Animal.findOneAndDelete(args.id);
    },
  },
};
