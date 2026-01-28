import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDev } from './contacto-dev';

describe('ContactoDev', () => {
  let component: ContactoDev;
  let fixture: ComponentFixture<ContactoDev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoDev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoDev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
