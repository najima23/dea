import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{user: any;}>());
export const level = createAction('[general] userLevel', props<{level: string;}>());
