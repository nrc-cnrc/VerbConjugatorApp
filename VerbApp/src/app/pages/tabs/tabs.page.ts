import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from 'src/app/services/screensize/screensize.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  isDesktop: boolean;

  constructor(private screensizeService: ScreensizeService) { 

    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      // if (this.isDesktop && !isDesktop){
      //   // Reload because routing is out of place
      //   window.location.reload();
      // }

      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() {
  }

}
