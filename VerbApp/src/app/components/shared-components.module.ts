import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResultComponent } from './result/result.component';
import { EveryVoiceModule } from "@everyvoice/every-voice";



@NgModule({
  declarations: [ResultComponent,],
  imports: [
    CommonModule, 
    IonicModule,
    EveryVoiceModule.forChild()
  ], 
  exports: [ResultComponent,]
})
export class SharedComponentsModule {}
