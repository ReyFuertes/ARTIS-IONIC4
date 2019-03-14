import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardLayoutComponent } from "./pages/dashboard-layout/dashboard-layout.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "",
    loadChildren: "./modules/survey/survey.module#SurveyModule"
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    loadChildren: "./modules/main/main.module#MainModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
