import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IterpolationBindingComponent } from './iterpolation-binding/iterpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    IterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
