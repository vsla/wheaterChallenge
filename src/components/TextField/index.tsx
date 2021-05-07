import {
  Typography,
  TextField as MaterialTextField,
  makeStyles,
} from "@material-ui/core";

interface Props {
  id?: string;
  label: string;
  value: string | number;
  handleChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  error?: boolean;
  errorMessage?: string;
}
const useStyles = makeStyles({
  errorMessage: {
    marginTop: 8,
    color: "red",
    fontSize: "0.85rem",
  },
  rootTypography: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function Select({
  id,
  label,
  value,
  handleChange,
  onKeyDown,
  error = false,
  errorMessage = "",
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.rootTypography}>
      <Typography>{label + ":"}</Typography>
      <MaterialTextField
        id={id ? id : label}
        value={value}
        error={error}
        onChange={handleChange}
        variant="outlined"
        onKeyDown={onKeyDown}
      />
      {error && (
        <Typography className={classes.errorMessage}>{errorMessage}</Typography>
      )}
    </div>
  );
}
