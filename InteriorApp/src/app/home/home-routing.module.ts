import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccComponent } from '../my-acc/my-acc.component';
import { MyDesignComponent } from '../my-design/my-design.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'my-design', component: MyDesignComponent},
  { path: 'my-acc', component:MyAccComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
