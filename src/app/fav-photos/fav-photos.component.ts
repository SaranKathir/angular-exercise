import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photo/Image ';
  //image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image1 ='https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg';
  image2='https://st.depositphotos.com/2010501/4424/i/450/depositphotos_44249071-stock-photo-single-beautiful-red-rose.jpg';


  constructor() { }

  ngOnInit() {
  }

}