import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';

import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit  {

  photos: Photo[] = [];

  constructor( private photoService: PhotosService,private router: Router ) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(res => {this.photos = res;},err => console.log(err))
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }


}
