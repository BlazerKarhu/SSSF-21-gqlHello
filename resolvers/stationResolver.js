import Station from '../models/station.js';

export default {
  Query: {
    stations: () => {
      return Station.find();
    },
    station: (parent, args) => {
      return Station.findById(args.id);
    },
  },
  Mutation: {
    addAnimal: (parent, args) => {
      console.log('animalResolver, addAnimal', args);
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
