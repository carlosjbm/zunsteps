import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TerminalIcon from "@mui/icons-material/Terminal";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CodeSnippet from "../ui/CudeSnippet";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

import {
  clearStock,
  resetGet,
  resetPassOpes,
  prodMachete,
  claveAlmacen,
} from "@/app/lib/scipts/utils";
import { Typography } from "@mui/material";
import "../../styles/premium.css";
import Utilinks from "./Utilinks";
import { links } from "@/app/lib/links";
import BasicAccordion from "./BasicAccordion";
import useCurrentMonth from "@/app/lib/hooks/useCurrentMonth";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PremiumTabs() {
  const [value, setValue] = React.useState(0);
  const [
    currentMonth,
    allProcess,
    filtredProcess,
    isLoading,
    setFiltredProcess,
    toFiltre,
  ] = useCurrentMonth("es-ES");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tooltip title="Scripts" arrow>
            <Tab label={<TerminalIcon />} {...a11yProps(0)} />
          </Tooltip>
          <Tooltip title="Links Útiles" arrow>
            <Tab label={<LinkOutlinedIcon />} {...a11yProps(1)} />
          </Tooltip>
          <Tooltip title="Procesos" arrow>
            <Tab label={<AccountTreeOutlinedIcon />} {...a11yProps(2)} />
          </Tooltip>
          <Tooltip title="Sugerencias del Mes" arrow>
            <Tab
              label={
                <Badge
                  badgeContent={currentMonth.monthName.slice(0, 3)}
                  color="primary"
                >
                  <NotificationsActiveOutlinedIcon color="action" />
                </Badge>
              }
              {...a11yProps(3)}
            />
          </Tooltip>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Scripts Utilitarios
        </Typography>
        <Box className="copy-section">
          <CodeSnippet
            name={resetGet.name}
            code={resetGet.code}
            description={resetGet.description}
          />
          <CodeSnippet
            name={clearStock.name}
            description={clearStock.description}
            code={clearStock.code}
          />
          <CodeSnippet
            name={resetPassOpes.name}
            description={resetPassOpes.description}
            code={resetPassOpes.code}
          />
          <CodeSnippet
            name={prodMachete.name}
            description={prodMachete.description}
            code={prodMachete.code}
          />
          <CodeSnippet
            name={claveAlmacen.name}
            description={claveAlmacen.description}
            code={claveAlmacen.code}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Links Utilitarios
        </Typography>
        <Utilinks links={links} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Procesos
        </Typography>
        <Box className="process-box">
          <BasicAccordion items={allProcess} isLoading={isLoading} />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" sx={{ margin: "2%" }} gutterBottom>
          Sugerencias para el mes de {currentMonth.monthName}
          {`(${currentMonth.monthName.slice(0, 3)})`}
        </Typography>
        <Box>
          <BasicAccordion items={filtredProcess} isLoading={isLoading} />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
