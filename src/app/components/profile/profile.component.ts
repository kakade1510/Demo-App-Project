import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iregistration } from 'src/app/model/iregistration';
import { RegistrationserviceService } from 'src/app/services/registrationservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  errorMessage: string | undefined;
  selectedFile: File | undefined;
  registration!: Iregistration | undefined;
  
    constructor(private registrationService: RegistrationserviceService,
      private router:Router) { }



public clickDeleteProfile( registration:any){
  
  
}
ngOnInit() {
  const id = "gfg"// get the id of the current user from the URL or some other source
  this.registrationService.getProfile(id).subscribe(
    registration => this.registration = registration,
  );

}


  // public clickDeleteContact(contactId: string | undefined) {
  //   if (contactId) {
  //     this.contactservice.deleteContact(contactId).subscribe(
  //       (data: {}) => {
  //         this.getAllContactsFromServer();
  //       },
  //       (error: any) => {
  //         this.errorMessage = error;
  //         this.loading = false;
  //       }
  //     );
  //   }
  // }
}
