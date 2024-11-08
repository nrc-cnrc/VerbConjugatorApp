import { Injectable } from '@angular/core';
import * as crypto from 'crypto';
import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio_dir = "../../../assets/audio";
  audio_type = ".wav"

  constructor() {}

   retrieveFileName(text:string){
    let text_hash = this.urlFriendly(text=text);
    let full_path = this.buildFullPath(text_hash);
    let exists = this.checkExists(full_path);

    return exists;
   }
   

   urlFriendly( text:string,hash_function:string="sha265"){
    let hash = crypto.createHash('sha256').update(text).digest("hex");

    return hash
   }


   buildFullPath(filename:string){
    return this.audio_dir + filename + this.audio_type;
   }

   checkExists(filename:string){

    access(filename, (exist) => {
      return exist;
    });

   }
}
