import { Observable, Subject } from "rxjs";
import { ArticleType, FeaturedArticle, NormalArticle } from "./model/article";
import { ZyllemApiService } from "./app.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  filterByArticleForm = new FormControl(this.articleType.ALL);
  articleTypesOptions: string[];
  allArticles$: Observable<FeaturedArticle[] | NormalArticle[]>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private zyllemApiService: ZyllemApiService) {}

  ngOnInit(): void {
    this.initArticleTypes();
    this.allArticles$ = this.zyllemApiService.getAllArticlesByType();
    this.initFilterByTimeListener();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  get articleType(): typeof ArticleType {
    return ArticleType;
  }

  private initFilterByTimeListener(): void {
    this.filterByArticleForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((filterBy) => this.zyllemApiService.setFilterBy(filterBy));
  }

  private initArticleTypes(): void {
    this.articleTypesOptions = Object.keys(ArticleType);
  }
}
