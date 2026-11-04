import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyTwoFactor } from './verify-two-factor';

describe('VerifyTwoFactor', () => {
  let component: VerifyTwoFactor;
  let fixture: ComponentFixture<VerifyTwoFactor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyTwoFactor],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyTwoFactor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
