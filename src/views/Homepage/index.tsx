import { Container, Grid, makeStyles } from "@material-ui/core";
import moment from "moment";
import dateHelper from "helpers/dateHelper";
import CitySelect from "./components/CitySelect";
import ActualDay from "./components/ActualDay";
import WeekTimes from "./components/WeekTimes";
import WeekGraph from "./components/WeekGraph";
import { useState } from "react";

// import {
//   wheaterWeekInterface,
//   cityInterface,
//   stateInterface,
// } from "interfaces";

dateHelper();

const useStyles = makeStyles({
  containerRoot: {
    // backgroundColor: "red",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
  },
  content: {
    marginBottom: 24,
  },
});

const Homepage = () => {
  const [state, setState] = useState({
    city: "Recife",

    week: [
      { date: moment(), temp: 30, max: 32, min: 29 },
      {
        date: moment().add(1, "days"),
        temp: 30,
        max: 32,
        min: 29,
      },
      // {
      //   date: moment().add(2, "days"),
      //   temp: 30,
      //   max: 32,
      //   min: 29,
      // },
      // {
      //   date: moment().add(3, "days"),
      //   temp: 30,
      //   max: 32,
      //   min: 29,
      // },
      // {
      //   date: moment().add(4, "days"),
      //   temp: 30,
      //   max: 32,
      //   min: 29,
      // },
      // {
      //   date: moment().add(5, "days"),
      //   temp: 30,
      //   max: 32,
      //   min: 29,
      // },
      // {
      //   date: moment().add(6, "days"),
      //   temp: 30,
      //   max: 32,
      //   min: 29,
      // },
    ],
  });

  
  const classes = useStyles();
  return (
    <Container className={classes.containerRoot} maxWidth="md">
      <div className={classes.root}>
        <div className={classes.content}>
          <CitySelect />
        </div>
        <div className={classes.content}>
          <ActualDay actualDay={state.week[0]} city={state.city} />
        </div>
        <div className={classes.content}>
          <WeekTimes />
        </div>
        <div className={classes.content}>
          <WeekGraph />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
