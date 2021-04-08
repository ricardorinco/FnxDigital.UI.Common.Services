# FnxCrypto Service

A service library for encrypting and decrypting values in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Installing

In your Angular project run

```typescript
npm i @fnx-commons/services
```

## Available Services

| Service                           | Documentation                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| FnxCryptoService                  | [FnxCryptoService: Getting Started](#fnxcryptoservice-getting-started)                                   |
| FnxMediaDeviceErrorHandlerService | [FnxMediaDeviceErrorHandlerService: Getting Started](#fnxmediadeviceerrorhandlerservice-getting-started) |
| FnxSessionStorageService          | [FnxSessionStorageService: Getting Started](#fnxsessionstorageservice-getting-started)                   |

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

## FnxMediaDeviceErrorHandlerService: Getting Started

After installing it you need to inject the most appropriate service in your controller

```typescript
...
import { FnxMediaDeviceErrorHandlerService } from '@fnx-commons/services';

constructor(
    ...
    private readonly fnxMediaDeviceErrorHandlerService: FnxMediaDeviceErrorHandlerService
) { }
```

then you can using your error handler

```typescript
// Your error handler
private startCapture(): void {
    this.yourCaptureService.getImagem()
        .subscribe({
            next: (image: string) => {
                ...
            },
            error: (error: any) => {
                const friendlyError = this.fnxMediaDeviceErrorHandlerService
                    .handler(erro.name);
                
                this.yourNotificacaoService.error(friendlyError);
                ...
            }
        });
}
```

## FnxSessionStorageService: Getting Started

After installing it you need to inject the most appropriate service in your controller

```typescript
...
import { FnxSessionStorageService } from '@fnx-commons/services';

constructor(
    ...
    private readonly fnxSessionStorageService: FnxSessionStorageService
) { }
```

then you can start saving your data

```typescript
// Your data
const mcflyData = { name: 'Martin Seamus McFly ', age: '17', gender: 'Male', job: 'Student' };

// Save data
this.fnxSessionStorageService.setItem(JSON.stringify(martinSeamusMcflyData), 'secretKey');

// Retrieve saved data
const savedData = JSON.parse(this.fnxSessionStorageService.getItem('secretKey'));

// Remove data
this.fnxSessionStorageService.removeItem('secretKey');
```
