import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { ArticlesComponent } from "./articles/articles.component";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const apiUrl = "http://localhost:3000/api/article";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  articles(): Observable<ArticlesComponent[]> {
    return this.http.get<ArticlesComponent[]>(apiUrl)
      .pipe(
        tap(article => console.log("Alle Artikel")),
        catchError(this.handleError("Alle Artikel", []))
      );
  }

  getArticle(id: number): Observable<ArticlesComponent> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<ArticlesComponent>(url).pipe(
      tap(_ => console.log(`geladener Artikel id=${id}`)),
      catchError(this.handleError<ArticlesComponent>(`Artikel id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // wir loggen auf der Konsole
      return of(result as T);
    };
  }


}
