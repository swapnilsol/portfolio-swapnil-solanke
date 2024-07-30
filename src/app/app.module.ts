import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './components/shared/app-header/app-header.component';
import { AppFooterComponent } from './components/shared/app-footer/app-footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeViewerComponent } from './components/resume-viewer/resume-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AboutMeComponent,
    ResumeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PdfViewerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
