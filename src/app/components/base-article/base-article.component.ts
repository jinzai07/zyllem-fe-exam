import { NormalArticleComponent } from "./../normal-article/normal-article.component";
import { FeaturedArticleComponent } from "./../featured-article/featured-article.component";
import {
  ArticleType,
  ArticleComponent,
  FeaturedArticle,
  NormalArticle,
} from "./../../model/article";
import {
  AfterContentInit,
  ComponentFactoryResolver,
  Type,
  ViewContainerRef,
} from "@angular/core";
import { Component, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-base-article",
  templateUrl: "./base-article.component.html",
  styleUrls: ["./base-article.component.css"],
})
export class BaseArticleComponent implements AfterContentInit {
  @Input() article: FeaturedArticle | NormalArticle;
  @ViewChild("container", { read: ViewContainerRef, static: true })
  private container: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    this.initDynamicComponent(this.article);
  }

  get articleType(): typeof ArticleType {
    return ArticleType;
  }

  goToExternal(url: string): void {
    window.open(url, "_blank");
  }

  private initDynamicComponent(article: FeaturedArticle | NormalArticle): void {
    const viewContainerRef = this.container;
    if (!viewContainerRef) return;

    viewContainerRef.clear();

    switch (article.type) {
      case this.articleType.FEATURED:
        this.generateDynamicComponent<FeaturedArticle>(
          viewContainerRef,
          article as FeaturedArticle,
          FeaturedArticleComponent
        );

        break;

      case this.articleType.NORMAL:
        this.generateDynamicComponent<NormalArticle>(
          viewContainerRef,
          article as NormalArticle,
          NormalArticleComponent
        );

        break;
    }
  }

  private generateDynamicComponent<T>(
    container: ViewContainerRef,
    article: T,
    component: Type<any>
  ): void {
    const componentRef = container.createComponent<ArticleComponent<T>>(
      this.cfr.resolveComponentFactory(component)
    );

    componentRef.instance.article = article as T;
  }
}
