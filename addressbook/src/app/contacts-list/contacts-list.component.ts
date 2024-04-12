import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../Interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../Dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../Dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-contatcts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent implements OnInit {

contactsArrary:Contact[]=[];

dataSource = new MatTableDataSource<Contact>();
displayedColumns: string[] = ['FirstNameColumn','LastNameColumn','PhoneNumberColumn','AddressColumn','UpdateColumn','DeleteColumn'];

constructor(public contactsListService:ContactServiceService, private dialog: MatDialog){    
}

ngOnInit(): void {
 this.contactsArrary= this.contactsListService.getContacts();
 this.dataSource = new MatTableDataSource<Contact>(this.contactsArrary);
 console.log(this.contactsArrary)
}

onUpdate(contactlist:Contact){
  let dialogRef = this.dialog.open(UpdateDialogComponent, {
    height: '500px',
    width: '500px',
    data:contactlist,
  });
}

onDelete(contactlist:Contact){
  let dialogRef = this.dialog.open(DeleteDialogComponent, {
    height: '500px',
    width: '500px',
    data:contactlist,
  });
  dialogRef.afterClosed().subscribe(result => {
    this.updateDataSource(this.contactsArrary);
  });
}

updateDataSource(dataArray:Contact[]){
  this.dataSource.connect().next(dataArray);
}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
