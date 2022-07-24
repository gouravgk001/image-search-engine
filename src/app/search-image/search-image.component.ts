import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.scss'],
})
export class SearchImageComponent implements OnInit {
  images: any = [];
  search: any;
  imagesFound: boolean = false;
  searching: boolean = false;
  imagesNotFound: boolean = false;

  constructor(private sharedService: SharedServiceService) {}

  ngOnInit(): void {}

  handleSuccess(data: any) {
    this.imagesFound = true;
    this.images = data.hits;
  }

  handleError(err: any) {
    console.error(err);
  }

  getImages(query: string) {
    this.searching = true;
    return this.sharedService.getImages(query).subscribe((data) => {
      this.handleSuccess(data);
      this.searching = false;
    });
  }
}
