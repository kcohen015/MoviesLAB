package com.example.backendlab.api;

import com.example.backendlab.model.Movie;
import com.example.backendlab.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="movies/")
public class MovieController {
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // POST localhost:8080/movies/
    @PostMapping (value="", consumes = MediaType.APPLICATION_JSON_VALUE)
    int insertMovie(@RequestBody Movie movie){
        return movieService.insertMovie(movie);
    }

    // PUT localhost:8080/movies/123
    @PutMapping(value="{id}")
    int updateMovie(@PathVariable("id")int id, @RequestBody Movie movie){
        return movieService.updateMovie(id, movie);
    }

    // DELETE localhost:8080/movies/123
    @DeleteMapping(value="{id}")
    int deleteMovie(@PathVariable("id")int id){
        return movieService.deleteMovie(id);
    }

    // GET localhost:8080/movies/
    @GetMapping
    List<Movie> queryMovies(){
        return movieService.queryMovies();
    }

    // GET localhost:8080/movies/123
    @GetMapping(value="{id}")
    Optional<Movie> queryMovie(@PathVariable("id")int id){
        return movieService.queryMovie(id);
    }
}