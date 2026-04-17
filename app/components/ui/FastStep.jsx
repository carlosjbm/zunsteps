"use client";

import {
  CancelOutlined,
  ChatBubbleOutline,
  ErrorOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Divider,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { useFetch } from "@/app/lib/hooks/useFetch";

export default function FastStep(params) {
  const [errorToInput, setErrorToInput] = useState("");
  const [warning, setWarning] = useState(false);
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3000/api/errors/",
  );
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setErrorToInput(e.target.value);
  };

  const handleSearch = (target) => {
    const lowerTarget = target.toLowerCase();
    if (!data?.data) return null;

    const result = data.data.find((e) =>
      e.error.toLowerCase().includes(target),
    );

    if (result) {
      setResponse(result);
      return result;
    } else {
      return null;
    }
  };

  return (
    <Box>
      {warning && (
        <Alert color="warning" sx={{ mb: 2 }} icon={<CancelOutlined />}>
          Debe introducir algo
        </Alert>
      )}
      <Box
        sx={{
          width: "100%",
          backgroundColor: loading ? "background.antiflash" : "background.main",
          p: 0.5,
          borderRadius: 10,
          border: "1px solid",
          borderColor: loading ? "primary.text" : "primary.blue",
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Input
          value={errorToInput}
          onChange={(e) => handleChange(e)}
          sx={{ color: "primary.main", width: "70%" }}
          placeholder={
            loading ? "Espere, cargando datos..." : "Introduzca el error"
          }
          disableUnderline="true"
        />
        <IconButton
          disabled={false}
          sx={{ marginLeft: 2 }}
          onClick={() => handleSearch(errorToInput)}
        >
          <SearchOutlined
            sx={{ color: loading ? "primary.text" : "primary.blue" }}
          />
        </IconButton>
      </Box>
      <Box>
        {/* nombre del error */}
        {response && (
          <Accordion>
            <AccordionSummary>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <ErrorOutlineOutlined sx={{ color: "primary.red" }} />
                <Typography color="primary.red" fontWeight={800}>
                  {response.error}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Divider sx={{ marginBottom: 2 }} />
              {/* Detalles */}
              <Box
                sx={{
                  padding: 0.5,
                  border: "1px solid #1976d2",
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              >
                <Image
                  src={"/errors_images/chatlogo.png"}
                  alt="image"
                  width={200}
                  height={200}
                />
              </Box>
              <Typography
                color="primary.text"
                sx={{ display: "flex", gap: 1.5 }}
              >
                <ChatBubbleOutline sx={{ color: "background.green" }} />
                {response.solucion}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </Box>
  );
}
