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
import Image from "next/image";
import AlarmIcon from "@mui/icons-material/Alarm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AutoDeleteOutlinedIcon from "@mui/icons-material/AutoDeleteOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

const chatlogo = "/chatlogo.png";

const hoverLogoStyle = {
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    width: 36,
    height: 36,
  },
};

export default function ChatBotSim({ responses }) {
  const [showTopics, setShowTopics] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [suggestions] = useState([
    "Hola",
    "No cierra el front",
    "Hablame de ti",
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
    <Paper elevation={3} sx={{ width: 700, mx: "auto", p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1 }}>
        <Avatar sx={{ bgcolor: "primary.main", width: 72, height: 72 }}>
          <Image src={chatlogo} alt="ChatBot" width={72} height={72} />
        </Avatar>
        <Box>
          <Typography variant="subtitle1">ZUNex Core v1.2.0</Typography>
          <Typography variant="caption" color="text.secondary">
            Asistente de ayuda — respuestas instantáneas
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: 10,
            display: "flex",
            gap: "20px",
            padding: 1,
            borderRadius: 8,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Tooltip title="Historial de chats">
            <IconButton color="primary" aria-label="history chats">
              <AccessTimeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Nuevo Chat">
            <IconButton color="primary" aria-label="add comment">
              <AddCommentOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Borrar Historial">
            <IconButton color="primary" aria-label="delete conversation">
              <AutoDeleteOutlinedIcon />
            </IconButton>
          </Tooltip>
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
          {chat.map((msg, idx) => (
            <ListItem
              key={idx}
              sx={{ display: "flex" }}
              // secondaryAction={
              //   msg.sender === "bot" ? (
              //     // <IconButton edge="end" onClick={() => handleCopy(msg.text)}>
              //     //   <CopyAllOutlined fontSize="small" />
              //     // </IconButton>
              //   ) : null
              // }
            >
              {/* {msg.sender === "bot" && (
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>ZX</Avatar>
                </ListItemAvatar>
              )} */}
              <ListItemText
                primary={<Typography variant="body2">{msg.text}</Typography>}
                secondary={
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {msg.sender === "bot" && (
                      <IconButton
                        edge="end"
                        onClick={() => handleCopy(msg.text)}
                      >
                        <CopyAllOutlined fontSize="small" />
                      </IconButton>
                    )}
                    <Typography variant="caption" color="text.secondary">
                      {msg.time ? msg.time.toLocaleTimeString() : ""}
                    </Typography>
                  </Box>
                }
                sx={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  color: msg.sender === "user" ? "primary.blue" : "primary",
                }}
              />
              {/* {msg.sender === "user" && (
                <ListItemAvatar sx={{ ml: 1 }}>
                  <Avatar sx={{ bgcolor: "primary.main" }}>U</Avatar>
                </ListItemAvatar>
              )} */}
            </ListItem>
          ))}
        </List>
        {showTopics && (
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
        )}
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
