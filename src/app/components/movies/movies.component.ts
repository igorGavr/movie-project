import { Component, OnInit } from '@angular/core';
import {IMovie, IMovies} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(private movieService: MovieService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.movieService.getAll(page || 1).subscribe(value => {
        this.movies = value.results
        console.log(value)
      })
    })
  }
}
