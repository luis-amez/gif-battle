import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';

@Component({
  selector: 'app-leaderboard',
  template: `
    <h1 class="title has-text-centered">Leaderboard</h1>

    <section class="section">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <table class="table is-bordered is-hover is-striped" *ngIf="leaderboardGifs">
            <tbody>
              <tr *ngFor="let gif of leaderboardGifs; let i = index">
                <td>{{ i + 1 }}</td>
                <td>
                  <app-gif
                    [url]="gif.url"
                    [caption]="gif.caption"
                  >
                  </app-gif>
                </td>
                <td>{{ gif.votes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LeaderboardComponent implements OnInit {
  leaderboardGifs: Gif[];

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getLeaderboard();
  }

  getLeaderboard() {
    this.gifService.getLeaderboard()
      .subscribe(gifs => {
        this.leaderboardGifs = gifs;
      });
  }
}
