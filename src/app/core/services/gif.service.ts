import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@app/../environments/environment';
 
@Injectable()
export class GifService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // ----- CREATE -----

  // Get a random gif
  getRandom() {

  }

  // Save a gif with caption
  save() {

  }

  // ----- BATTLE -----

  // Get two gifs to battle
  getBattle() {

  }

  // Vote for a gif
  vote(id) {

  }

  // ----- LEADERBOARD -----
  getLeaderboard() {

  }

}
