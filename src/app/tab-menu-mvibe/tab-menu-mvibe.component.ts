import { Component, OnInit } from '@angular/core';

import {TabMenuModule} from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu-mvibe',
  templateUrl: './tab-menu-mvibe.component.html',
  styleUrls: ['./tab-menu-mvibe.component.css']
})
export class TabMenuMvibeComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Stats', icon: 'fa-bar-chart' },
      { label: 'Calendar', icon: 'fa-calendar' },
      { label: 'Documentation', icon: 'fa-book' },
      { label: 'Support', icon: 'fa-support' },
      { label: 'Social', icon: 'fa-twitter' }
    ];
  }

}
