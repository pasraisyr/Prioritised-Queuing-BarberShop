import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../base/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const BasicTopbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
<Box display="flex" justifyContent="space-between" p={2}>
  <Box display="flex" ml="auto">
    <IconButton onClick={() => alert("Radia ucuk")}>
      {
        <PersonOutlineIcon />
      }
    </IconButton>
    <IconButton onClick={toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  </Box>
</Box>


  );
};

export default BasicTopbar;
