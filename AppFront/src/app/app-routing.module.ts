import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestscreenshotComponent } from './testscreenshot/testscreenshot.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { AppSectionComponent } from './app-section/app-section.component';
import { LiveTestComponent } from './live-test/live-test.component';
import { VisualTestingInfoComponent } from './visual-testing-info/visual-testing-info.component';
import { DetailsTestComponent } from './details-test/details-test.component';
import { AllscreenshotsComponent } from './allscreenshots/allscreenshots.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';
const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: '', redirectTo:'auth/signin', pathMatch: 'full'},
  { path: 'startTest', canActivate: [AuthGuardService], component: TestscreenshotComponent },   
  { path: 'result-test', canActivate: [AuthGuardService], component: ShowResultComponent}, 
  { path: 'home',canActivate: [AuthGuardService], component: AppSectionComponent}, 
  { path: 'live-test', canActivate: [AuthGuardService], component:LiveTestComponent},
  { path: 'visual-testing-info', canActivate: [AuthGuardService],component:VisualTestingInfoComponent},
  { path: 'details-test', canActivate: [AuthGuardService], component: DetailsTestComponent},
  { path: 'all-images', canActivate: [AuthGuardService],component: AllscreenshotsComponent},
  { path:'view-graph', canActivate: [AuthGuardService], component: ViewGraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
