import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../Interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../Dialogs/update-dialog/update-dialog.component';

@Component({
  selector: 'app-contatcts-list',
  templateUrl: './contatcts-list.component.html',
  styleUrl: './contatcts-list.component.scss'
})
export class ContatctsListComponent implements OnInit {

contactsArrary:Contact[]=[];
displayedColumns: string[] = ['FirstNameColumn','LastNameColumn','PhoneNumberColumn','AddressColumn','UpdateColumn','DeleteColumn'];

constructor(public contactsListService:ContactServiceService, private dialog: MatDialog){    
}

ngOnInit(): void {
 this.contactsArrary= this.contactsListService.getContacts();
 console.log(this.contactsArrary)
}

onUpdate(contactlist:Contact){
  let dialogRef = this.dialog.open(UpdateDialogComponent, {
    height: '500px',
    width: '500px',
    data:contactlist,
  });
}
}
