import { createAction, props } from '@ngrx/store';

export const user = createAction('[User Component] User', props<{ user: any; }>());
export const level = createAction('[general] userLevel', props<{ level: string; }>());
