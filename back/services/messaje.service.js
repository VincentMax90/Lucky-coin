const Messaje = require("../models/Messaje.model");

async function createMessage(messageData) {
  try {
    const message = await Messaje.create(messageData);
    return message;
  } catch (error) {
    throw new Error(`Error creating message: ${error.message}`);
  }
}


async  function getAllMessages() {
  try {
    const messages = await Messaje.findAll();
    return messages;
  } catch (error) {
    throw new Error(`Error retrieving messages: ${error.message}`);
  }
}




module.exports = {
  createMessage,getAllMessages
};
