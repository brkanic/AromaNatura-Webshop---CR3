import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    email: new FormControl (''),
    name: new FormControl(''),
    phone: new FormControl (''),
    company: new FormControl(''),
    message: new FormControl(''),

   });

   onSubmit() {
    console.warn('You send your message!', this.contactForm.value);
    this.contactForm.reset();
    
  }
}
