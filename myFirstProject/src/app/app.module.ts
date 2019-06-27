import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

/*import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { PrintNameService } from './print-name.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ShiftDetailsComponent,
    WorkingHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PrintNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
