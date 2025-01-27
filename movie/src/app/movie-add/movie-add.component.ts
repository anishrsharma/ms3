import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private movieService: MovieService
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: [, Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2024)]]
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  addMovie(): void {
    if (this.movieForm.valid) {
      this.movieService.createMovie(this.movieForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }




}
