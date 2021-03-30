import Category from '../models/category.js';

export default {
  Species: {
    category(parent) {
      console.log('category', parent);
      return categoryData
        .filter((category) => category.id === parent.category)
        .pop();
    },
  },
  Mutation: {
    addCategory: (parent, args) => {
      console.log('categoryResolver, addCategory', args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
