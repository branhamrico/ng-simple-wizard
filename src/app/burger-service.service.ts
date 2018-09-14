import { Injectable } from '@angular/core';

@Injectable()
export class BurgerServiceService {

  constructor() { }

  submitOrder(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ status: 200, message: 'Thanks for ordering!!!'}), 3000);
    });
  }
}
