import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host} from '../classes/host';
import { Exclusion } from '../classes/exclusion';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {
  private hostsUrl: string;
  private exclusionUrl: string;

  constructor(private http:HttpClient) {
    this.hostsUrl = 'http://localhost:8081/api/getAllHosts';
    this.exclusionUrl = 'http://localhost:8081/exclusions/addExclusion';
    
  }
  public findAll(): Observable<Host[]> {
    return this.http.get<Host[]>(this.hostsUrl);
  }

  public save(host: Host) {
    return this.http.post<Host>(this.hostsUrl, host);
  }

  public saveExclusion(exclusion: Exclusion) {
    return this.http.post<Exclusion>(this.exclusionUrl, exclusion);
  }

  
}
