import { Grid, Typography } from "@material-ui/core";
import Paper from "components/Paper";
import temperatureHelper from "helpers/temperatureHelper";
import { wheaterInterface } from "interfaces";

interface Props {
  city: string;
  actualDay: wheaterInterface;
}

export default function ActualDay({
  city,
  actualDay: { date, temp, max, min },
}: Props) {
  return (
    <Paper>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography variant="h3">{city}</Typography>
          <Typography variant="overline">{date.format("ll")}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">
            {temperatureHelper(temp.toString())}
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
