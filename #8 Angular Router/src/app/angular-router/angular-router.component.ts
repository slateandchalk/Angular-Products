import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.css']
})
export class AngularRouterComponent implements OnInit {

  public config = [];

  constructor(private ConfigService: ConfigService,
    private router: Router) { }

  ngOnInit() {
    this.ConfigService.getConfig()
    .subscribe(data => this.config = data);
  }

  onSelect(x){
    this.router.navigate(['user-profile/', x.id]);
  }

}
