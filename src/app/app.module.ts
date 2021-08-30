import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VideoModule } from './video/video.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/not-found/not-found.component';
import { ModalComponent } from './auth/modal/modal.component';
import { VideoGridComponent } from './video/video-grid/video-grid.component';
import { VideoDetailsComponent } from './video/video-details/video-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VideoModule,
    CoreModule,
    AuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/video', pathMatch: 'full' },
      { path: 'video', component: VideoGridComponent },
      { path: 'auth', component: ModalComponent },
      { path: 'video/:id', component: VideoDetailsComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
