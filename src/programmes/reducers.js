import { ADD_PROGRAMME, DELETE_PROGRAMME } from './actionTypes';

const initialState = [];

const programmes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAMME: {
      return [...state, action.payload];
    }
    case DELETE_PROGRAMME: {
      return state.filter(item => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default programmes;
