import { objectType } from '@nexus/schema';

const User = objectType({
  name: 'user',
  definition(t) {
    t.model.id();
    t.model.name();
  }
});

export default User;