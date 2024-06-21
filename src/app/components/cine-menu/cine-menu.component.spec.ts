import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CineMenuComponent } from './cine-menu.component';

describe('CineMenuComponent', () => {
  let component: CineMenuComponent;
  let fixture: ComponentFixture<CineMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
