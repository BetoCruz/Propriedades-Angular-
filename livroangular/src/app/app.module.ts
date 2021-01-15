import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { IterpolationBindingComponent } from './iterpolation-binding/iterpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IdComponent } from './id/id.component';
import { AlertaService } from './alerta.service';//importando classe global.

@NgModule({
  declarations: [
    AppComponent,
    IterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    EventBindingComponent,
    InputOutputComponent,
    FormularioComponent,
    IdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
