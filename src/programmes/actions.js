import { ADD_PROGRAMME } from './actionTypes';
import { DELETE_PROGRAMME } from './actionTypes';

export const addProgramme = programme => ({ type: ADD_PROGRAMME, payload: programme });
export const deleteProgramme = programmeId => ({ type: DELETE_PROGRAMME, payload: programmeId });
