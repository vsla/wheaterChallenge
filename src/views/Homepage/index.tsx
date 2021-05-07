import { useState, useEffect } from "react";

import { CircularProgress, Container, makeStyles } from "@material-ui/core";
import { dateInitializer } from "helpers/dateHelper";
import CitySelect from "./components/CitySelect";
import ActualDay from "./components/ActualDay";
import WeekTimes from "./components/WeekTimes";

import {
  cityVerifyResponse,
  weatherResponse,
  stateInterface,
} from "interfaces";
import { getCityWeather, findCityByName } from "services/weatherService";

dateInitializer();

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0px",
  },
  content: {
    marginBottom: 24,
  },
  contentSelectCity: {
    // display: "flex",
    // justifyContent: "center",
    marginBottom: 24,
  },
  loading: {
    display: "flex",
    justifyContent: "center",
  },
});

const Homepage = () => {
  const [
    { city, week, temp, date, actualDayImageId },
    setState,
  ] = useState<stateInterface>({
    city: "",
    week: [],
    temp: 0,
    date: "",
    actualDayImageId: "",
  });
  const [wrongCity, setWrongCity] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const classes = useStyles();

  const getWeather = async (cityName: string) => {
    const {
      data: {
        results: { city, forecast, temp, date, img_id },
      },
    }: weatherResponse = await getCityWeather(cityName);

    setState({
      actualDayImageId: img_id,
      city,
      temp,
      week: forecast,
      date,
    });
    setLoading(false);
  };

  const verifyCity = async (cityName: string) => {
    setLoading(true);
    const response: cityVerifyResponse = await findCityByName(cityName);

    if (!response.data.error) {
      setWrongCity(false);
      await getWeather(response.data.name);
    } else {
      setWrongCity(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getWeather("São Paulo");
  }, []);

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <div className={classes.contentSelectCity}>
          <CitySelect verifyCity={verifyCity} wrongCity={wrongCity} />
        </div>
        {!loading ? (
          <>
            <div className={classes.content}>
              <ActualDay
                city={city}
                actualDay={{
                  min: week[0].min,
                  max: week[0].max,
                  date,
                }}
                actualTemp={temp}
                actualDayImageId={actualDayImageId}
              />
            </div>
            <div className={classes.content}>
              <WeekTimes week={week} />
            </div>
          </>
        ) : (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Homepage;
