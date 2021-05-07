import React, { ReactElement } from "react";

interface Props {
  code: string;
  type?: "normal" | "small";
}

const ClimateImage = ({ code, type = "normal" }: Props): ReactElement => {
  return (
    <img
      alt="imagem clima"
      src={"https://assets.hgbrasil.com/weather/images/" + code + ".png"}
      style={{ height: type === "normal" ? "100px" : "50px" }}
    />
  );
};

export default ClimateImage;
