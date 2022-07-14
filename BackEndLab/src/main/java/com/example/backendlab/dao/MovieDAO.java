package com.example.backendlab.dao;

import com.example.backendlab.model.Movie;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface MovieDAO {
    default int insertMovie(Movie movie){
        Random rand = new Random();
        int id = rand.nextInt();
        return insertMovie( id, movie);
    }

    int insertMovie (int id, Movie movie);
    int updateMovie(int id, Movie movie);
    int deleteMovie(int id);
    List<Movie> queryMovies();
    Optional<Movie> queryMovies(int id);

}
