import {
  Grid,
  makeStyles,
  Paper as MaterialPaper,
  Typography,
} from "@material-ui/core";

interface Props {
  children: any;
  title?: string;
}
const useStyles = makeStyles({
  root: {
    padding: 24,
  },title: {
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "50%",
      backgroundColor: "#6a6a6a",
      height: "1px",
      bottom: 0,
      left: 0,
    },
  },
});
export default function Paper({ children, title = "" }: Props) {
  const classes = useStyles();
  return (
    <MaterialPaper data-testid='paper' elevation={1} className={classes.root}>
      <Grid container spacing={2}>
        {title && (
          <Grid item xs={12}>
            <Typography data-testid='paper-title' className={classes.title} variant="h4" display="inline">{title}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>{children}</Grid>
      </Grid>
    </MaterialPaper>
  );
}
