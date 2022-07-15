import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {

  movie = {
    id: 0,
    title: "",
    duration: 0,
    genre: "",
    rating: ""
  }

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
  }

  processCreate(): void {
    console.log("readProduct() called");
    this.movieService.create(this.movie)
      .subscribe({
        next: (msg) => {
          console.log(JSON.stringify(msg));
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
