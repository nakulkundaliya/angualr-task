import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let colleagues = [
      {
        id: 1,
        firstname: 'Robert',
        lastname: 'Williams',
        email: 'robertW@gmail.com',
        job: 'Developer',
      },
      {
        id: 2,
        firstname: 'Emma',
        lastname: 'Watson',
        email: 'watson@gmail.com',
        job: 'Product Manager',
      },
      {
        id: 3,
        firstname: 'Daniel',
        lastname: 'Radcliff',
        email: 'daniel@gmail.com',
        job: 'Tester',
      },
      {
        id: 4,
        firstname: 'Rupert',
        lastname: 'Grint',
        email: 'rupert@gmail.com',
        job: 'UI Designer',
      },
    ];

    return { colleagues };
  }
}
