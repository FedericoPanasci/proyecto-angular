import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export const loginServiceMock = {
  validateCredentials: (
    user: string,
    password: string
  ): Observable<boolean> => {
    return of(true);
  },

  getToken: (): any => {
    return of(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInVzZXJOYW1lIjoidXNlciIsInBhc3N3b3JkIjoidXNlciIsIm1haWwiOiJ1c2VyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDI1MjIzNDl9.J3hnJQDpjPZq8zOJ5-CIE_nyNXegDpXzaV1Z02EDBeM'
    );
  },

  isUserLoggedIn: (): boolean => {
    return true;
  },

  getUserInfo: (): any => {
    return {
      user: 'user',
      userName: 'userName',
      role: 'role',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInVzZXJOYW1lIjoidXNlciIsInBhc3N3b3JkIjoidXNlciIsIm1haWwiOiJ1c2VyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDI1MjIzNDl9.J3hnJQDpjPZq8zOJ5-CIE_nyNXegDpXzaV1Z02EDBeM',
    };
  },
};
