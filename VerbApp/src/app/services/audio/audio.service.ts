import { Injectable } from '@angular/core';
import * as crypto from 'crypto';
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
    return full_path
   }
   

   urlFriendly( text:string){
    var hash = text;


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
