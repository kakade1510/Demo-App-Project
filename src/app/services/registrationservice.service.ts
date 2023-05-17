import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iregistration } from '../model/iregistration';
import { getLocaleCurrencyCode } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  private serverUrl: string = `http://localhost:9000`; //json server url

  constructor(private http: HttpClient) { }

  //get all profile
  public getAll(): Observable<Iregistration[]> {
    let serverUrl: string = `${this.serverUrl}/registration`;
    return this.http.get<Iregistration[]>(serverUrl).pipe(catchError(this.handleError));
  }
  

  //get profile by ID
public getProfile(id: string): Observable<Iregistration> {
  let serverUrl: string = `${this.serverUrl}/registration/${id}`;
  return this.http.get<Iregistration>(serverUrl).pipe(catchError(this.handleError));
}

  //create registration 
  public createRegistration(registration: Iregistration): Observable<Iregistration> {
    let serverUrl: string = `${this.serverUrl}/registration`;
    return this.http.post<Iregistration>(serverUrl, 
       registration).pipe(catchError(this.handleError));
  }

  // update profile
  public updateProfile(id: string, registration: Iregistration): Observable<Iregistration> {
    let serverUrl: string = `${this.serverUrl}/registration/${id}`;
    return this.http.put<Iregistration>(serverUrl,
      registration).pipe(catchError(this.handleError));
  }
  
  //Delete profile
  public deleteProfile(id: string): Observable<{}> {
    let serverUrl: string = `${this.serverUrl}/registration/${id}`;
    return this.http.delete<{}>(serverUrl).pipe(catchError(this.handleError));
  }


  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
