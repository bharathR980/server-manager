import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCreateComponent } from './server-create.component';

describe('ServerCreateComponent', () => {
  let component: ServerCreateComponent;
  let fixture: ComponentFixture<ServerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerCreateComponent]
    });
    fixture = TestBed.createComponent(ServerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
