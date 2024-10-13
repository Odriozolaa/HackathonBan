import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedModulesComponent } from './recommended-modules.component';

describe('RecommendedModulesComponent', () => {
  let component: RecommendedModulesComponent;
  let fixture: ComponentFixture<RecommendedModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
