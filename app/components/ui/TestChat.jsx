"use client";

import useGetResponseChatBot from "@/app/lib/hooks/useGetResponseChatBot";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Paper,
  Box,
  TextField,
  IconButton,
  Typography,
  Stack,
  Chip,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./TestChat.module.css";

export default function TestChat() {
  const { response, isLoading, sendMessage } = useGetResponseChatBot();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedMessages, setDisplayedMessages] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const typingTimerRef = useRef(null);
  const displayedMessagesRef = useRef({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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
        isTyping: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      // Activar efecto de escritura para este mensaje
      displayedMessagesRef.current[botMessage.id] = "";
      startTypingEffect(botMessage.id, response);
    }
  }, [response, isLoading]);

  const startTypingEffect = useCallback((messageId, fullText) => {
    // Dividir el texto en fragmentos grandes (por párrafos o líneas)
    const chunks = fullText
      .split("\n")
      .filter((line) => line.trim().length > 0);

    // Si no hay saltos de línea, dividir en fragmentos de ~100 caracteres
    const textChunks =
      chunks.length > 1
        ? chunks
        : fullText.match(/.{1,100}(?:\s|$)/g) || [fullText];

    let chunkIndex = 0;

    const showNextChunk = () => {
      if (chunkIndex < textChunks.length) {
        const chunk = textChunks[chunkIndex];
        const currentText = displayedMessagesRef.current[messageId] || "";
        const nextText =
          currentText +
          (chunkIndex > 0 && chunks.length > 1 ? "\n" : "") +
          chunk;

        displayedMessagesRef.current[messageId] = nextText;
        setDisplayedMessages({ ...displayedMessagesRef.current });

        chunkIndex++;

        // Delay progresivo: comienza en 40ms y baja a 5ms
        const progress = chunkIndex / textChunks.length;
        const delay = Math.max(5, 40 * Math.pow(1 - progress, 2));

        typingTimerRef.current = setTimeout(showNextChunk, delay);
      } else {
        // Completar el mensaje
        displayedMessagesRef.current[messageId] = fullText;
        setDisplayedMessages({ ...displayedMessagesRef.current });

        setMessages((prev) =>
          prev.map((m) => (m.id === messageId ? { ...m, isTyping: false } : m))
        );
      }
    };

    // Limpiar timer anterior
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    showNextChunk();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopyMessage = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Limpiar timer al desmontar
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: "900px" },
        margin: "0 auto",
        borderRadius: { xs: 1, sm: 2, md: 2 },
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          padding: { xs: "12px 16px", sm: "16px 20px", md: "20px 24px" },
          background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ fontWeight: 600, m: 0 }}
          >
            Zunex Core 1.2
          </Typography>
          {!isMobile && (
            <Typography
              variant="caption"
              sx={{ opacity: 0.9, display: "block", mt: 0.5 }}
            >
              Estoy aquí para ayudarte
            </Typography>
          )}
        </Box>
        {!isMobile && (
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#33d2a4",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                },
              }}
            />
            <Typography variant="caption">En línea</Typography>
          </Stack>
        )}
      </Box>

      {/* Messages Container */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: { xs: "12px", sm: "16px", md: "24px" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5, md: 2 },
          backgroundColor: "#fafafa",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#e0e0e0",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#c0c0c0",
          },
        }}
      >
        {/* Empty State */}
        {messages.length === 0 && !isLoading && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              py: 4,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "40px", sm: "48px", md: "56px" },
                mb: 2,
                animation: "float 3s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            >
              💬
            </Box>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ color: "text.primary", mb: 1 }}
            >
              ¿En qué puedo ayudarte?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Comienza escribiendo tu pregunta
            </Typography>
          </Box>
        )}

        {/* Messages */}
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              animation: "slideIn 0.3s ease-out",
              "@keyframes slideIn": {
                from: { opacity: 0, transform: "translateY(10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            {msg.sender === "user" ? (
              <Paper
                sx={{
                  maxWidth: { xs: "85%", sm: "75%", md: "70%" },
                  padding: { xs: "8px 12px", sm: "10px 14px", md: "12px 16px" },
                  borderRadius: {
                    xs: "12px 4px 12px 12px",
                    sm: "14px 4px 14px 14px",
                    md: "18px 4px 18px 18px",
                  },
                  background: "#2c3e50",
                  color: "white",
                  wordWrap: "break-word",
                  lineHeight: 1.5,
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
                  elevation: 1,
                }}
              >
                <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                  {msg.text}
                </Typography>
              </Paper>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Paper
                  sx={{
                    maxWidth: { xs: "95%", sm: "85%", md: "80%" },
                    padding: {
                      xs: "10px 14px",
                      sm: "14px 18px",
                      md: "16px 24px",
                    },
                    borderRadius: 2,
                    background: "white",
                    borderLeft: "4px solid #33d2a4",
                    wordWrap: "break-word",
                    lineHeight: 1.6,
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                    color: "text.primary",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                    elevation: 1,
                  }}
                >
                  <Typography
                    component="pre"
                    variant="body2"
                    sx={{
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      fontFamily: "inherit",
                      m: 0,
                    }}
                  >
                    {displayedMessages[msg.id] !== undefined
                      ? displayedMessages[msg.id]
                      : msg.text}
                  </Typography>
                </Paper>

                {/* Message Actions */}
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{
                    pl: { xs: 0, sm: 0, md: 3 },
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Tooltip title="Me gusta">
                    <IconButton
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        color: "text.secondary",
                        borderColor: "divider",

                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#33d2a4",
                          color: "#33d2a4",
                          backgroundColor: "rgba(51, 210, 164, 0.05)",
                        },
                        padding: { xs: "6px", sm: "8px" },
                      }}
                    >
                      <ThumbUpOffAltIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="No me gusta">
                    <IconButton
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        color: "text.secondary",

                        borderColor: "divider",

                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#33d2a4",
                          color: "#33d2a4",
                          backgroundColor: "rgba(51, 210, 164, 0.05)",
                        },
                        padding: { xs: "6px", sm: "8px" },
                      }}
                    >
                      <ThumbDownOffAltIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Reintentar">
                    <IconButton
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        color: "text.secondary",

                        borderColor: "divider",

                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#33d2a4",
                          color: "#33d2a4",
                          backgroundColor: "rgba(51, 210, 164, 0.05)",
                        },
                        padding: { xs: "6px", sm: "8px" },
                      }}
                    >
                      <RefreshIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title={copiedId === msg.id ? "¡Copiado!" : "Copiar"}>
                    <IconButton
                      size={isMobile ? "small" : "medium"}
                      onClick={() =>
                        handleCopyMessage(
                          displayedMessages[msg.id] || msg.text,
                          msg.id
                        )
                      }
                      sx={{
                        color:
                          copiedId === msg.id ? "#33d2a4" : "text.secondary",
                        transition: "all 0.2s ease",
                        backgroundColor:
                          copiedId === msg.id
                            ? "rgba(51, 210, 164, 0.05)"
                            : "transparent",
                        "&:hover": {
                          borderColor: "#33d2a4",
                          color: "#33d2a4",
                          backgroundColor: "rgba(51, 210, 164, 0.05)",
                        },
                        padding: { xs: "6px", sm: "8px" },
                      }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            )}
          </Box>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              animation: "slideIn 0.3s ease-out",
            }}
          >
            <Paper
              sx={{
                padding: { xs: "8px 12px", sm: "10px 14px", md: "12px 16px" },
                borderRadius: 2,
                background: "white",
                borderLeft: "4px solid #33d2a4",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircularProgress
                size={isMobile ? 20 : 24}
                sx={{ color: "#33d2a4" }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Pensando...
              </Typography>
            </Paper>
          </Box>
        )}

        <Box ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          padding: {
            xs: "12px 12px 16px",
            sm: "16px 16px 20px",
            md: "16px 24px 24px",
          },
          backgroundColor: "white",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={1}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-end"
            sx={{
              alignItems: "center",
              gap: { xs: "6px", sm: "8px", md: "8px" },
            }}
          >
            <TextField
              fullWidth
              multiline
              maxRows={4}
              minRows={1}
              placeholder="Escribe tu mensaje aquí..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: { xs: 2, sm: 2, md: 3 },
                  backgroundColor: "#f5f5f5",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "white",
                    boxShadow: "0 0 0 3px rgba(51, 210, 164, 0.1)",
                    "& fieldset": {
                      borderColor: "#33d2a4 !important",
                    },
                  },
                },
                "& .MuiOutlinedInput-input": {
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  padding: { xs: "8px 12px", sm: "10px 14px", md: "12px 16px" },
                  fontFamily: "inherit",
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "text.secondary",
                  opacity: 0.7,
                },
              }}
            />
            <Tooltip
              title={
                isLoading || !inputValue.trim()
                  ? "Escriba algo para enviar"
                  : "Enviar (Enter)"
              }
            >
              <span>
                <IconButton
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  sx={{
                    background: "#33d2a4",
                    color: "white",
                    borderRadius: "50%",
                    width: { xs: 36, sm: 40, md: 44 },
                    height: { xs: 36, sm: 40, md: 44 },
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    "&:hover:not(:disabled)": {
                      transform: "scale(1.1)",
                      boxShadow: "0 8px 20px rgba(51, 210, 164, 0.4)",
                      background: "#2cb895",
                    },
                    "&:active:not(:disabled)": {
                      transform: "scale(0.95)",
                    },
                    "&:disabled": {
                      opacity: 0.5,
                      cursor: "not-allowed",
                    },
                  }}
                >
                  <SendIcon fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              </span>
            </Tooltip>
          </Stack>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: { xs: "11px", sm: "12px", md: "12px" },
            }}
          >
            Presiona{" "}
            <Chip
              label="Enter"
              size="small"
              variant="outlined"
              sx={{
                height: "18px",
                fontSize: "10px",
                fontFamily: "monospace",
              }}
            />
            {" para enviar"}
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
