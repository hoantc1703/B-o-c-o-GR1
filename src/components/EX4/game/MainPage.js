import React, { useState, createContext, useContext } from "react";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography, Modal, Box, Stack } from "@mui/material";
import GridMap from "./GridMap";
import ControlBoard from "./ControlBoard";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const defaultLevel = [
  [0, 0, 0, 0, 2, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0],
];

const y = defaultLevel.findIndex((row) => row.includes(3));
const x = defaultLevel[y].indexOf(3);
const defaultLocation = { x: x, y: y };

export default function MainPage() {
  // Hooks
  const [level, setLevel] = useState(defaultLevel);
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);
  const [steps, setSteps] = useState([]);
  const [open, setOpen] = useState(false);

  // Variables
  let tmpLevel;

  // Functions
  const toggleModal = () => setOpen(!open);

  const closeModal = () => setOpen(false);

  const checkWin = (newLocation) => {
    if (level[newLocation.y][newLocation.x] === 2) return true;
    return false;
  };

  const move = (direction) => {
    let newLocation;
    tmpLevel = level;

    switch (direction) {
      case "MOVE LEFT":
        newLocation = { x: currentLocation.x - 1, y: currentLocation.y };
        break;
      case "MOVE RIGHT":
        newLocation = { x: currentLocation.x + 1, y: currentLocation.y };
        break;
      case "MOVE UP":
        newLocation = { x: currentLocation.x, y: currentLocation.y - 1 };
        break;
      case "MOVE DOWN":
        newLocation = { x: currentLocation.x, y: currentLocation.y + 1 };
        break;
      default:
        break;
    }

    if (
      tmpLevel[newLocation.y][newLocation.x] !== undefined &&
      tmpLevel[newLocation.y][newLocation.x] !== 1
    ) {
      if (checkWin(newLocation)) toggleModal();
      tmpLevel[newLocation.y][newLocation.x] = 3;
      tmpLevel[currentLocation.y][currentLocation.x] = 0;
      setLevel([...tmpLevel]);
      setCurrentLocation(newLocation);

      return true;
    } else {
      console.log("Unable to move " + direction);
      return false;
    }
  };

  // Context
  const contextValue = {
    level,
    setLevel,
    steps,
    setSteps,
    currentLocation,
    setCurrentLocation,
    move,
    toggleModal,
  };

  return (
    <DataContext.Provider value={contextValue}>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Paper
            elevation={3}
            style={{
              width: "30rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10px",
            }}
          >
            <Stack spacing={5} padding={2}>
              <Typography textAlign="center" variant="h4" color="#ff8080">
                You Won!
              </Typography>
              <Button
                onClick={() => {
                  setLevel(defaultLevel);
                  setCurrentLocation(defaultLocation);
                  toggleModal();
                }}
                size="large"
              >
                OK
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Modal>
      <Paper square style={{ border: "3px solid #4d4dff" }}>
        <Paper square elevation={0} style={{ margin: "1rem" }}>
          <Grid container spacing={2}>
            <Grid container item spacing={0} xs={6}>
              <GridMap />
            </Grid>
            <Grid container item spacing={0} xs={6}>
              <ControlBoard />
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </DataContext.Provider>
  );
}
