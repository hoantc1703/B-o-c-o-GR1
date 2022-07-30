import React from "react";
import Grid from "@mui/material/Grid";
import {  Paper, Typography } from "@mui/material";
import { useData } from "./MainPage";
import img1 from "../Image/tải xuống (3).jpg"
import img2 from "../Image/tải xuống (2).jpg"

export default function GridMap() {
  // Hooks
  const { level } = useData();

  return (
    <>
      {level.map((row, index) => {
        return (
          <>
            {row.map((item, index) => {
              const color = item === 1 ? "#8080ff" : "white";
              return (
                <Grid
                  item
                  xs={2}
                  style={{
                    border: "1px solid #4d4dff",
                  }}
                  key={index}
                >
                  <Paper
                    square
                    style={{
                      aspectRatio: 1.2,
                      backgroundColor: color,
                    }}
                    key={index}
                  >
                    <Typography
                      fontSize="xxx-large"
                      style={{ height: "100%" }}
                      key={index}
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