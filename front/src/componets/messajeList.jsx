import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [showNew, setShowNew] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/messaje/all"
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const filteredMessages = showNew === null
    ? messages
    : showNew
    ? messages.filter((message) => !message.read)
    : messages.filter((message) => message.read);

  const markAsRead = async (messageId) => {
    try {
      await axios.put(`http://localhost:3001/api/messaje/${messageId}/markAsRead`);

      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error al marcar el mensaje como leído:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Mensajes</h2>
      <div className="buttonContainer">
        <button onClick={() => setShowNew(null)}>Todos</button>
        <button onClick={() => setShowNew(true)}>Nuevos</button>
        <button onClick={() => setShowNew(false)}>Viejos</button>
      </div>
      {filteredMessages.map((message) => (
        <div key={message.id} className="listMessaje">
          <div className="dateMessaje">
            <p>
              <strong className="name">Fecha:</strong> {message.date}
            </p>
            <p>
              <strong className="name">Nombre:</strong> {message.name}
            </p>
            <p>
              <strong className="name">Telefono:</strong> {message.phone}
            </p>
            <p>
              <strong className="name">Email:</strong> {message.email}
            </p>
          </div>
          <div className="messaje">
            <p>
              <strong className="name">Mensaje:</strong> <br></br>
              {message.messaje} <br></br>
              <strong className="name">Leido:</strong>{" "}
              {message.read === true ? "leído" : "no leído"}
            </p>
          </div>
          <div className="buttonsContainer">
            {/* Botón "Marcar como Leído" para mensajes no leídos */}
            {!message.read && (
              <button onClick={() => markAsRead(message.id)}>
                Marcar como Leído
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
