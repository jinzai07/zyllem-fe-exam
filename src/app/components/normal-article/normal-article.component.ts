import { NormalArticle } from "./../../model/article";
import { Component, Input } from "@angular/core";
import { ArticleComponent } from "src/app/model/article";

@Component({
  selector: "app-normal-article",
  template: `<div [innerHTML]="article.description"></div>`,
})
export class NormalArticleComponent implements ArticleComponent<NormalArticle> {
  @Input() article: NormalArticle;
}
