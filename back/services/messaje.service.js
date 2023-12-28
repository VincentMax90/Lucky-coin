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


async function markMessageAsRead(messageId) {
  try {
    const message = await Messaje.findByPk(messageId);
    if (!message) {
      throw new Error("Message not found");
    }

    message.read = true;
    await message.save();

    return message;
  } catch (error) {
    throw new Error(`Error marking message as read: ${error.message}`);
  }
}




module.exports = {
  createMessage,getAllMessages ,markMessageAsRead
};
