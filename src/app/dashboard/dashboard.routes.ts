// Angular components
import { Routes } from '@angular/router';

// Components
import { DetailComponent } from '../input-output/detail/detail.component';
import { InputOutputComponent } from '../input-output/input-output.component';
import { StadisticComponent } from '../input-output/stadistic/stadistic.component';



export const dashboardRoutes: Routes = [

    { path: '', component: StadisticComponent },
    { path: 'ingreso-egreso', component: InputOutputComponent },
    { path: 'detalle', component: DetailComponent }

];
