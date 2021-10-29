import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ColleaguesService {
  SERVER_URL: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  public getColleagues() {
    return this.httpClient.get(this.SERVER_URL + 'colleagues');
  }

  public getColleague(id: any) {
    return this.httpClient.get(`${this.SERVER_URL + 'colleague'}/${id}`);
  }
  public createColleague(colleague: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    job: string;
  }) {
    return this.httpClient.post(`${this.SERVER_URL + 'colleagues'}`, colleague);
  }

  public updateColleague(colleague: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    job: string;
  }) {
    return this.httpClient.put(
      `${this.SERVER_URL + 'colleagues'}/${colleague.id}`,
      colleague
    );
  }

  public deleteColleague(id: any) {
    return this.httpClient.delete(`${this.SERVER_URL + 'colleagues'}/${id}`);
  }
}
