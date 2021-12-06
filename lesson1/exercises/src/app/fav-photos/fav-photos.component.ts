import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures or something of the sort';
  image1 = 'https://icdn.digitaltrends.com/image/digitaltrends/tmnt_secret_of_the_ooze_9-2-720x720.jpg';
  image2 = 'https://bbts1.azureedge.net/images/p/full/2020/10/07490a8f-220f-4c56-abe8-2dc70f84aea4.jpg';
  image3 = 'https://bbts1.azureedge.net/images/p/full/2021/10/2b882830-8c6f-4f6f-b272-8c919a9930ec.jpg';

  constructor() { }

  ngOnInit() {
  }

}