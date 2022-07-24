import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as grammarActions from './grammar.action';
import { ExpressionGrammarModel, GrammarModel } from '../grammar.model';
import { AppState } from '../../store/rootReducer';

export interface GrammarState {
  grammar: GrammarModel;
}

export const initialState: GrammarState = {
  grammar: new ExpressionGrammarModel(''),
};

const grammarReducer = createReducer(
  initialState,
  on(grammarActions.getGrammar, (state) => ({ ...state, grammar: state.grammar }))
);

export const grammarSelector = (state: AppState) => state.grammar;

// export const selectFetaureGrammar = createFeatureSelector('grammar');

export const selectGrammarSelector = createSelector(grammarSelector, (state: GrammarState) => state.grammar);

export default function reducer(state: GrammarState | undefined, action: Action) {
  return grammarReducer(state, action);
}
