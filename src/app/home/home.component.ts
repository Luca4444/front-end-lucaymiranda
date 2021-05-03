import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allImagesNames: any[];
  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit(): void {
    this.imageUploadService.getAllKeys().subscribe(data => {
      this.allImagesNames = data;
      console.log(this.allImagesNames);
    });
  }
}
