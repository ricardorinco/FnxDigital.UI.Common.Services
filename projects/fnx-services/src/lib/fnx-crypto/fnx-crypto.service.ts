import * as CryptoJS from 'crypto-js';

import { Injectable } from '@angular/core';

/**
 * FnxCrypto Service
 *
 * Class responsible for encrypting and decrypting the input values,
 * encrypt and decrypt using AES algorithm
 */
@Injectable({ providedIn: 'root' })
export class FnxCryptoService {
    /**
     * Encrypt a value using AES algorithm
     *
     * @param value Value to be encrypted
     * @param value Secret key used to be encrypted
     * @returns string Value encrypted
     */
    public encrypt(value: string, secretKey: string): string {
        return CryptoJS.AES.encrypt(value, secretKey).toString();
    }

    /**
     * Decrypt a value using AES algorithm
     *
     * @param value Value to be decrypted
     * @param secretKey Secret key used to be decrypted
     * @returns string Value decrypted
     */
    public decrypt(value: string, secretKey: string): string {
        return CryptoJS.AES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8);
    }
}
