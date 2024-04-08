import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../Interfaces/contact';



@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.scss'
})
export class NewContactComponent {
  
  newContact!: Contact;

  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  });

  constructor(private route:Router, private contatcsService:ContactServiceService){

  }

  onSubmit(){

    this.newContact={
      Id:0,
      FirstName:this.contactForm.controls['firstName'].value as string,
      LastName:this.contactForm.controls['lastName'].value as string,
      Address:this.contactForm.controls['address'].value as string,
      PhoneNumber:this.contactForm.controls['phoneNumber'].value as string,
    }

    this.contatcsService.updateContact(this.newContact);
    this.route.navigate(['/contacts']);
  }

  onCancel(){
    this.route.navigate(['/contacts']);
  }
}
