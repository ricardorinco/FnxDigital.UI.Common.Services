import * as faker from 'faker/locale/pt_BR';

import { PersonData } from './../models/person-data.model';

/**
 * Mock Data of Person
 */
export class PersonDataMock {
    /**
     * Create a mock valid with person data
     *
     * @returns Person data
     */
    public static valid(): PersonData {
        return {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            age: faker.datatype.number(99),
            gender: faker.name.gender(),
            job: faker.name.jobTitle()
        };
    }
}
