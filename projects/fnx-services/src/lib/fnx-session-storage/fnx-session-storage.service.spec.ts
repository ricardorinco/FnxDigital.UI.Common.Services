import * as faker from 'faker/locale/pt_BR';

import { TestBed } from '@angular/core/testing';

import { FnxSessionStorageService } from './fnx-session-storage.service';

import { PersonData } from './../shared/models/person-data.model';
import { PersonDataMock } from '../shared/mocks/person-data.mock';

describe('FnxSessionStorageService', () => {
    const secretKey = faker.git.shortSha();

    let fnxSessionStorageService: FnxSessionStorageService;

    let personData: PersonData;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        fnxSessionStorageService = TestBed.inject(FnxSessionStorageService);

        personData = PersonDataMock.valid();
    });

    describe('Constructor:', () => {
        it('should create a instance', () => {
            expect(fnxSessionStorageService).toBeTruthy();
        });
    });

    describe('Methods:', () => {
        it('should create a new key with data into session storage', () => {
            spyOn(fnxSessionStorageService, 'setItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            fnxSessionStorageService.setItem(secretKey, JSON.stringify(personData));
            const savedData = JSON.parse(fnxSessionStorageService.getItem(secretKey));

            expect(fnxSessionStorageService.setItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(savedData).toEqual(personData);
            expect(savedData).not.toBe(personData);
        });

        it('should update the data in an existing key in session storage', () => {
            spyOn(fnxSessionStorageService, 'setItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            const martyMcfly: PersonData = JSON.parse(fnxSessionStorageService.getItem(secretKey));
            martyMcfly.name = 'Marty McFly';

            fnxSessionStorageService.setItem(secretKey, JSON.stringify(martyMcfly));
            const savedData = JSON.parse(fnxSessionStorageService.getItem(secretKey));

            expect(fnxSessionStorageService.setItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(2);
            expect(savedData).not.toEqual(personData);
            expect(savedData).not.toBe(martyMcfly);
            expect(savedData).toEqual(martyMcfly);
        });

        it('should try retrieve data with non existing key in session storage and return undefined', () => {
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            const nullData = fnxSessionStorageService.getItem('secretKey2');

            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(nullData).toBeNull();
        });

        it('should remove a key in session storage', () => {
            spyOn(fnxSessionStorageService, 'removeItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            fnxSessionStorageService.removeItem(secretKey);
            const nullData = fnxSessionStorageService.getItem(secretKey);

            expect(fnxSessionStorageService.removeItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(nullData).toBeNull();
        });
    });
});
