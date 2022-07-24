import { createAction } from '@reduxjs/toolkit';
import { ColorActionType } from './types';

export const redAction: ColorActionType = createAction('red')();
export const blueAction: ColorActionType = createAction('blue')();
export const greenAction: ColorActionType = createAction('green')();
