import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { AuthGuard } from "@auth0/auth0-angular";
import { UserProfileComponent } from "../../components/profile/profile.component";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "about",
        loadChildren: () =>
          import("../about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "conjugator",
        loadChildren: () =>
          import("../conjugator/conjugator.module").then(
            (m) => m.ConjugatorPageModule
          ),
      },
      {
        path: "instructions",
        loadChildren: () =>
          import("../instructions/instructions.module").then(
            (m) => m.InstructionsPageModule
          ),
      },
      {
        path: "profile",
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/conjugator",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
