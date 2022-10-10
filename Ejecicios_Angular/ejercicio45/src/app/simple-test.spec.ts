import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Una simple prueba', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
});

  it('Creacion del componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
});
