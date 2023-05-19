import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Home.scss";

import {
  Button,
  Stack,
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";

export const Home = () => {
  const dispatch = useAppDispatch(); //for later use of redux
  const [openGroupF, setOpenGroupF] = useState(false);
  const [openPlayerF, setOpenPlayerF] = useState(false);

  const roles = [
    {
      value: "Sentinel",
    },
    {
      value: "Duelist",
    },
    {
      value: "Controller",
    },
    {
      value: "Initiator",
    },
    {
      value: "Any",
    },
  ];
  return (
    <>
      <Stack
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Button onClick={() => setOpenGroupF(true)} variant="contained">
          LF Group
        </Button>
        <Button onClick={() => setOpenPlayerF(true)} variant="contained">
          LF Player
        </Button>
      </Stack>

      <Modal open={openGroupF} onClose={() => setOpenGroupF(false)}>
        <Box component="form">
          <Typography variant="h4" component="h2">
            Let's find you a group
          </Typography>
          <TextField required label="Name" variant="outlined" />
          <TextField select label="Role" variant="outlined" defaultValue="Any">
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Game Mode"
            variant="outlined"
            defaultValue="Competitive"
          >
            <MenuItem key="Competitive" value="Competitive">
              Competitive
            </MenuItem>
            <MenuItem key="Casual" value="Casual">
              Casual
            </MenuItem>
          </TextField>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>

      <Modal open={openPlayerF} onClose={() => setOpenPlayerF(false)}>
        <Box component="form">
          <Typography variant="h4" component="h2">
            Let's find you a player
          </Typography>
          <TextField select label="Role" variant="outlined" defaultValue="Any">
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Game Mode"
            variant="outlined"
            defaultValue="Competitive"
          >
            <MenuItem key="Competitive" value="Competitive">
              Competitive
            </MenuItem>
            <MenuItem key="Casual" value="Casual">
              Casual
            </MenuItem>
          </TextField>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};
