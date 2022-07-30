import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from "./Image/tải xuống (1).jpg"
import logo1 from "./Image/tải xuống (2).jpg"
import logo2 from "./Image/tải xuống (3).jpg"
import logo3 from "./Image/tải xuống (1).png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box >
      <Grid container rowSpacing={0} justifyContent="center" alignItems="center">
        
        <Grid  xs="auto">
          <Item>
            <img src={logo1} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo1} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo2} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

      </Grid>

      <Grid container justifyContent="center">
      <Grid  xs="auto">
          <Item>
            <img src={logo3} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo1} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid> 
      </Grid>

      <Grid container justifyContent="center">
      <Grid  xs="auto">
          <Item>
            <img src={logo3} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo1} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid>

        <Grid  xs="auto">
          <Item>
            <img src={logo} alt="" style={{width : 200, height : 200}}/>
          </Item>
        </Grid> 
      </Grid>
      
    </Box>
  );
}
