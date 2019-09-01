import { Component, OnInit } from '@angular/core';
import {AddCustomer,RemoveCustomer} from './../actions/customer';
import {select, Store} from '@ngrx/store'; 
import {Customer} from './../models/customer';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store : Store<{customers : Customer[]}>) { }

  AddCustomer(customerName: string) { 
    if(!customerName){
      alert("can't add empty value");
      return;
    }
    const customer = new Customer(); 
    customer.name = customerName; 
    this.store.dispatch(new AddCustomer(customer)); 
  }


  removeCustomer(customerIndex) {
    this.store.dispatch(new RemoveCustomer(customerIndex));
  }

  ngOnInit() {
  }

}
