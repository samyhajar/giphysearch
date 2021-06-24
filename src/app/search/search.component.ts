import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService : Dataservice) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if (searchTerm !== '') {
      this.dataService.searchGifs(searchTerm);    
        };
  }

}
