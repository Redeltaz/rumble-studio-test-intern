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
  url: Url = {
    name: '',
    url: ''
  }

  constructor(private savedUrlService: SavedUrlsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.savedUrlService.getUrl().subscribe(urls => {
        this.urls = urls;
      });
    }, 3000)//add a timeout to give impression of a processing request
  }

  onSubmit(){
    if(this.url.name != '' && this.url.url != ''){
      this.savedUrlService.setUrl(this.url);
      this.url.name = '';
      this.url.url = '';
    }
  }

  deleteUrl(event, url){
    this.savedUrlService.deleteUrl(url);
  }

}
