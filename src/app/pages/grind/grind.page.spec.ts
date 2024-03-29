import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrindPage } from './grind.page';

describe('GrindPage', () => {
  let component: GrindPage;
  let fixture: ComponentFixture<GrindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
