import { Container } from "@material-ui/core";
import moment from "moment";
import dateHelper from "helpers/dateHelper";
import CitySelect from "./components/CitySelect";
import ActualDay from "./components/ActualDay";
import WeekTimes from "./components/WeekTimes";
import WeekGraph from "./components/WeekGraph";
import { useState } from "react";
import {
  wheaterWeekInterface,
  cityInterface,
  stateInterface,
} from "interfaces";

dateHelper();

const Homepage = () => {
  const [state, setState] = useState<stateInterface>({
    city: "Recife",
    date: moment().format("dddd"),
    temp: 30,
    max: 32,
    min: 29,

    week: [
      {
        // date: moment().add(1, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
      {
        // date: moment().add(2, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
      {
        // date: moment().add(3, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
      {
        // date: moment().add(4, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
      {
        // date: moment().add(5, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
      {
        // date: moment().add(6, "days").format("dddd"),
        temp: 30,
        max: 32,
        min: 29,
      },
    ],
  });

  return (
    <Container maxWidth="md">
      <CitySelect state={state} />
      <ActualDay />
      <WeekTimes />
      <WeekGraph />
    </Container>
  );
};

export default Homepage;
