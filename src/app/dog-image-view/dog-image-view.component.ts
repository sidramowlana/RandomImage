import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-image-view',
  templateUrl: './dog-image-view.component.html',
  styleUrls: ['./dog-image-view.component.css']
})
export class DogImageViewComponent {
// Initialize variables
randomDogImageUrl?: string;
isLoading: boolean = false;

constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.getRandomDogImage();
}

getRandomDogImage() {
  this.isLoading = true;
  this.http.get<any>('https://random.dog/woof.json')
    .subscribe(data => {
      this.randomDogImageUrl = data.url;
      this.isLoading = false;
    });
}

}
