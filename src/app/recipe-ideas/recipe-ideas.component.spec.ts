import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIdeasComponent } from './recipe-ideas.component';

describe('RecipeIdeasComponent', () => {
  let component: RecipeIdeasComponent;
  let fixture: ComponentFixture<RecipeIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
