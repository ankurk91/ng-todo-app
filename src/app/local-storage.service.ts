import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public fetch(key, defaultValue = null) {
    const storedValue = this.storage.getItem(key);

    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        console.error(e);
        return storedValue;
      }
    }

    return defaultValue;
  }

  public save(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) /*istanbul ignore next*/ {
      console.error(e);
      return false;

    }
  }
}
