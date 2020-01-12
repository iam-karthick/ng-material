import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FullPageComponent } from './pages/full-page/full-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule,MatCardModule} from '@angular/material';
import { AppFileUploadComponent } from './shared/app-file-upload/app-file-upload.component';
import { FormService } from '../app/shared/form-data.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
//NGRX Storage module
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/shared/reducer/user.reducer';
import { reducers } from '../app/shared/reducer/index';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FullPageComponent,
    NavbarComponent,
    AppFileUploadComponent,
    DialogComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({user:reducer}),
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,  
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    DragDropModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
