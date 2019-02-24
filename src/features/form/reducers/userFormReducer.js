import { ADD_USER, EDIT_USER, REMOVE_USER } from '../actions/actionTypes';
import { User } from '../../../models/user';

const INITIAL_STATE = {
  users: [new User('Me')],
};


const userFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER: {
      const { users } = state;

      const changedUsers = [
        ...users.slice(),
        new User('User ' + users.length)
      ];

      return { users: changedUsers };
    }
    case EDIT_USER: {
      const { users } = state;
      const { userIndex, name } = action.payload;

      const changedUsers = users.map((user, index) => {
        if(index !== userIndex) {
          return user;
        }

        return new User(name);
      })

      return { users: changedUsers };
    }
    case REMOVE_USER: {
      const { users } = state;
      const { userIndex } = action.payload;

      let changedUsers = users.slice()
      changedUsers.splice(userIndex, 1);

      return { users: changedUsers };
    }
    default:
      return state
  }
};

export default userFormReducer;
