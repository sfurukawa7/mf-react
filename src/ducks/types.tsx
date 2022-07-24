import { Action } from '@reduxjs/toolkit';

export type ColorState = {
  color: Color;
};
export type Color = 'red' | 'blue' | 'green';

export type ColorActionType = Action<'red'> | Action<'blue'> | Action<'green'>;
