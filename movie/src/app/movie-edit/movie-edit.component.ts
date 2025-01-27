import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  movieForm: any;
  movieId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.movieForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      director: ['', Validators.required],
      year: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.movieId = this.route.snapshot.params['id'];

    this.movieService.getMovieById(this.movieId).subscribe((data) => {
      this.movieForm?.patchValue(data);
    });

  }


  updateMovie(): void {
    this.movieService.updateMovie(this.movieForm?.value).subscribe(() => {
      alert("Movie updated successfully!");
      this.router.navigate(['/']);
    });
  }



}
