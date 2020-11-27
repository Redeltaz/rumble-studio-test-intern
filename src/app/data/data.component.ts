import { Component, OnInit } from '@angular/core';
import { SavedUrlsService } from '../services/saved-urls.service';
import { Url } from '../interfaces/url';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  urls: Url[];

  constructor(private savedUrlService: SavedUrlsService) { }

  ngOnInit(): void {
    this.savedUrlService.getUrl().subscribe(urls => {
      console.log(urls)
      this.urls = urls;
    });
  }

}
