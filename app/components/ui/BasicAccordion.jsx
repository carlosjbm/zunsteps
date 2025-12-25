import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ResponsiveDialog from "./ResponsiveDialog";
import VerticalLinearStepper from "./VerticalLinearStepper";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { process } from "@/app/lib/process";
import Switch from "@mui/material/Switch";
import useCurrentMonth from "@/app/lib/hooks/useCurrentMonth";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function BasicAccordion({ items, isLoading }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {isLoading ? (
        <Box>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ) : (
        items.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="span">{item.title}</Typography>
              <Box sx={{ flexGrow: 0.5 }}>
                <Typography
                  component="span"
                  sx={{ marginLeft: "5%", color: "primary.text" }}
                >
                  mes uso:
                </Typography>
                <Typography
                  component="span"
                  sx={{ marginLeft: "5%", color: "background.green" }}
                >
                  {item.month}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
              <Box sx={{ marginTop: "5%" }}>
                <ResponsiveDialog
                  title="Ver Pasos"
                  nAccion="Pasos del Proceso"
                  content={<VerticalLinearStepper steps={item.steps} />}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
      <br />
    </div>
  );
}
