import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create!</h1>
    <div class="box">
      <div class="gif-container" *ngIf="randomGif">
        <!-- image -->
        <img [src]="randomGif.url">
        <!-- caption -->
        <div class="caption">{{ caption }}</div>  
      </div>
      <!-- caption input -->
      <div class="field">
        <input type="text" class="input" [(ngModel)]="caption">
      </div>
      <!-- create button -->
      <a class="button is-warning" (click)="saveGif()">Create</a>
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
export class CreateComponent implements OnInit {
  randomGif;
  caption = "";

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.getRandom()
      .subscribe(gif => {
        this.randomGif = gif;
      })
  }

}
