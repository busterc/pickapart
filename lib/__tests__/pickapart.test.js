import pickapart from '../';

const person = {
  name: 'doe',
  contact: {
    phones: {
      mobile: '888-555-1212',
      home: '999-555-1212',
      burner: '555-555-1212'
    },
    emails: {
      personal: 'doe@localhost',
      work: 'doe.work@localhost'
    }
  }
};

const people = ['alice', 'bob', 'chuck', 'doug'];

describe('pickapart', () => {
  it('top level property', () => {
    let [name, newPerson] = pickapart('name', person);
    expect(name).toBe('doe');
    expect(person.name).toBe('doe');
    expect(newPerson.name).toBeUndefined();
  });

  it('nested property', () => {
    let [phones, newPerson] = pickapart('contact.phones', person);
    expect(Object.keys(phones)).toHaveLength(3);
    expect(Object.keys(person.contact.phones)).toHaveLength(3);
    expect(newPerson.contact.phones).toBeUndefined();
  });

  it('multiple properties', () => {
    let [phones, emails, newPerson] = pickapart(
      ['contact.phones', 'contact.emails'],
      person
    );
    expect(Object.keys(phones)).toHaveLength(3);
    expect(Object.keys(person.contact.phones)).toHaveLength(3);
    expect(newPerson.contact.phones).toBeUndefined();

    expect(Object.keys(emails)).toHaveLength(2);
    expect(Object.keys(person.contact.emails)).toHaveLength(2);
    expect(newPerson.contact.emails).toBeUndefined();
  });

  it('arrays without paths', () => {
    let [first, second, ...others] = pickapart(people);
    expect(first).toBe('alice');
    expect(second).toBe('bob');
    expect(others).toHaveLength(2);
  });

  it('arrays with specific paths', () => {
    let [second, first, others] = pickapart(['[1]', '[0]'], people);
    expect(second).toBe('bob');
    expect(first).toBe('alice');
    expect(others).toHaveLength(2);
    let [doug] = pickapart('[3]', people);
    expect(doug).toBe('doug');
  });

  it('returns undefined', () => {
    let [phones] = pickapart('phones', person);
    expect(phones).toBeUndefined();
  });
});
