import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConjugatorPage } from './conjugator.page';
import { ComponentFactoryResolver } from '@angular/core';




describe('ConjugatorPage', () => {
  let component: ConjugatorPage;
  let fixture: ComponentFixture<ConjugatorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjugatorPage ],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // afterEach(() => {
  //   fixture.destroy();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Checks Valid Conjugations', () => {
})});



