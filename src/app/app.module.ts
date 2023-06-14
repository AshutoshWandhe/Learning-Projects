import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcomponentComponent } from './appComponent/empcomponent/empcomponent.component';
import { EmplistcomponentComponent } from './appComponent/emplistcomponent/emplistcomponent.component';
import { EmplistitemComponent } from './appComponent/emplistitem/emplistitem.component';
import { EmpcreatecomponentComponent } from './appComponent/empcreatecomponent/empcreatecomponent.component';
import { FormsModule } from '@angular/forms';
import { RegistercomponentComponent } from './appRegister/registercomponent/registercomponent.component';
import { DetailscomponentComponent } from './appRegister/detailscomponent/detailscomponent.component';
import { AppdisplayComponent } from './appRegister/appdisplay/appdisplay.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpcomponentComponent,
    EmplistcomponentComponent,
    EmplistitemComponent,
    EmpcreatecomponentComponent,
    RegistercomponentComponent,
    DetailscomponentComponent,
    AppdisplayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
