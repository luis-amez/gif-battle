import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns" *ngIf="battleGifs">
      <div class="column is-half" *ngFor="let gif of battleGifs">

        <app-gif 
          [url]="gif.url" 
          [caption]="gif.caption">
        </app-gif>

        <a class="button is-info" (click)="voteOnGif(gif.id)">
          Vote!
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .button {
        display: block;
        width: 100%;
      }
    `
  ]
})
export class BattleComponent implements OnInit {
  battleGifs: Array<any>;

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle() {
    this.gifService.getBattle()
      .subscribe(gifs => {
        this.battleGifs = gifs;
      })
  }

  voteOnGif(id) {
    this.gifService.vote(id)
      .subscribe(data => {
        this.getNewBattle();
      });
  }
}
