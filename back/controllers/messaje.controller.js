const messajeService = require('../services/messaje.service');

exports.MessajeCreate = async (req, res) => {
  try {
    const { date, name, phone, email, messaje } = req.body;
    const messageData = { date, name, phone, email, messaje };
    const message = await messajeService.createMessage(messageData);
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
