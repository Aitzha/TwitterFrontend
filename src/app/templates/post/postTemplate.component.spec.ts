import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTemplateComponent } from './postTemplate.component';

describe('PostComponent', () => {
  let component: PostTemplateComponent;
  let fixture: ComponentFixture<PostTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
