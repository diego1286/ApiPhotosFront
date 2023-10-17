import { PhotosService } from '../../services/photos.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface HTMLInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file!: File;
  photoSelected!: string | ArrayBuffer;

 
  ngOnInit(): void {
       
  }

 constructor(private htpp: HttpClient, private photoService: PhotosService, private router:Router){}

 
  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = input.files[0] as File;
      // Previsualización
      const reader = new FileReader();
      reader.onload = (e) => this.photoSelected = reader.result as string;
      reader.readAsDataURL(this.file);
      console.log(this.file);
      console.log(this.photoSelected);
      console.log(reader.result)
    }
  }



  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement, author:HTMLInputElement){
    this.photoService.createPhoto(title.value, description.value, author.value, this.file)
    .subscribe(res=>  {this.router.navigate(['/photos'])}, error=>console.log(error))
    return false;

  }

  
  

}
