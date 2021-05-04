
import {Component, OnInit} from '@angular/core';
import {ImageUploadService} from '../image-upload.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  imageObj: File;
  imageUrl: string;
  shortLink = '';
  loading = false; // Flag variable
  file: File = null; // Variable to store file
  constructor(private imageUploadService: ImageUploadService) { }

  ngOnInit(): void {

  }

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.imageUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
  }

}
