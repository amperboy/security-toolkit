import {Injectable} from '@angular/core';

@Injectable()
export class RandomStringService {

  constructor() {}

  public generateRandomString(possibleSigns: string, length: number): string {
    let randomString = '';

    for (let i = 0; i < length; i++) {
      randomString += possibleSigns.charAt(Math.floor(Math.random() * possibleSigns.length));
    }

    return randomString;
  }

}
