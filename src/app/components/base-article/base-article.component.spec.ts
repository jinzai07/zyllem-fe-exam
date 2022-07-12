import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseArticleComponent } from './base-article.component';

describe('BaseArticleComponent', () => {
  let component: BaseArticleComponent;
  let fixture: ComponentFixture<BaseArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
