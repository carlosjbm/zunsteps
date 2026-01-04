"use client";

import useGetResponseChatBot from "@/app/lib/hooks/useGetResponseChatBot";
import React, { useState, useRef, useEffect } from "react";
import styles from "./TestChat.module.css";

export default function TestChat() {
  const { response, isLoading, sendMessage } = useGetResponseChatBot();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const newUserMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, newUserMessage]);

    // Enviar mensaje al chatbot
    sendMessage({ message: inputValue });
    setInputValue("");
  };

  // Agregar respuesta del chatbot cuando llegue
  useEffect(() => {
    if (response && !isLoading) {
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  }, [response, isLoading]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Header */}
      <div className={styles.chatHeader}>
        <div className={styles.headerContent}>
          <h2>Zunex Core 1.2</h2>
          <p>Estoy aquí para ayudarte</p>
        </div>
        <div className={styles.statusIndicator}>
          <div className={styles.statusDot}></div>
          <span>En línea</span>
        </div>
      </div>

      {/* Messages Area */}
      <div className={styles.messagesContainer}>
        {messages.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>💬</div>
            <h3>¿En qué puedo ayudarte?</h3>
            <p>Comienza escribiendo tu pregunta</p>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            {msg.sender === "user" ? (
              <div className={styles.messageBubble}>{msg.text}</div>
            ) : (
              <div className={styles.botMessageWrapper}>
                <div className={styles.botMessageContent}>{msg.text}</div>
                <div className={styles.messageActions}>
                  <button className={styles.actionBtn} title="Me gusta">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn} title="No me gusta">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn} title="Reintentar">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 4v6h6"></path>
                      <path d="M23 20v-6h-6"></path>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>
                  </button>
                  <button className={styles.actionBtn} title="Copiar">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className={styles.message + " " + styles.botMessage}>
            <div className={styles.messageBubble}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje aquí..."
            rows="1"
            className={styles.input}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={styles.sendButton}
            title="Enviar mensaje (Enter)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className={styles.helpText}>
          Presiona <kbd>Enter</kbd> para enviar
        </p>
      </div>
    </div>
  );
}
