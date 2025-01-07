import { TestBed } from '@angular/core/testing';
import { SearchPage } from './search.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPage],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'primebox' title`, () => {
    const fixture = TestBed.createComponent(SearchPage);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('primebox');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, primebox');
  });
});
