import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';


const routes: Routes = [
    { path: 'contact', component: ContactComponent}, 
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'shift', component: ShiftDetailsComponent},
    { path: 'work-hours', component: WorkingHoursComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
