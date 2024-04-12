import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../../Interfaces/contact';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactServiceService } from '../../services/contact-service.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

  contactToDelete!: Contact;

  deleteForm = new FormGroup({
    firstName: new FormControl({value:'',disabled:true}),
    lastName: new FormControl({value:'',disabled:true}),
    address: new FormControl({value:'',disabled:true}),
    phoneNumber: new FormControl({value:'',disabled:true}),
  });

  idToDelete!:number;

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:Contact, private contactservice:ContactServiceService){
    this.contactToDelete=data;
  }

  ngOnInit(){
    this.deleteForm.controls['firstName'].setValue(this.contactToDelete.FirstName);
    this.deleteForm.controls['lastName'].setValue(this.contactToDelete.LastName);
    this.deleteForm.controls['address'].setValue(this.contactToDelete.Address);
    this.deleteForm.controls['phoneNumber'].setValue(this.contactToDelete.PhoneNumber);
    console.log(this.contactToDelete)
  }

  onSubmit(){
    let contactId = this.contactToDelete.Id;
    this.contactservice.deleteContact(contactId);
    console.log(this.contactservice.getContacts());
    this.dialogRef.close();
  }
}
