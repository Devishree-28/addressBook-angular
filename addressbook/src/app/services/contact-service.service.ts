import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  contactList:Contact[]=[
  {Id:1, FirstName:'Devi', LastName:'Mahi', PhoneNumber:'111-222-333-4444',Address:'Vancouver'},
  {Id:2, FirstName:'Devi', LastName:'Buvi', PhoneNumber:'111-222-333-4444',Address:'Vancouver'},
  {Id:3, FirstName:'Devi', LastName:'Buvi', PhoneNumber:'111-222-333-4444',Address:'Vancouver'}
]

  constructor() { }

  
  getContacts(){
    return this.contactList;
  }
  
  updateContact(newContact:Contact){

    let highestId=0;
    this.contactList.forEach(contactObject =>{
      if(contactObject.Id > highestId){
        highestId=contactObject.Id;
      }
    })

     this.contactList.push(
      {
      Id:highestId+1,
      FirstName:newContact.FirstName,
      LastName:newContact.LastName,
      Address:newContact.Address,
      PhoneNumber:newContact.PhoneNumber
      })
     }

     updateExistingConatct(updateExContact:Contact){
      const index = this.contactList.findIndex(contact=>contact.Id == updateExContact.Id);
      this.contactList[index].FirstName=updateExContact.FirstName;
      this.contactList[index].LastName=updateExContact.LastName;
      this.contactList[index].Address=updateExContact.Address;
      this.contactList[index].PhoneNumber=updateExContact.PhoneNumber;
     }

     deleteContact(id:number){
      const index = this.contactList.findIndex(contact=>contact.Id == id);
      this.contactList.splice(index,1);
 
     }

  }


