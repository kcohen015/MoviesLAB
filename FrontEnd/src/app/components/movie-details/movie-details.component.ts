import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie = {
    id: 0,
    title: "",
    duration: 0,
    genre: "",
    rating: ""
  }
  msg: any = "";

  constructor(private route: ActivatedRoute, private movieService: MovieServiceService) { }

  ngOnInit(): void {
    let currentId = this.route.snapshot.paramMap.get("id");
    this.readMovie(currentId);
  }

  readMovie(id: any): void {
    console.log("readMovie() called");
    this.movieService.read(id)
      .subscribe({
        next: (movie) => {
          this.movie = movie;
          console.log(movie);
        },
        error: (error) => {
          console.log(error);
        }
      });
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
  updateMovie(movie: any) {
    console.log("updateMovie() called: movie=" + JSON.stringify(movie));
    this.movieService.update(movie.id, movie)
      .subscribe({
        next: (msg) => {
          this.msg = msg;
          console.log(this.msg);
        },
        error: (error) => {
          console.log(error);
        }
      });
    this.readMovie(movie.id);
  }
}
