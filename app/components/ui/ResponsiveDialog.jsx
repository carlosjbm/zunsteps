import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import VerticalLinearStepper from "./VerticalLinearStepper";

export default function ResponsiveDialog({
  title = "Title",
  content = "content",
  importat = false,
  nAccion = "",
  rAccion = "",
  pasos = [],
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {importat ? (
        <Button
          sx={{
            backgroundColor: "background.green",
            ":hover": { backgroundColor: "background.main" },
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          {title}
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          {title}
        </Button>
      )}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{nAccion}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "20px" }}>
            {rAccion}
          </DialogContentText>
          {content}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            ok
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
