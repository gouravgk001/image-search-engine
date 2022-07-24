import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { SharedServiceService } from './shared-service.service';

@NgModule({
  declarations: [AppComponent, SearchImageComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [SharedServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
