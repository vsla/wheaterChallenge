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
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h3">{city}</Typography>
              <Typography variant="overline">
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
          <Typography variant="h2">
            {temperatureHelper(actualTemp.toString())}
          </Typography>
          <Typography variant="body1" display="inline">
            {temperatureHelper(min.toString())}
          </Typography>
          <Typography variant="body1" display="inline">
            {" / "}
          </Typography>
          <Typography variant="body1" display="inline">
            {temperatureHelper(max.toString())}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
