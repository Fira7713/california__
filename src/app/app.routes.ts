import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ScheduleEventComponent} from "./schedule-events/schedule-event.component";
import {FileComponent} from "./file/file.component";
import {CarDetailPage} from "./dashboard/car-detail.page/car-detail.page";
import {ScheduleEventDetailPage} from "./schedule-events/schedule-event-detail/schedule-event-detail.page";


export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'schedule-event', component: ScheduleEventComponent },
    { path: 'file', component: FileComponent },
    { path: 'car/:vin', component: CarDetailPage },
    { path: 'schedule-event/:id', component: ScheduleEventDetailPage },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
