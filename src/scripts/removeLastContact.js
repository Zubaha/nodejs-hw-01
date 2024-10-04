import { readContacts, writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const contacts = await readContacts();
    if (contacts.length > 0) {
        contacts.pop();
        await writeContacts(contacts);
    }
};

removeLastContact();
