import { Component, OnInit, OnDestroy} from '@angular/core';
import { Dataservice } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription = new Subscription();

  constructor(private dataService: Dataservice) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()
      .subscribe((response : any) => {
      this.gifs = response;
      });
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}


