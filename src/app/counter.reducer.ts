import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (_state, action) => { return action.user }),
);

export const levelReducer = createReducer(
  localStorage.getItem("highestLevel"),
);