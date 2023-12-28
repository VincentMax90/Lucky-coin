const messajeService = require('../services/messaje.service');

exports.MessajeCreate = async (req, res) => {
  try {
    const { date, name, phone, email, messaje, read } = req.body;
    const messageData = { date, name, phone, email, messaje, read };
    const message = await messajeService.createMessage(messageData);
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getAllMessages = async (req, res) => {
  try {
    const messages = await messajeService.getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.markAsRead = async (req, res) => {
  try {
    const messageId = req.params.id;
    const updatedMessage = await messajeService.markMessageAsRead(messageId);
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};