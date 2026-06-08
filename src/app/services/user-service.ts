import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList() {
    return [
      {
        id: 1,
        name: 'Tushar',
        city: 'Rajkot',
        age: 22,
      },
      {
        id: 2,
        name: 'Amit',
        city: 'Ahmedabad',
        age: 25,
      },
      {
        id: 3,
        name: 'Priya',
        city: 'Surat',
        age: 21,
      },
      {
        id: 4,
        name: 'Rahul',
        city: 'Vadodara',
        age: 28,
      },
      {
        id: 5,
        name: 'Neha',
        city: 'Mumbai',
        age: 24,
      },
    ];
  }
}
