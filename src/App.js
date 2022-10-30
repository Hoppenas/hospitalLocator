import { TextField, Grid, IconButton, InputAdornment, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const hospitalList = {
    ligonines: [
       {
          name: "Vilnius university hospital",
          miestas: "Vilnius",
          adresas: "Antakalnio g. 57",
          telefonas: "(8-5) 216 9069"
       },
       {
          name: "Vilnius City Clinical Hospital",
          miestas: "Vilnius",
          adresas: "Antakalnio g. 57",
          telefonas: "(8-5) 234 4519"
       },
       {
          name: "Vilnius City Clinical Hospital",
          miestas: "Vilnius",
          adresas: "Antakalnio g. 57",
          telefonas: "(8-5) 234 4519"
       },
       {
          name: "Vilnius University Hospital Santaros klinikos",
          miestas: "Vilnius",
          adresas: "Santariškių g. 2",
          telefonas: "(8-5) 236 5000"
       },
       {
          name: "Clinical Hospital of Kaunas",
          miestas: "Kaunas",
          adresas: "Josvainių g. 2",
          telefonas: "(8-37) 306000"
       },
       {
          name: "Republican Panevezys Hospital",
          miestas: "Panevezys",
          adresas: "Smėlynės g. 25",
          telefonas:"(8-45) 507184"
       }
    ]
 };

  return (
    <Grid container justifyContent='center'>
      <Grid item margin='10px'>
        <TextField id="filled-basic" label="Pld enter your location" variant="filled" onChange={(value) => setCity(value.target.value)} InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end" color="primary" onClick={() => setSearchLocation(city)}>
          Search
        </IconButton>
      </InputAdornment>
    ),
  }} />
      </Grid>
      <Grid item container xs={12}>
        {hospitalList.ligonines.map((hospital, id) => 
        hospital.miestas.toLocaleLowerCase().includes(searchLocation.toLocaleLowerCase()) && 
        searchLocation !== '' &&
          <Grid item container xs={3} margin='15px'>
            <Paper elevation={3} key={id} margin='10px'>
            <Typography item>
              {hospital.name}
            </Typography>
            <Typography item>
              {hospital.adresas}
            </Typography>
            <Typography item>
              {hospital.miestas}
            </Typography>
            <Typography item>
              {hospital.telefonas}
            </Typography>
          </Paper>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
