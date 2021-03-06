import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create!</h1>
    <div class="box">

      <app-gif 
        *ngIf="randomGif"
        [url]="randomGif.url" 
        [caption]="caption">
      </app-gif>

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
      .box {
        max-width: 50%;
        margin: 0 auto;
      }

      ::ng-deep img {
        width: 100%;
        border-radius: 3px;
      }

      .button {
        display: block;
        width: 100%;
      }
    `
  ]
})
export class CreateComponent implements OnInit {
  randomGif: Gif;
  caption = '';

  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom()
      .subscribe(gif => {
        this.randomGif = gif;
      })
  }

  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
      .subscribe(data => {
        // Get new random gif
        this.getRandomGif();
        // Clear the caption
        this.caption = '';
        // Show notification
        this.flashService.show('Gif created!', { 
          cssClass: 'notification is-warning', 
          timeout: 1500 
        });
      });
  }

}
