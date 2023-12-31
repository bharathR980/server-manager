import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCreateDialogComponent } from './server-create-dialog.component';

describe('ServerCreateDialogComponent', () => {
  let component: ServerCreateDialogComponent;
  let fixture: ComponentFixture<ServerCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerCreateDialogComponent]
    });
    fixture = TestBed.createComponent(ServerCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
