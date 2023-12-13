import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

export const routes: Routes = [
    { path: "", title: "Home Page", component: HomeComponent },
    { path: "list", title: "Reservation List", component: ReservationListComponent},
    { path: "new", title: "Add new reservation", component: ReservationFormComponent}
];
