import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiURLCategories = 'http://localhost:3000/' + 'category';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiURLCategories);
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiURLCategories, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiURLCategories}/${category.id}`,
      category
    );
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLCategories}/${categoryId}`);
  }
}
