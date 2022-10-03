import { Component, OnInit } from '@angular/core';
import { resourceLimits } from 'worker_threads';
import { Result } from '../interface/result.interface';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: Result[] = []; // Corregir

  constructor(private movies: MoviesService) { }

  ngOnInit() {}

  makeRequest() {
    this.movies.getMovies().subscribe(response => this.movieList = response.results)
  }
}

