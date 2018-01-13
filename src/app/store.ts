import { INCREAMENT } from './actions';
import { Map } from 'immutable';

export interface IAppState {
    counter: number;
    messeging?: {
        newMessages: number
    }
}

export const INITAIL_STATE: IAppState = {
    counter: 0,
    messeging:{
        newMessages: 5
    }
}

export function rootReducer(state: Map<string,any>, action): Map<string, any> {
    switch (action.type) {
        // case INCREAMENT: return { counter: state.counter + 1 }
    //   case INCREAMENT: return {...state, counter:state.counter + 1};
       case INCREAMENT: return state.set('counter', state.get('counter') +1)
    }
    return state;
}