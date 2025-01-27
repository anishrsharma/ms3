import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private apiUrl = 'https://friendly-funicular-r65qpv7wq9v2wq4g-3000.app.github.dev/movies';

  constructor(private http: HttpClient) { }

  // get all movies of type Movie[]
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}`);
  }


  // get movie by id of type Movie
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  // create movie
  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}`, movie);
  }


  // delete movie by id
  deleteMovie(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // update movie
  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${movie.id}`, movie);
  }


}
