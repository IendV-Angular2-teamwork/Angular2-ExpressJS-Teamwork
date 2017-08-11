import { Component } from '@angular/core';

import { Flower } from '../../models/flower.model';
import Data from '../../data/data.service';
import {EventService} from '../../data/event.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent{
  flower: any;

  constructor(private data: Data, private router: Router, private eventService: EventService){
    this.flower = new Flower();
  }

  onSubmit(flowerFromForm){
    flowerFromForm = this.flower;
    this.data.addFlower(this.flower)
    .subscribe(res => {
      this.eventService.triggerNotificationFetched(res.message);
      this.router.navigateByUrl(`flowers/details/${res.flower.id}`)
    });
    
    //flowers/details/5
    
    
  } 
}