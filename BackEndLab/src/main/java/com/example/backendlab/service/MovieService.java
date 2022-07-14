package com.example.backendlab.service;

import com.example.backendlab.dao.MovieDAO;
import com.example.backendlab.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class MovieService {
    private final MovieDAO movieDAO;

    @Autowired
    public MovieService(@Qualifier("MovieRepo") MovieDAO movieDAO){this.movieDAO = movieDAO;}
    public int insertMovie(Movie movie){return movieDAO.insertMovie(movie);}
    public int updateMovie(int id, Movie movie) {
        return movieDAO.updateMovie( id, movie);
    }
    public int deleteMovie(int id) {
        return movieDAO.deleteMovie(id);
    }
    public List<Movie> queryMovies() {
        return movieDAO.queryMovies();
    }
    public Optional<Movie> queryMovie(int id) {
        return movieDAO.queryMovies( id);
    }
}
