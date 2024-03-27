import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  contactList:Contact[]=[
  {Id:1, FirstName:'Devi', LastName:'', PhoneNumber:'111-222-333-4444',Address:'Vancouver'},
  {Id:1, FirstName:'Devi', LastName:'', PhoneNumber:'111-222-333-4444',Address:'Vancouver'},
  {Id:1, FirstName:'Devi', LastName:'', PhoneNumber:'111-222-333-4444',Address:'Vancouver'}
]

  constructor() { }
  getContacts(){
    return this.contactList;
  }
}
