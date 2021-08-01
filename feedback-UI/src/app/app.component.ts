import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'feed-back-management';
  constructor()
  {

  }
}
