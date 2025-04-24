import { TestBed } from '@angular/core/testing';

import { PgBlogDataService } from './pg-blog-data.service';

describe('PgBlogDataService', () => {
  let service: PgBlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgBlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
