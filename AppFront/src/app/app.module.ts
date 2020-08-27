import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';
import { AppSectionComponent } from './app-section/app-section.component';
import { DetailsTestComponent } from './details-test/details-test.component';
import { LiveTestComponent } from './live-test/live-test.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { TestscreenshotComponent } from './testscreenshot/testscreenshot.component';
import { VisualTestingInfoComponent } from './visual-testing-info/visual-testing-info.component'; 
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Capability } from './capability';
import { CapabilityService } from './capability.service';
import { InfoTestService } from './info-test.service';
import { DetailTest } from './detail-test';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import {MatInputModule} from '@angular/material/input';
import { AllscreenshotsComponent } from './allscreenshots/allscreenshots.component';
import { Cap } from './cap';
import { CompareImagesService } from './compare-images.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    AppSectionComponent,
    DetailsTestComponent,
    LiveTestComponent,
    ShowResultComponent,
    TestscreenshotComponent,
    VisualTestingInfoComponent,
    AllscreenshotsComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    ViewGraphComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [ Capability,CapabilityService,InfoTestService,DetailTest,FirebaseService, Cap,CompareImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
