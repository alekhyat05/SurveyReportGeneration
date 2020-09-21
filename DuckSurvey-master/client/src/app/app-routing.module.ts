import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';

const routes: Routes = [
    {path:'', component:SurveyFormComponent},
    {path:'report', component: SurveyReportComponent},
    {path:'**',component:SurveyFormComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
