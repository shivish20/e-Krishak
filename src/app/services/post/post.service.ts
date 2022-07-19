import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) {}
  //load all the posts
  public posts() {
    return this._http.get(`${baseUrl}/post/all`);
  }

  //add new post
  public addPost(category:any) {
    return this._http.post(`${baseUrl}/post/`, category);
  }
}