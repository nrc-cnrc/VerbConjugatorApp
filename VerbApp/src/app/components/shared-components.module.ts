import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [ResultComponent,],
  imports: [
    CommonModule, 
    IonicModule
  ], 
  exports: [ResultComponent,]
})
export class SharedComponentsModule {}
