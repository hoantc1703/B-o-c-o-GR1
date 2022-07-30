import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography, TextField } from "@mui/material";
import { useData } from "./MainPage";

export default function ControlBoard() {
  // Hooks
  const { steps, setSteps, move } = useData();
  const [newStep, setNewStep] = useState("");

  const addStep = () => {
    steps.push(newStep);
    setNewStep("");
    setSteps([...steps]);
  };

  const startMove = () => {
    move(steps.shift());
    setSteps([...steps]);
  };

  return (
    <>
      <Paper
        square
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #4d4dff",
        }}
      >
        <Grid item xs={12} style={{ height: "85%" }}>
          <Paper
            square
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #4d4dff",
              alignItems: "left",
            }}
          >
            {steps.map((step, index) => {
              return (
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  key={index}
                >
                  {step}
                </Typography>
              );
            })}
          </Paper>
        </Grid>
        <Grid
          item
          container
          alignContent={"center"}
          xs={12}
          pt={2}
          pl={4}
          spacing={4}
        >
          <Grid item xs={3} />
          <Grid item xs={3}>
            <TextField
              label="Step"
              value={newStep}
              onChange={(e) => {
                setNewStep(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={1} mt={0.75}>
            <Button variant="contained" size="large" onClick={addStep}>
              ADD
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} pt={2}>
          <Button variant="contained" onClick={startMove} size="large">
            RUN
          </Button>
        </Grid>
      </Paper>
    </>
  );
}
