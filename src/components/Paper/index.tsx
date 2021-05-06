import { makeStyles, Paper as MaterialPaper } from "@material-ui/core";

interface Props {
  children: any;
}
const useStyles = makeStyles({
  root: {
    padding: 24,
  },
});
export default function Paper({ children }: Props) {
  const classes = useStyles();
  return (
    <MaterialPaper elevation={1} className={classes.root}>
      {children}
    </MaterialPaper>
  );
}
