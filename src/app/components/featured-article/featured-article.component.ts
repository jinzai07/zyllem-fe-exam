import { FeaturedArticle } from "./../../model/article";
import { Component, Input } from "@angular/core";
import { ArticleComponent } from "src/app/model/article";

@Component({
  selector: "app-featured-article",
  template: ` <img class="image" [src]="article.featureImgUrl" />`,
  styleUrls: ["./featured-article.component.css"],
})
export class FeaturedArticleComponent
  implements ArticleComponent<FeaturedArticle>
{
  @Input() article: FeaturedArticle;
  constructor() {}
}
