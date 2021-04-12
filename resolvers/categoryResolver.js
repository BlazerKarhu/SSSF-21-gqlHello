import Category from '../models/category.js';

export default {
  Species: {
    category(parent) {
      console.log('category', parent);
      return Category.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: (parent, args, {user}) => {
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      console.log('categoryResolver, addCategory', args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
