import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Chart } from "components/Chart";
import ClimateImage from "components/ClimateImage";
import Paper from "components/Paper";
import { dateConverter } from "helpers/dateHelper";
import {
  convertConditionToImageId,
  temperatureHelper,
} from "helpers/temperatureHelper";
import { conditionInterface, wheaterWeekInterface } from "interfaces";

interface Props {
  week: Array<wheaterWeekInterface>;
}

const useStyles = makeStyles({
  weekDay: {
    textTransform: "capitalize",
    fontSize: "1.2rem",
    marginBottom: 8,
  },
  temperature: {
    fontSize: "0.9rem",
  },
  arrowDown: { fontSize: "1rem", color: "red" },
  arrowUp: { fontSize: "1rem", color: "blue" },
  description: {
    marginTop: 8,
    fontSize: "0.75rem",
  },
});

export default function WeekTimes({ week }: Props) {
  const classes = useStyles();

  const weekComponent = ({
    date,
    min,
    max,
    description,
    condition,
  }: wheaterWeekInterface) => {
    return (
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography className={classes.weekDay}>
              {dateConverter(date).format("dddd").slice(0, 3)}
            </Typography>
          </Grid>
          <Grid item>
            <ClimateImage
              code={
                convertConditionToImageId(
                  condition.toString() as conditionInterface
                ).toString() + "n"
              }
              type="small"
            />
          </Grid>
          <Grid item>
            <Typography display="inline" className={classes.temperature}>
              <ArrowDownward className={classes.arrowUp} />
              {temperatureHelper(min.toString())}
            </Typography>
            <Typography display="inline" className={classes.temperature}>
              {" / "}
            </Typography>
            <Typography display="inline" className={classes.temperature}>
              {temperatureHelper(max.toString())}
              <ArrowUpward className={classes.arrowDown} />{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <Paper title="Semana">
        <Grid container spacing={1} justify="space-around">
          {week.slice(1, 7).map(weekComponent)}
          <Chart />
        </Grid>
      </Paper>
    </div>
  );
}
