import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { Favorite } from "@mui/icons-material";

export const PageLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper>
      <Box>
        <Outlet />
      </Box>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<Favorite />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<Favorite />} />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};