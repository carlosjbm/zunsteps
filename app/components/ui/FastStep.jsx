"use client";

import {
  CancelOutlined,
  ChatBubbleOutline,
  ErrorOutlineOutlined,
  Light,
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
import { WaitingCircular } from "../reusables/WaitingData";

export default function FastStep(params) {
  const [errorToInput, setErrorToInput] = useState("");
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setErrorToInput(e.target.value);
    console.log(errorToInput);
  };

  return (
    <Box>
      {warning && (
        <Alert color="warning" sx={{ mb: 2 }} icon={<CancelOutlined />}>
          Debe introducir algo
        </Alert>
      )}

      <Alert sx={{ mb: 2 }} icon={<Light />}>
        <Typography>
          Espera unos segundos mientras se cargan los datos, puedes pegar parte
          del error para buscar por respuestas rapidas.
        </Typography>
      </Alert>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "background.antiflash",
          p: 0.5,
          borderRadius: 10,
          border: "1px solid #1976d2",
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Input
          value={errorToInput}
          onChange={(e) => handleChange(e)}
          sx={{ color: "primary.main", width: "70%" }}
          placeholder="Segmento del error"
          disableUnderline="true"
        />
        <IconButton
          disabled={false}
          sx={{ marginLeft: 2 }}
          onClick={() => console.log("Cliked search button ...")}
        >
          <SearchOutlined sx={{ color: "primary.blue" }} />
        </IconButton>
      </Box>
      <Box>
        {/* spiner */}
        <WaitingCircular />
        {/* nombre del error */}
        <Accordion>
          <AccordionSummary>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <ErrorOutlineOutlined sx={{ color: "primary.red" }} />
              <Typography fontWeight={800}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Divider sx={{ marginBottom: 2 }} />
            {/* Detalles */}
            <Typography color="primary.text" sx={{ display: "flex", gap: 1.5 }}>
              <ChatBubbleOutline sx={{ color: "background.green" }} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              tempora temporibus vitae aspernatur iure blanditiis, aperiam minus
              tenetur asperiores quaerat culpa! Aliquam totam pariatur sapiente
              illo, libero rem exercitationem nisi.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
