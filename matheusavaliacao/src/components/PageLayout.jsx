import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
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
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Recents"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"/sobre"}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"/sobre"}
          />
          <BottomNavigationAction
            label="Noticias"
            icon={<Favorite />}
            LinkComponent={Link}
            to={"/noticias"}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};