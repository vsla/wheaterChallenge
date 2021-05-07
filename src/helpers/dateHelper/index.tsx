import moment from "moment";
import "moment/locale/pt-br";

const today = new Date();

export const dateInitializer = () => {
  moment.locale("pt-br");
};

export const dateConverter = (date: string) => {
  const dateSplitted = date.split("/");
  if (dateSplitted.length === 2) {
    const newDate = date + "/" + today.getFullYear();

    return moment(newDate, "DD/MM/YYYY");
  }
  return moment(date, "DD/MM/YYYY");
};
