import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.scss'
})
export class NewContactComponent {

  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(10)]),
  });

  constructor(private route:Router){

  }

  onSubmit(){

  }

  onCancel(){
    this.route.navigate(['/contacts']);
  }
}
