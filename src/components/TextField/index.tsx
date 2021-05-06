import {
  Typography,
  TextField as MaterialTextField,
  makeStyles,
} from "@material-ui/core";

interface Props {
  id?: string;
  label: string;
  value: string | number;
  handleChange: () => void;
}
const useStyles = makeStyles({
  label:{}
});

export default function Select({ id, label, value, handleChange }: Props) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.label}>{label + ':'}</Typography>
      <MaterialTextField
        id={id ? id : label}
        // label={label}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
    </div>
  );
}
