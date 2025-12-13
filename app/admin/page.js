"use client";

import { Box, Card, Typography } from "@mui/material";

import "../styles/admin.css";
import TextField from "@mui/material/TextField";
import { DefaultButton } from "../components/ui/DefaultButton";
import { WhiteMiddButton } from "../components/ui/WhiteMiddButton";
import IconButton from "@mui/material/IconButton";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState, useContext } from "react";
import Link from "next/link";
import { validateKey } from "../lib/validate";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Admin = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [keys, setKeys] = useState();
  //const { renderPremium, activatePremium } = useContext(PremiumContext);
  //capturo la key introducida desde el input
  const handleChange = (event) => {
    setKeys(event.target.value);
  };
  return (
    <Box className="box-admin">
      <Card className="card-admin">
        <Box className="box-txt">
          <Box className="box-h5">
            <Typography color="primary" variant="h4" fontFamily={"monospace"}>
              Área Premium
            </Typography>
          </Box>
          <Box className="box-info-txt">
            <Typography color="primary.text">
              Para poder acceder a las funciones Premium optén la clave!
            </Typography>
          </Box>
          <Box className="box-input">
            <TextField
              id="outlined-basic"
              label="Clave Premium"
              variant="outlined"
              onChange={handleChange}
            />
            {validateKey(keys) && (
              <VerifiedIcon sx={{ mr: 1, color: "primary.blue" }} />
            )}
          </Box>
        </Box>
        <Box className="box-buttons">
          <Link href={"/"}>
            <WhiteMiddButton icon={<HomeOutlinedIcon />} text={"Home"} />
          </Link>
          {validateKey(keys) ? (
            <Link href={"/zunsteps/premium"}>
              <DefaultButton
                text={"Acceder"}
                onClick={() => activatePremium()}
              />
            </Link>
          ) : (
            console.log("Key no valida") //acordarme que tengo que poner una alerta o algo
          )}
        </Box>
        <Box className="box-info">
          <IconButton aria-label="info" onClick={() => setShowInfo(!showInfo)}>
            <InfoOutlineIcon color="primary" />
          </IconButton>

          {showInfo && (
            <Box className="box-info-txt">
              <Typography color="primary.text">
                Para optener la clave de Administrador, escribe un correo a:{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    ":hover": {
                      textDecoration: "underline",
                      color: "background.green",
                    },
                  }}
                >
                  <Link href={"mailto:carlosjbm11780@gmail.com"}>
                    carlosjbm11780@gmail.com
                  </Link>
                </Box>
              </Typography>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};
export default Admin;
