import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CodeIcon from "@mui/icons-material/Code";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import "./MuiNav.css";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      className="MuiNav"
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Fib Buzz"
        value="Fib Buzz"
        icon={<DisplaySettingsIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/info"
        label="Code"
        value="Code"
        icon={<CodeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/about"
        label="About"
        value="About"
        icon={<AccountBoxIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/recursive"
        label="Recursive"
        value="Recursive"
        icon={<PsychologyIcon />}
      />
    </BottomNavigation>
  );
}
