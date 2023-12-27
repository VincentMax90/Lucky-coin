const Messaje = require("../models/Messaje.model");

async function createMessage(messageData) {
  try {
    const message = await Messaje.create(messageData);
    return message;
  } catch (error) {
    throw new Error(`Error creating message: ${error.message}`);
  }
}

module.exports = {
  createMessage,
};
