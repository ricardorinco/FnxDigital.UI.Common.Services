import { Injectable } from '@angular/core';

/**
 * FnxSessionStorage Service
 *
 * Class responsible for storing the data into browser's session storage
 */
@Injectable({ providedIn: 'root' })
export class FnxSessionStorageService {
    /**
     * Sets the value of the pair identified by key to value, creating
     * a new key/value pair if none exists for key previously
     *
     * @param key Identification key
     * @param data Data for storage
     */
    public setItem(key: string, data: any): void {
        sessionStorage.setItem(key, data);
    }

    /**
     * Returns the current value associated with the given key, or undefined
     * if the given key does not exist in the list associated with the object
     *
     * @param key Identification key
     * @returns string Retrieved data
     */
    public getItem(key: string): string {
        return sessionStorage.getItem(key);
    }

    /**
     * Removes the key/value pair with the given key from the list associated
     * with the object, if a key/value pair with the given key exists
     *
     * @param key Identification key
     */
    public removeItem(key: string): void {
        sessionStorage.removeItem(key);
    }
}
