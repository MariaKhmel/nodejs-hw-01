import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        for (let i = 0; i <= number; i += 1) {
            contacts.push(createFakeContact());
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error) {
        console.log(error);
    }

};

await generateContacts(5);


