import React, { useState, createContext, useContext } from "react";
// import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";
import img1 from ".//Image/tải xuống (3).jpg"
import img2 from "./Image/tải xuống (2).jpg"


const level = [
  [0, 0, 0, 0, 2, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0],
];

const steps = ["Move Left", "Move Top", "Move Right", "Move Bottom"];


export function GridMap() {
  return (
    <>
      {level.map((row) => {
        return (
          <>
            {row.map((item) => {
              const color = item === 1 ? "#8080ff" : "white";
              return (
                <Grid
                  item
                  xs={2}
                  style={{
                    border: "1px solid #4d4dff",
                  }}
                >
                  <Paper
                    square
                    style={{
                      aspectRatio: 1.2,
                      backgroundColor: color,
                    }}
                  >
                    <Typography
                      fontSize="xxx-large"
                      style={{ height: "100%"}}
                    >
                      {item === 2 ? <img src={img1} alt="" style={{width : 100, height : 100}}/> : 
                      item === 3 ? <img src={img2} alt="" style={{width : 100, height : 100}}/> : null}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </>
        );
      })}
    </>
  );
}

export function ControlBoard() {
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
        <Grid item xs={12} style={{ height: "90%" }}>
          <Paper
            square
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #4d4dff",
              alignItems: "left",
            }}
          >
            <MoveSteps />
          </Paper>
        </Grid>
        <Grid item alignContent={"center"} xs={12}>
          <Button
            variant="contained"
            style={{ width: "20%", height: "50%", marginTop: "3%" }}
          >
            Run
          </Button>
        </Grid>
      </Paper>
    </>
  );
}

export function MoveSteps() {
  return (
    <>
      {steps.map((step) => {
        return (
          <Typography variant="h6" gutterBottom component="div">
            {step}
          </Typography>
        );
      })}
    </>
  );
}

export default function MainPage() {
  return (
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
  );
}
