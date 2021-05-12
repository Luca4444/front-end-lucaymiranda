import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirandaComponent } from './miranda.component';

describe('MirandaComponent', () => {
  let component: MirandaComponent;
  let fixture: ComponentFixture<MirandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
