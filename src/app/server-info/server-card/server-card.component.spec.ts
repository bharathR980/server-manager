import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCardComponent } from './server-card.component';

describe('ServerCardComponent', () => {
  let component: ServerCardComponent;
  let fixture: ComponentFixture<ServerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerCardComponent]
    });
    fixture = TestBed.createComponent(ServerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
