import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../../Interfaces/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactServiceService } from '../../services/contact-service.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.scss'
})
export class UpdateDialogComponent implements OnInit {

  contactToUpdate!: Contact;

  updateForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  });


  updateExContact!: Contact;

  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:Contact, private contactservice:ContactServiceService){
    this.contactToUpdate=data;
  }

  ngOnInit(){
    this.updateForm.controls['firstName'].setValue(this.contactToUpdate.FirstName);
    this.updateForm.controls['lastName'].setValue(this.contactToUpdate.LastName);
    this.updateForm.controls['address'].setValue(this.contactToUpdate.Address);
    this.updateForm.controls['phoneNumber'].setValue(this.contactToUpdate.PhoneNumber);
    console.log(this.contactToUpdate)
  }

  onSubmit(){

    this.updateExContact={
      Id:this.contactToUpdate.Id,
      FirstName:this.updateForm.controls['firstName'].value as string,
      LastName:this.updateForm.controls['lastName'].value as string,
      Address:this.updateForm.controls['address'].value as string,
      PhoneNumber:this.updateForm.controls['phoneNumber'].value as string,
    };

    this.contactservice.updateExistingConatct(this.updateExContact);
    this.dialogRef.close();

  }
}
