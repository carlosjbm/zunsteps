"use Client";
import { Button, Box } from "@mui/material";

export const SideBtnItem = ({
  title,
  icon,
  handleModulo,
  toMark,
  modulesStatus,
}) => {
  let valueMark;

  modulesStatus.map((e) => {
    if (e.name === title) {
      valueMark = e.isMarked;
    } else return;
  });

  return (
    <Box>
      {valueMark ? (
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            width: "200px",
            gap: "10px",
            color: "primary.text",
          }}
          onClick={() => {
            handleModulo();
            toMark();
          }}
        >
          {icon}
          {title}
        </Button>
      ) : (
        <Button
          sx={{
            display: "flex",
            width: "300px",
            gap: "10px",
            color: "primary.text",
          }}
          onClick={() => {
            handleModulo();
            toMark();
          }}
        >
          {icon}
          {title}
        </Button>
      )}
    </Box>
  );
};
