import {Action} from '@ngrx/store';

export enum CustomerActionTypes{
    Add = '[Customer Component] Add',
    Remove = '[Customer Compinent] Remove'
}


export class Actions implements Action{
    readonly type;
    payload : any;
}

export class AddCustomer implements Actions{
    readonly type = CustomerActionTypes.Add;
    constructor(public payload:any){

    }
}

export class RemoveCustomer implements Actions{

    readonly type = CustomerActionTypes.Remove;
    constructor(public payload : any){

    }
}