import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-angular-http',
  templateUrl: './angular-http.component.html',
  styleUrls: ['./angular-http.component.css']
})
export class AngularHttpComponent implements OnInit {

  public config = [];

  constructor(private ConfigService: ConfigService) { }

  ngOnInit() {
    this.ConfigService.getConfig()
    .subscribe(data => this.config = data)
  }

}
