import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeViewerComponent } from './components/resume-viewer/resume-viewer.component';

const routes: Routes = [
  {path:'resume', component:ResumeViewerComponent},
  {path:'**', component:AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
