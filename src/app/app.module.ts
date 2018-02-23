import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'blog', component:  BlogComponent },
      { path: 'blog/:id', component: BlogDetailComponent }
    ]),
    TransferHttpCacheModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
