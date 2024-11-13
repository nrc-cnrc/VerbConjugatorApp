import { Injectable } from '@angular/core';
// import * as crypto from 'crypto';
// import * as CryptoJS from 'crypto-js';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio_dir = "../../../assets/audio/";
  audio_type = ".wav"

  constructor(private http: HttpClient) {}

   retrieveFileName(text:string){
    let text_hash = this.urlFriendly(text=text);
    console.log("hashed:",text_hash);
    let full_path = this.buildFullPath(text_hash);
    // let exists = this.checkExists(full_path);
    // this.checkExists(full_path).subscribe((data: boolean) => 
    //   {
    //       console.log('am i logged in ', data);
    //       // exists = data;
    //   }
    // );
    // console.log("exists",exists);
    // if (exists){
    //   return full_path;
    // } else {
    //   return false;
    // }
    return full_path
   }
   

   urlFriendly( text:string){
    console.log("text to hasj:",text)
    var sha256 = require('js-sha256');
    var hash = sha256(text);


    return hash
   }


   buildFullPath(filename:string){
    return this.audio_dir + filename + this.audio_type;
   }

   

  
  checkExists(filename: string): Observable<boolean> {
    return this.http.get(filename)
        .pipe(
            map(response => {
                return true;
            }),
            catchError(error => {
                return of(false);
            })
        );
  }


}
