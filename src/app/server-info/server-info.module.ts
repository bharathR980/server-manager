import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerInfoRoutingModule } from './server-info-routing.module';
import { ServerCardComponent } from './server-card/server-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { LastUpdatedPipe } from '../pipes/last-updated/last-updated.pipe';
import { FormsModule } from '@angular/forms';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ServerCreateDialogComponent } from './server-create-dialog/server-create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LastUpdatedPipe,
    ServerListComponent,
    ServerCardComponent,
    ServerCreateComponent,
    ServerCreateDialogComponent,
  ],
  imports: [
    ServerInfoRoutingModule,
    // Ng Modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    // Mat Modules
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
  ],
})
export class ServerInfoModule {}
