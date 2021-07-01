import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
}
export class AuthService {
  myToken = "AIzaSyBtSG4NVuxJtUqCyphKf_-Lw0JjgpPtpYI";
  apiUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.myToken;
  constructor(private http:HttpClient) { }

  signup(email:string,password:string){
    return this.http.post<AuthResponseData>(this.apiUrl,{
      email:email,
      password:password,
      returnSecureToken : true
    });
  }

}
