import { makeStyles } from "@material-ui/core";
import TextField from "components/TextField";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function CitySelectContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        value="oi"
        handleChange={() => {}}
        label={"Escolha uma cidade"}
      />
    </div>
  );
}
