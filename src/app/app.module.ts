import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormComponent } from './form/form.component';
import { QuotDetailComponent } from './quot-detail/quot-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { CoolQuoteDirective } from './cool-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormComponent,
    QuotDetailComponent,
    DateCountPipe,
    CoolQuoteDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
