import { ADD_USER, EDIT_USER, REMOVE_USER } from '../actions/actionTypes';
import { User } from '../../../models/user';

const INITIAL_STATE = {
  users: [new User('Me')],
  userNamingCount: 0,
};


const userFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER: {
      const { users, userNamingCount } = state;

      const changedUserNamingCount = userNamingCount + 1
      const changedUsers = [
        ...users.slice(),
        new User('User ' + changedUserNamingCount)
      ];

      return Object.assign({}, state,
        { users: changedUsers, userNamingCount: changedUserNamingCount });
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

      return Object.assign({}, state,
        { users: changedUsers });
    }
    case REMOVE_USER: {
      const { users } = state;
      const { userIndex } = action.payload;

      let changedUsers = users.slice()
      changedUsers.splice(userIndex, 1);

      return Object.assign({}, state,
        { users: changedUsers });
    }
    default:
      return state
  }
};

export default userFormReducer;
