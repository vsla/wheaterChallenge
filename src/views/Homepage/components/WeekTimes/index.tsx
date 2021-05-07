import { Grid, makeStyles, Typography } from "@material-ui/core";
import Paper from "components/Paper";
import { dateConverter } from "helpers/dateHelper";
import { wheaterWeekInterface, wheaterInterface } from "interfaces";

interface Props {
  week: wheaterWeekInterface;
}

const useStyles = makeStyles({
  title: {
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "75%",
      backgroundColor: "#6a6a6a",
      height: "1px",
      bottom: 0,
      left: 0,
    },
  },
});

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
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h5" display="inline">
              Semana
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              {week.map(weekComponent)}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
