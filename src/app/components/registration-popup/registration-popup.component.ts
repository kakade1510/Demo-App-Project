import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregistration } from 'src/app/model/iregistration';
import { RegistrationserviceService } from 'src/app/services/registrationservice.service';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.css']
})
export class RegistrationPopupComponent implements OnInit {

  public registration: Iregistration = {} as Iregistration;
  errorMessage: string | undefined;
  selectedFile: File | undefined;
  
  
  constructor(private registrationservice: RegistrationserviceService,
    private router: Router) { }


  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  public createSubmit(registrationForm:NgForm) {
     this.registrationservice.createRegistration(this.registration).
      subscribe((data: Iregistration) => {
        this.router.navigate(['/']).then();
        this.router.navigate(["/profile"]);

      },
        (error: string) => {
          this.errorMessage = error;

        });
      
  }

}
