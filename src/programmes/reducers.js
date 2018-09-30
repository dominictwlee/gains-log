import { ADD_PROGRAMME } from './actionTypes';

const initialState = {
  programmes: [],
};

const programmesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAMME: {
      return { ...state, programmes: [...state.programmes, action.payload] };
    }
    default:
      return state;
  }
};

export default programmesReducer;
