import { Grid, Typography } from "@material-ui/core";
import { Chart } from "components/Chart";
import Paper from "components/Paper";
import { dateConverter } from "helpers/dateHelper";
import { wheaterWeekInterface, wheaterInterface } from "interfaces";

interface Props {
  week: wheaterWeekInterface;
}

const weekComponent = ({ date, min, max }: wheaterInterface) => {
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <Typography>
            {dateConverter(date).format("dddd").slice(0, 3)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function WeekTimes({ week }: Props) {
  return (
    <div>
      <Paper title="Semana">
        <Grid container spacing={1}>
          {/* {week.map(weekComponent)} */}
          <Chart />
        </Grid>
      </Paper>
    </div>
  );
}
