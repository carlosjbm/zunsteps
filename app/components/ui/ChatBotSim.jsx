"use client";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Chip,
  Menu,
  MenuItem,
  Stack,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  InputAdornment,
  Divider,
  Badge,
} from "@mui/material";
import { getBestResponse } from "@/app/lib/chatbotResponses";
import { SendOutlined } from "@mui/icons-material";
import { CopyAllOutlined } from "@mui/icons-material";
import { MoreVertOutlined } from "@mui/icons-material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { HistoryOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { CloseOutlined } from "@mui/icons-material";
import Image from "next/image";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const chatlogo = "/chatlogo.png";

export default function ChatBotSim({ responses }) {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [suggestions] = useState([
    "Hola",
    "No cierra el front",
    "Hablame de ti",
  ]);
  const listRef = useRef(null);

  // Cargar historial del localStorage al montar
  useEffect(() => {
    const savedHistory = localStorage.getItem("chatbotHistory");
    if (savedHistory) {
      try {
        setHistoryData(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error loading history:", e);
      }
    }
  }, []);

  // Actualizar historial filtrado cuando cambia la búsqueda
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = historyData.filter(
        (item) =>
          item.messages.some((msg) =>
            msg.text.toLowerCase().includes(searchTerm.toLowerCase())
          ) || item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHistory(filtered);
    } else {
      setFilteredHistory(historyData);
    }
  }, [searchTerm, historyData]);

  // Auto-scroll a bottom cuando hay nuevos mensajes
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [chat]);

  // Guardar chat en historial
  const saveToHistory = () => {
    if (chat.length === 0) return;

    const newHistoryItem = {
      id: Date.now(),
      title: chat[0]?.text.substring(0, 50) + "..." || "Sin título",
      messages: chat,
      timestamp: new Date().toISOString(),
    };

    const updated = [newHistoryItem, ...historyData];
    setHistoryData(updated);
    localStorage.setItem("chatbotHistory", JSON.stringify(updated));
  };

  // Limpiar historial completo
  const handleClearAllHistory = () => {
    setHistoryData([]);
    localStorage.removeItem("chatbotHistory");
    setShowHistory(false);
  };

  // Eliminar un item del historial
  const handleDeleteHistoryItem = (id) => {
    const updated = historyData.filter((item) => item.id !== id);
    setHistoryData(updated);
    localStorage.setItem("chatbotHistory", JSON.stringify(updated));
  };

  // Cargar un chat del historial
  const handleLoadFromHistory = (messages) => {
    setChat(messages);
    setShowHistory(false);
  };

  const handleSend = (text) => {
    const question = (text || input || "").trim();
    if (!question) return;
    const userMsg = {
      sender: "user",
      text: question,
      time: new Date(),
      id: Math.random(),
    };
    const answer = getBestResponse(question);
    const botMsg = {
      sender: "bot",
      text: answer,
      time: new Date(),
      id: Math.random(),
    };
    setChat((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleCopy = async (text, msgId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(msgId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };

  const handleClearChat = () => {
    saveToHistory();
    setChat([]);
    setAnchorEl(null);
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        maxWidth: 750,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        height: 600,
        borderRadius: 2,
        overflow: "hidden",
        background: `linear-gradient(135deg, ${
          theme.palette.background.paper
        } 0%, ${theme.palette.mode === "dark" ? "#1a1a2e" : "#f8f9fa"} 100%)`,
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(255,255,255,0.2)",
              border: "2px solid white",
            }}
          >
            <Image src={chatlogo} alt="ChatBot" width={40} height={40} />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              ZUNex CORE v1.2.0
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              Modelo determinista de respuestas instantáneas
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={0.5}>
          <Tooltip title={`Historial (${historyData.length})`}>
            <IconButton
              onClick={() => setShowHistory(true)}
              sx={{
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <Badge badgeContent={historyData.length} color="error">
                <HistoryOutlined fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Opciones">
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <MoreVertOutlined fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleClearChat()}>
          <AddCommentOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Nuevo chat
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleClearAllHistory()}
          disabled={historyData.length === 0}
          sx={{
            color: historyData.length > 0 ? "error.main" : "text.disabled",
          }}
        >
          <DeleteOutlineOutlined fontSize="small" sx={{ mr: 1 }} />
          Limpiar historial
        </MenuItem>
      </Menu>

      {/* Chat Messages */}
      <Box
        ref={listRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            bgcolor: theme.palette.action.hover,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: theme.palette.primary.main,
            borderRadius: "10px",
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
            },
          },
        }}
      >
        {chat.length === 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: theme.palette.primary.light,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.3,
              }}
            >
              <AddCommentOutlinedIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                ¿Cómo podemos ayudarte?
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Haz una pregunta para comenzar
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {suggestions.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  onClick={() => handleSend(s)}
                  variant="outlined"
                  sx={{
                    borderRadius: 1,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}

        <List
          disablePadding
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          {chat.map((msg) => (
            <ListItem
              key={msg.id}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                p: 0,
                mb: 0,
              }}
            >
              <Box
                sx={{
                  maxWidth: "70%",
                  bgcolor:
                    msg.sender === "user"
                      ? theme.palette.primary.main
                      : theme.palette.action.hover,
                  color:
                    msg.sender === "user"
                      ? "white"
                      : theme.palette.text.primary,
                  p: 1.5,
                  borderRadius: 2,
                  animation: "slideIn 0.3s ease-in-out",
                  "@keyframes slideIn": {
                    from: {
                      opacity: 0,
                      transform:
                        msg.sender === "user"
                          ? "translateX(20px)"
                          : "translateX(-20px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        wordBreak: "break-word",
                        fontWeight: msg.sender === "bot" ? 400 : 500,
                      }}
                    >
                      {msg.text}
                    </Typography>
                  }
                  secondary={
                    msg.sender === "bot" && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            opacity: 0.7,
                            fontSize: "0.7rem",
                          }}
                        >
                          {msg.time?.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </Typography>
                        <Tooltip
                          title={copiedId === msg.id ? "Copiado!" : "Copiar"}
                        >
                          <IconButton
                            size="small"
                            onClick={() => handleCopy(msg.text, msg.id)}
                            sx={{
                              p: 0.25,
                              opacity: copiedId === msg.id ? 1 : 0.6,
                              color:
                                copiedId === msg.id
                                  ? "success.main"
                                  : "inherit",
                              transition: "all 0.2s",
                              "&:hover": { opacity: 1 },
                            }}
                          >
                            {copiedId === msg.id ? (
                              <CheckCircleIcon fontSize="small" />
                            ) : (
                              <CopyAllOutlined fontSize="small" />
                            )}
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )
                  }
                  sx={{ m: 0 }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 2,
          bgcolor:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : "#ffffff",
          borderTop: `1px solid ${theme.palette.divider}`,
          display: "flex",
          gap: 1,
          alignItems: "flex-end",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          multiline
          maxRows={3}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: theme.palette.action.hover,
              border: `1px solid ${theme.palette.divider}`,
              transition: "all 0.2s",
              "&:hover": {
                borderColor: theme.palette.primary.light,
              },
              "&.Mui-focused": {
                borderColor: theme.palette.primary.main,
                boxShadow: `0 0 0 3px ${theme.palette.primary.light}33`,
              },
            },
          }}
        />
        <Tooltip title="Enviar (Enter)">
          <IconButton
            color="primary"
            onClick={() => handleSend()}
            disabled={!input.trim()}
            sx={{
              borderRadius: 2,
              bgcolor: theme.palette.primary.main,
              color: "white",
              transition: "all 0.2s",
              "&:hover:not(:disabled)": {
                bgcolor: theme.palette.primary.dark,
                transform: "scale(1.05)",
              },
              "&:disabled": {
                opacity: 0.5,
              },
            }}
          >
            <SendOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* History Dialog */}
      <Dialog
        open={showHistory}
        onClose={() => setShowHistory(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            backgroundImage: `linear-gradient(135deg, ${
              theme.palette.background.paper
            } 0%, ${
              theme.palette.mode === "dark" ? "#1a1a2e" : "#f8f9fa"
            } 100%)`,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Historial de Chats</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            placeholder="Buscar en el historial..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setSearchTerm("")}
                    edge="end"
                  >
                    <CloseOutlined fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              mt: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />

          {filteredHistory.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 3 }}>
              <Typography color="text.secondary" variant="body2">
                {historyData.length === 0
                  ? "No hay chats guardados"
                  : "No se encontraron resultados"}
              </Typography>
            </Box>
          ) : (
            <List
              sx={{
                maxHeight: 400,
                overflow: "auto",
                bgcolor: theme.palette.action.hover,
                borderRadius: 1,
              }}
            >
              {filteredHistory.map((item) => (
                <Box key={item.id}>
                  <ListItem
                    sx={{
                      p: 1.5,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      borderRadius: 1,
                      mb: 0.5,
                      "&:hover": {
                        bgcolor: theme.palette.primary.light + "20",
                        transform: "translateX(4px)",
                      },
                    }}
                    secondaryAction={
                      <Tooltip title="Eliminar">
                        <IconButton
                          edge="end"
                          size="small"
                          onClick={() => handleDeleteHistoryItem(item.id)}
                          sx={{ color: "error.main" }}
                        >
                          <DeleteOutlineOutlined fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    }
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, mb: 0.5 }}
                          onClick={() => handleLoadFromHistory(item.messages)}
                        >
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          onClick={() => handleLoadFromHistory(item.messages)}
                        >
                          {new Date(item.timestamp).toLocaleDateString(
                            "es-ES",
                            {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Box>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          {historyData.length > 0 && (
            <Button
              onClick={() => handleClearAllHistory()}
              variant="outlined"
              color="error"
              size="small"
              sx={{ flex: 1 }}
            >
              Limpiar todo
            </Button>
          )}
          <Button
            onClick={() => setShowHistory(false)}
            variant="contained"
            sx={{ flex: 1 }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

ChatBotSim.propTypes = {
  responses: PropTypes.object.isRequired,
};
