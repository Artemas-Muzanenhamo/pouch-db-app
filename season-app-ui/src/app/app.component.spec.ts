import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PouchDbService} from './pouch-db.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppService,
        PouchDbService
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RANDOM SEASON OF THE DAY IS'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('RANDOM SEASON OF THE DAY IS');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('RANDOM SEASON OF THE DAY IS');
  });
});
