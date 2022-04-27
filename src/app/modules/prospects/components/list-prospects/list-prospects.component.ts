import { Component, OnInit } from '@angular/core';
import { Prospect, ProspectsService } from '../../services/prospects.service';

@Component({
  selector: 'app-list-prospects',
  templateUrl: './list-prospects.component.html',
  styleUrls: ['./list-prospects.component.scss']
})
export class ListProspectsComponent implements OnInit {

  prospects: Prospect[] = [];

  constructor(
    private _prospectsService: ProspectsService,
  ) { }

  ngOnInit(): void {
    this._prospectsService.getProspects$().subscribe(prospects => {
      this.prospects = prospects;
    })
  }

}
