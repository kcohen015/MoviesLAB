import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.scss']
})
export class MovieUpdateComponent implements OnInit {

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

  processUpdate(): void {
    console.log("readProduct() called");
    this.movieService.update(this.movie.id, this.movie)
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
