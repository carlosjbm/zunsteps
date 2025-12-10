"use client";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import { getBestResponse } from "@/app/lib/chatbotResponses";
import { SendOutlined } from "@mui/icons-material";
import { CopyAllOutlined } from "@mui/icons-material";
import { PsychologyAltOutlined } from "@mui/icons-material";

export default function ChatBotSim({ responses }) {
  const [showTopics, setShowTopics] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [suggestions] = useState([
    "Hola",
    "¿Qué es renderPremium?",
    "¿Cómo contacto soporte?",
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    // auto-scroll to bottom when chat updates
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSend = (text) => {
    const question = (text || input || "").trim();
    if (!question) return;
    const userMsg = { sender: "user", text: question, time: new Date() };
    const answer = getBestResponse(question);
    const botMsg = { sender: "bot", text: answer, time: new Date() };
    setChat((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 520, mx: "auto", p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1 }}>
        <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
        <Box>
          <Typography variant="subtitle1">CB Agent v1.0.0</Typography>
          <Typography variant="caption" color="text.secondary">
            Asistente de ayuda — respuestas instantáneas
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        {chat.length > 0 && (
          <Tooltip title="Temas sugeridos">
            <IconButton
              onClick={() => {
                setShowTopics(!showTopics);
              }}
              aria-label="topics"
            >
              <PsychologyAltOutlined />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Divider />

      <Box
        ref={listRef}
        sx={{
          maxHeight: 360,
          overflowY: "auto",
          p: 2,
          bgcolor: "background.paper",
        }}
      >
        {chat.length === 0 && (
          <Box sx={{ textAlign: "center", color: "text.secondary", mb: 1 }}>
            <Typography variant="body2">
              Escribe una pregunta para recibir ayuda.
            </Typography>
            <Box
              sx={{ mt: 1, display: "flex", gap: 1, justifyContent: "center" }}
            >
              {suggestions.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  clickable
                  onClick={() => handleSend(s)}
                />
              ))}
            </Box>
          </Box>
        )}

        <List disablePadding>
          {showTopics &&
            suggestions.map((s) => (
              <Chip
                key={s}
                label={s}
                size="small"
                clickable
                onClick={() => handleSend(s)}
              />
            ))}
          {chat.map((msg, idx) => (
            <ListItem
              key={idx}
              sx={{ alignItems: "flex-start" }}
              secondaryAction={
                msg.sender === "bot" ? (
                  <IconButton edge="end" onClick={() => handleCopy(msg.text)}>
                    <CopyAllOutlined fontSize="small" />
                  </IconButton>
                ) : null
              }
            >
              {msg.sender === "bot" && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
                </ListItemAvatar>
              )}
              <ListItemText
                primary={<Typography variant="body2">{msg.text}</Typography>}
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {msg.time ? msg.time.toLocaleTimeString() : ""}
                  </Typography>
                }
                sx={{ textAlign: msg.sender === "user" ? "right" : "left" }}
              />
              {msg.sender === "user" && (
                <ListItemAvatar sx={{ ml: 1 }}>
                  <Avatar sx={{ bgcolor: "primary.main" }}>U</Avatar>
                </ListItemAvatar>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box sx={{ display: "flex", gap: 1, p: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <IconButton
          color="primary"
          onClick={() => handleSend()}
          aria-label="enviar"
        >
          <SendOutlined />
        </IconButton>
      </Box>
    </Paper>
  );
}

ChatBotSim.propTypes = {
  responses: PropTypes.object.isRequired,
};
