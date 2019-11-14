import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [{
            path: 'reminders',
            loadChildren: () =>
                import('../pages/reminders/reminders.module').then(
                    m => m.RemindersPageModule
                )
        },{
            path: 'addreminder',
            loadChildren: () =>
                import('../pages/addreminder/addreminder.module').then(
                    m => m.AddreminderPageModule
                )
        }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRouter { }