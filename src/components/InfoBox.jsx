import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import hot from "../images/hot.jpg";
import cold from "../images/cold.jpg";
import rain from "../images/rain.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import LightModeIcon from "@mui/icons-material/LightMode";
const InfoBox = ({ info }) => {
  // let hot=""
  // let cold=""
  // let rain=""
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={info.humidity > 80 ? rain : info.temp < 15 ? cold : hot}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <LightModeIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Temperature Max = {info.tempmax}&deg;C</p>
              <p>Temperature Min = {info.tempmin}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>
                The weather can be describe as {info.weather} and feelslike{" "}
                {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
