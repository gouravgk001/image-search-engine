import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  private query: string | undefined;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';

  constructor(private htttp: HttpClient) {}

  getImages(query: string) {
    return this.htttp.get(this.URL + query);
  }
}
