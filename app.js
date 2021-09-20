const colors = require("colors");
const { program } = require("commander");
const asyncHandler = require("./utils/asyncHandler");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

console.log("It's OK".bold.yellow);

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await asyncHandler(listContacts());
      console.table(contacts);
      break;

    case "get":
      const contact = await asyncHandler(getContactById(id));
      if (!contact) {
        throw new Error(`Such contact with id=${id} doesn't exist`.red);
      }
      console.log(contact);
      // try {
      //   const contact = await getContactById(id);
      // if (!contact) {
      //   throw new Error(`Such contact with id=${id} doesn't exist`);
      // }
      //   console.log(contact);
      // } catch (error) {
      //   console.log(error.message.orange);
      // }
      break;

    case "add":
      const newContact = await asyncHandler(addContact({ name, email, phone }));
      console.log("New contact was added".yellow, newContact);
      // try {
      //   const newContact = await addContact({ name, email, phone });
      //   console.log(newContact);
      // } catch (error) {
      //   console.log(error.message.orange);
      // }
      break;

    case "remove":
      const contactToDel = await asyncHandler(removeContact(id));
      if (!contactToDel) {
        throw new Error(`Such contact ${contactToDel} doesn't exist`);
      }
      console.log(`Contact with id=${id} was removed`.green);
      // try {
      //   const contact = await removeContact(id);
      // if (!contact) {
      //   throw new Error(`Such contact ${contact} doesn't exist`);
      // }
      // console.log(`Contact with id=${id} was removed`);
      // } catch (error) {
      //   console.log(error.message.orange);
      // }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
