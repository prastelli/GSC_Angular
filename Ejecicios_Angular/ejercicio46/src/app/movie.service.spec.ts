import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('getMovieName() debe retornar ggg', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.getMovieName()).toBe('ggg');
  });

});
