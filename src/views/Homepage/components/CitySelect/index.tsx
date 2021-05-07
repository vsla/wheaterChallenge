import { makeStyles } from "@material-ui/core";
import Paper from "components/Paper";
import TextField from "components/TextField";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});

interface Props {
  verifyCity: (city: string) => void;
  wrongCity: boolean;
}

export default function CitySelectContainer({ verifyCity, wrongCity }: Props) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("São paulo");

  return (
    <Paper title="TempoClima">
      <div data-testid="citySelectroot" className={classes.root}>
        <TextField
          value={inputValue}
          handleChange={(e) => setInputValue(e.target.value)}
          label={"Escolha uma cidade"}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              verifyCity(inputValue);
            }
          }}
          error={wrongCity}
          errorMessage="Cidade não encontrada"
        />
      </div>
    </Paper>
  );
}
