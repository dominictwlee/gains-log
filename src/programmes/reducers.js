import { ADD_PROGRAMME } from './actionTypes';

const initialState = [
  {
    name: 'Gains 5x5',
    note: 'To get super swole',
  },
  {
    name: 'Marathon 101',
    note: 'Nooo gainzzz',
  },
];

const programmes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAMME: {
      return { ...state, programmes: [...state.programmes, action.payload] };
    }
    default:
      return state;
  }
};

export default programmes;
