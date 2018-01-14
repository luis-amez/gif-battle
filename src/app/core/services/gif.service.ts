import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Gif } from '@app/models/gif.model';
import { environment } from '@app/../environments/environment';
 
@Injectable()
export class GifService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // ----- CREATE -----

  // Get a random gif
  getRandom(): Observable<Gif> {
    return this.http.get<Gif>(`${this.apiUrl}/random`);
  }

  // Save a gif with caption
  save(id: string, url: string, caption: string): Observable<any> {
    return this.http.post(this.apiUrl, { id, url, caption, votes: 0 });
  }

  // ----- BATTLE -----

  // Get two gifs to battle
  getBattle(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/versus`);
  }

  // Vote for a gif
  vote(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/vote`, { id });
  }

  // ----- LEADERBOARD -----
  getLeaderboard() {

  }

}
