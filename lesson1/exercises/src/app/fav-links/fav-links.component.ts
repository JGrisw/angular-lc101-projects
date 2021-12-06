import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
 favLinks = ['https://www.imdb.com/title/tt0425720/?ref_=hm_rvi_tt_t_1', 'https://www.imdb.com/title/tt3292726/?ref_=tt_sims_tt_i_4']

  constructor() { }

  ngOnInit() {

  }

}
