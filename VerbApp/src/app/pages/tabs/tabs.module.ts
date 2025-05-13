import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '@auth0/auth0-angular';
import { AUTH0_INSTANCE } from '@everyvoice/every-voice';
import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TabsPageRoutingModule],
  declarations: [TabsPage],
  providers: [
    {
      provide: AUTH0_INSTANCE,
      useExisting: AuthService, // Use the existing instance
    },
  ],
})
export class TabsPageModule {}
