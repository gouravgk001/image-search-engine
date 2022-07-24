import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  apiKey: string = '28786749-a092bf32100ed8677a69247d4';
  apiURL: string = 'https://pixabay.com/api/?key=';

  finalUrl = this.apiURL + this.apiKey + '&q=';

  constructor(private htttp: HttpClient) {}

  getImages(query: string) {
    return this.htttp.get(this.finalUrl + query);
  }
}
