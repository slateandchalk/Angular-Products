import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Config } from '../models/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<Config[]> {
    return this.http.get<Config[]>(this.configUrl)
  }
}
