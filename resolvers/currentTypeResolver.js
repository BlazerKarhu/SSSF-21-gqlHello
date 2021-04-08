import CurrentType from '../models/currentType.js';

export default {
  Query: {
    currentTypes: () => CurrentType.find(),
  },
};
