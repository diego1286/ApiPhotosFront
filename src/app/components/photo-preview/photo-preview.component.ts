import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { PhotosService } from '../../services/photos.service';
import {Photo} from '../../interfaces/Photo'


@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent  implements OnInit{

   id !: string;
   photo!: Photo;


  constructor( private photoService: PhotosService,private activateRoue: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.activateRoue.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/photos']);
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos']);
      });
    return false;
  }


  convertPhotoToPNG(photoId: string): void {
    console.log(photoId)
    this.photoService.convertPhotoToPNG(photoId).subscribe(
      (response) => {
        console.log('La foto se convirtió a PNG', response);
     
        this.router.navigate(['/photos']);
      },
      (error) => {
        console.error('Error al convertir la foto a PNG', error);
      }
    );
  }


}
