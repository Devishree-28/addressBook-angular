import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatctsListComponent } from './contatcts-list.component';

describe('ContatctsListComponent', () => {
  let component: ContatctsListComponent;
  let fixture: ComponentFixture<ContatctsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatctsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
