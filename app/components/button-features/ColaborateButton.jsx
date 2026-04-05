import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

//eliminar ojo
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const actions = [
  { icon: <AttachFileIcon />, name: "Compartir link" },
  { icon: <TipsAndUpdatesOutlinedIcon />, name: "Tips" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function ColaborateButton() {
  return (
    <Box
      sx={{
        height: 100,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "relative",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
