import React from "react";
import WeatherIcons from "react-icons-weather";
import styled from "styled-components";

const StyledWeatherIcon = styled.div`
  & > i {
    background: #1d5e7b;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    line-height: 1.7em;
  }
`;
const WeatherIcon = ({ children, ...other }) => (
  <StyledWeatherIcon>
    <WeatherIcons {...other} />
  </StyledWeatherIcon>
);

export default WeatherIcon;
