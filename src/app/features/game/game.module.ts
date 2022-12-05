import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CorrectComponent } from './correct/correct.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GameNewComponent } from './game-new/game-new.component';

@NgModule({
  declarations: [CorrectComponent, GameNewComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class GameModule {}
