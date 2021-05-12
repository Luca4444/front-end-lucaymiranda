import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';


@Component({
  selector: 'app-home',
  templateUrl: './miranda.component.html',
  styleUrls: ['./miranda.component.scss']
})
export class MirandaComponent implements OnInit {

  allImagesNames: any[];
  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit(): void {
    this.imageUploadService.getAllKeys().subscribe(data => {
      this.allImagesNames = data;
      console.log(this.allImagesNames);
    });
  }
}
