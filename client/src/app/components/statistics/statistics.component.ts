import { Component, OnInit } from '@angular/core';

import { Data } from '../../data/data.service';
import { EventService } from '../../data/event.service'

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{ 
  data = {flowers: '', users:''};

  constructor(private dataBase: Data, private eventService: EventService){}

  loadStatistic() {
    this.dataBase
      .getStatistics()
      .then(data => {this.data = data;});
  }

  ngOnInit(){
    this.loadStatistic();

    this.eventService.statisticChanged.subscribe(
      (param) => {
        this.loadStatistic();
      }
    );
  }
}