import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { ArticlesComponent } from "./articles/articles.component";

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ArticlesComponent]
})

export class AppModule {

}



