const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

const removeContact = async id => {
  const allContacts = await listContacts();
  const deleteContactIdx = allContacts.findIndex(
    contact => contact.id === Number(id)
  );
  if (deleteContactIdx === -1) return null;
  // allContacts.splice(deleteContactIdx, 1);
  const newContacts = allContacts.filter(contact => contact.id != id);
  // await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return true;
};

module.exports = removeContact;
