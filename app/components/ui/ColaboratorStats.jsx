"use client";

import { VerifiedOutlined } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Box, Card, LinearProgress, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import { LightbulbOutline } from "@mui/icons-material";
import { FavoriteOutlined } from "@mui/icons-material";

export const ColaboratorStats = ({
  userName = "Carlos",
  tipsNumber = 3,
  likesNumber = 3,
  porcent = 75,
}) => {
  return (
    <Card sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            padding: "7px",
            backgroundColor: "background.antiflash",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Person />
          <Typography variant="body1" fontSize={20} color="primary.main">
            {userName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            color: "primary.text",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 0.2,
              alignItems: "center",
              color: "background.green",
            }}
          >
            <LocalFireDepartmentIcon />
            {tipsNumber}
          </Box>
          <Box
            sx={{
              color: "primary.red",
              display: "flex",
              gap: 0.2,
              alignItems: "center",
            }}
          >
            <FavoriteOutlined />
            {likesNumber}
          </Box>
        </Box>
      </Box>

      <Typography color="primary.text">
        autor del: {porcent}% de los tips
      </Typography>
      <LinearProgress variant="determinate" value={porcent} />
    </Card>
  );
};
