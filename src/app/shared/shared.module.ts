import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./components/logo/logo.component";
import { IonicModule } from "@ionic/angular";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { ProgressBarModule } from "primeng/progressbar";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { DashboardCardComponent } from "./components/dashboard-card/dashboard-card.component";
import { ModalOptionComponent } from "./components/modal-option/modal-option.component";
import { PastAdviceCardComponent } from "./components/past-advice-card/past-advice-card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    ProgressBarComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardCardComponent,
    ModalOptionComponent,
    PastAdviceCardComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), ProgressBarModule],
  exports: [
    LogoComponent,
    HeaderComponent,
    ProgressBarComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardCardComponent,
    ModalOptionComponent,
    PastAdviceCardComponent
  ],
  entryComponents: [
    ModalOptionComponent
  ],
  providers: []
})
export class SharedModule { }
