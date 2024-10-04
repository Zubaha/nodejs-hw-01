import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
};

addOneContact();
