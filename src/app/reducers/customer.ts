import {Actions, CustomerActionTypes} from './../actions/customer';

export const initialState = [];


/**
 * 
 * @param state 
 * @param action 
 * Add => Add new customer data
 * Remove => Remove Customer Data from statte
 * get all the items before mateched and after that and append it.
 * Default => default return the state
 * 
 */

export function CustomerReducer(state = initialState, action : Actions){
    switch(action.type){
        case CustomerActionTypes.Add:
            return [...state,action.payload];
        case CustomerActionTypes.Remove:
            return [...state.slice(0,action.payload),...state.slice(action.payload+1)];
        default:
            return state;        
    }
}