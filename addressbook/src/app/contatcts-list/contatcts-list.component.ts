import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../Interfaces/contact';

@Component({
  selector: 'app-contatcts-list',
  templateUrl: './contatcts-list.component.html',
  styleUrl: './contatcts-list.component.scss'
})
export class ContatctsListComponent implements OnInit {

contactsArrary:Contact[]=[];
displayedColumns: string[] = ['FirstNameColumn','LastNameColumn','PhoneNumberColumn','AddressColumn','UpdateColumn','DeleteColumn'];

constructor(public contactsListService:ContactServiceService){    
}

ngOnInit(): void {
 this.contactsArrary= this.contactsListService.getContacts();
 console.log(this.contactsArrary)
}
}
