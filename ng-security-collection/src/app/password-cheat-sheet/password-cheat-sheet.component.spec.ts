import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheatSheetComponent } from './password-cheat-sheet.component';

describe('PasswordCheatSheetComponent', () => {
  let component: PasswordCheatSheetComponent;
  let fixture: ComponentFixture<PasswordCheatSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCheatSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCheatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
