import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltersComponent } from './header/filters/filters.component';
import { VideoGridComponent } from './video/video-grid/video-grid.component';
import { VideoItemComponent } from './video/video-item/video-item.component';
import { SearchComponent } from './header/search/search.component';
import { LoginComponent } from './header/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterVideosByTitlePipe } from './filter-videos-by-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    VideoGridComponent,
    VideoItemComponent,
    SearchComponent,
    LoginComponent,
    FilterVideosByTitlePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
