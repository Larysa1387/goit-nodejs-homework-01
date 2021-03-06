const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const listContacts = require("./listContacts");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

const addContact = async data => {
  const allContacts = await listContacts();
  const newContact = { id: v4(), ...data };
  const updateContacts = [...allContacts, newContact];
  fs.writeFile(contactsPath, JSON.stringify(updateContacts));
  return newContact;
};

module.exports = addContact;
