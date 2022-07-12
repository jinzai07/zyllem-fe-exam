import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ZyllemApiService } from "./app.service";
import { ReactiveFormsModule } from "@angular/forms";
import { FeaturedArticleComponent } from "./components/featured-article/featured-article.component";
import { NormalArticleComponent } from "./components/normal-article/normal-article.component";
import { BaseArticleComponent } from "./components/base-article/base-article.component";

@NgModule({
  declarations: [
    AppComponent,
    FeaturedArticleComponent,
    NormalArticleComponent,
    BaseArticleComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [ZyllemApiService],
  bootstrap: [AppComponent],
  entryComponents: [FeaturedArticleComponent, NormalArticleComponent],
})
export class AppModule {}
