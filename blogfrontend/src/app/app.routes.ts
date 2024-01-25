import { RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from "./articles/articles.component";
import { NgModule } from "@angular/core";
import { DetailsArticleComponent } from "./details-article/details-article.component";
import { NewArticleComponent } from "./new-article/new-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";


export const routes: Routes = [
  {
    path: "articles",
    component: ArticlesComponent,
    data: { title: "Alle Artikel" }
  },
  {
    path: "newArticle",
    component: NewArticleComponent,
    data: { title: "Artikel hinzufügen" }
  },
  {
    path: "articleDetails",
    component: DetailsArticleComponent,
    data: { title: "Artikel Detials" }
  },
  {
    path: "editArticle",
    component: EditArticleComponent,
    data: { title: "Artikel bearbeiten" }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
