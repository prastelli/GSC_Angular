import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, Result } from '../interface/result.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = "https://swapi.dev/api/films/"

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies>{
    return this.http.get<Movies>(this.url);
  }
}
