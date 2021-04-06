# FnxCrypto Service

A service library for encrypting and decrypting values in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Installing

In your Angular project run

```typescript
npm i @fnx-commons/services
```

## Available Services

| Service          | Documentation                                                           |
| ---------------- | ----------------------------------------------------------------------- |
| FnxCryptoService | [FnxCryptoService: Getting Started](#fnxcryptoservice-getting-started)  |

## FnxCryptoService: Getting Started

After installing it, you need to configure the crypto-js dependence in angular.json file

```typescript
    ...
    "projects": {
        "fnx-app": {
            ...
            "architect": {
                "build": {
                    ...
                    "options": {
                        "allowedCommonJsDependencies": ["crypto-js"],
                        ...
                        "scripts": ["node_modules/crypto-js/crypto-js.js"]
                    }
                    ...
                },
                ...
                "test": {
                    ...
                    "options": {
                        "scripts": ["node_modules/crypto-js/crypto-js.js"]
                    }
                    ...
                }
            }
        }
    }
    ...
```

and configure the crypto-js dependence in package.json file

```typescript
    ...
    "browser": {
        "crypto": false
    }
```

after configured, you need to inject the FnxCryptoService in your controller

```typescript
import { FnxCryptoService } from '@fnx-commons/services';

constructor(
    ...
    private readonly fnxCryptoService: FnxCryptoService
) { }
```

then you can start encrypting and decrypting your values

```typescript
// Your secret key
const secretKey = 'lANQBCf8TdBWhMHJm-IBlQ';

// Encrypt value
const encryptedValue = this.fnxCryptoService.encrypt(`Roads? Where We're Going We Don't Need Roads`, secretKey);

// Decrypted value
const encryptedValue = 'U2FsdGVkX1+HPC4KY6T9tY5dFnqc9sEVcuTXizTEfdZzdZsOq9d708EzDT0SDtepcExTy3N3BeBxaf8YpQe1Kw==';
const decryptedValue = this.fnxCryptoService.decrypt(encryptedValue, secretKey);
```
