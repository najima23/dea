import { createReducer, on } from '@ngrx/store';
import { user } from './counter.actions';

export const initialState = 0;

export const userReducer = createReducer(
  initialState,
  on(user, (_state, action) => { return action.user }),
);

export const levelReducer = createReducer(
  localStorage.getItem("highestLevel"),
);

//hier