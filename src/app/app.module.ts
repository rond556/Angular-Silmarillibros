import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CharacterTableComponent } from './character-table/character-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModalComponent } from './character-modal/character-modal.component';
import { FormsModule } from '@angular/forms';
import { ArrayBreakerPipe } from './pipes/array-breaker.pipe';

@NgModule({
  declarations: [ //Which components within "Belong"
    AppComponent, CharacterTableComponent, CharacterModalComponent, ArrayBreakerPipe
  ],
  imports: [ //Which external modules we are using
    BrowserModule, 
    NgbModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Our startup component
})
export class AppModule { }
