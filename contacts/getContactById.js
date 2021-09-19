const listContacts = require("./listContacts");

const getContactById = async id => {
  const allContacts = await listContacts();
  const contactIdx = allContacts.findIndex(contact => contact.id == id);
  if (!contactIdx) return null;
  return allContacts[contactIdx];
};

module.exports = getContactById;