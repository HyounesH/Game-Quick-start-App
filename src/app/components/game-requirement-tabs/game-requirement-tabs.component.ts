import {Component, Input, OnInit} from '@angular/core';
import {GamePlatform} from '../../models';

@Component({
  selector: 'app-game-requirement-tabs',
  templateUrl: './game-requirement-tabs.component.html',
  styleUrls: ['./game-requirement-tabs.component.css']
})
export class GameRequirementTabsComponent implements OnInit {

  @Input() requirements: Array<GamePlatform>;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.requirements);
  }

}
