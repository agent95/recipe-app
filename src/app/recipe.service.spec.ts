import { TestBed, inject } from '@angular/core/testing';

import { RecipeIdeasService } from './recipe-ideas.service';

describe('RecipeIdeasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeIdeasService]
    });
  });

  it('should be created', inject([RecipeIdeasService], (service: RecipeIdeasService) => {
    expect(service).toBeTruthy();
  }));
});
