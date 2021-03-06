import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {
  }

  imageUpload(imageForm: File) {
    console.log('image uploading');
    return this.http.post('https://lucaymirandaback.herokuapp.com/fileupload', imageForm);
  }

  upload(file): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post('https://lucaymirandaback.herokuapp.com/fileupload', formData);
  }
  getAllKeys(): Observable<any>{
    return this.http.get('https://lucaymirandaback.herokuapp.com/fileupload/images');
  }
}

