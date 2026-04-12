import { PeopleOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const HeaderMotivator = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.antiflash",
        borderRadius: 2,
        padding: 3,
        marginBottom: 3,
        textAlign: "center",
        borderLeft: "4px solid",
        borderColor: "background.green",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <PeopleOutline
          sx={{ fontSize: 40, color: "background.green", mr: 1 }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "primary.main",
          marginBottom: 1,
        }}
      >
        ¡Comparte tu conocimiento!
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "primary.text", fontSize: "0.95rem" }}
      >
        Tu experiencia puede ayudar a otros a crecer. Juntos construimos una
        comunidad más fuerte.
      </Typography>
    </Box>
  );
};
