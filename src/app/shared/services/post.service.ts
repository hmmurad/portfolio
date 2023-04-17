import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  // url = 'https://dummyjson.com/posts?skip=5&limit=10'
  url = 'https://dummyjson.com/posts'

  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get<any[]>(`${this.url}`, {params: new HttpParams().set('limit', 5 )})
    .pipe(
      map( resData => {
        const postsArray: any[] = [];
        for(const key in resData) {
          if(resData.hasOwnProperty(key)){
            postsArray.push({...resData[key], id: key})
          }
        }
        console.log(postsArray[0]);
        return postsArray[0];
        
      }),
    )
  }

  getPostById(id:number) {
    return this.http.get<any>(`${this.url}/${id}`)
  }


}
