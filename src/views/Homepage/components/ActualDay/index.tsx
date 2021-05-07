import { Grid, Typography } from "@material-ui/core";
import ClimateImage from "components/ClimateImage";
import Paper from "components/Paper";
import { dateConverter } from "helpers/dateHelper";
import temperatureHelper from "helpers/temperatureHelper";
import { wheaterInterface } from "interfaces";

interface Props {
  city: string;
  actualDay: wheaterInterface;
  actualTemp: number;
  actualDayImageId: string;
}

export default function ActualDay({
  city,
  actualDay: { date, max, min },
  actualTemp,
  actualDayImageId,
}: Props) {
  return (
    <Paper>
      <Grid
        data-testid="actualDayRoot"
        container
        direction="row"
        justify="space-between"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography data-testid="actualDayCity" variant="h3">
                {city}
              </Typography>
              <Typography data-testid="actualDayDate" variant="overline">
                {dateConverter(date).format("ll") +
                  " / " +
                  dateConverter(date).format("dddd")}
              </Typography>
            </Grid>
            <Grid item>
              <ClimateImage code={actualDayImageId} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography data-testid="actualDayTemperature" variant="h2">
                {temperatureHelper(actualTemp.toString())}
              </Typography>
            </Grid>
            <Grid item container justify="center">
              <Typography
                data-testid="actualDayMin"
                variant="body1"
                display="inline"
              >
                {temperatureHelper(min.toString())}
              </Typography>
              <Typography variant="body1" display="inline">
                {" / "}
              </Typography>
              <Typography
                data-testid="actualDayMax"
                variant="body1"
                display="inline"
              >
                {temperatureHelper(max.toString())}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
