import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../Interfaces/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data:Contact){
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

  }
}
