import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private readonly _httpClient: HttpClient) {}

  get() {
    const url = 'http://localhost:8080/test/WordPress/wp-json/wp/v2/posts';

    return this._httpClient.get(url);
  }
}