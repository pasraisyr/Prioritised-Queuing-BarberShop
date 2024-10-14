import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../base/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';


const BasicTopbar = ({ showIconButton, showHomeBtn }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
<Box display="flex" justifyContent="space-between" p={2}>
  <Box display="flex" ml="auto">

{showIconButton && (
<Link component={RouterLink} to="/CustomerProfile" variant="body2">
       <IconButton >
      {
        <PersonOutlineIcon />
      }
    </IconButton>

</Link>

)}

{showHomeBtn && (
  <Link component={RouterLink} to="/dashboard-customer" variant="body2">

<IconButton>
      {
        <HomeIcon />
      }
    </IconButton>

    </Link>

)}

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
