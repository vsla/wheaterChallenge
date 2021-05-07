import moment from "moment";
import "moment/locale/pt-br";

const today = new Date();

export const dateInitializer = () => {
  moment.locale("pt-br");
};

export const dateConverter = (date: string) => {
  const dateSplitted = date.split("/");
  if (dateSplitted.length === 2) {
    const newDate =
      dateSplitted.reverse().join("/") + "/" + today.getFullYear();

    return moment(newDate);
  } else if (dateSplitted.length === 3) {
    return moment(
      dateSplitted.slice(0, 2).reverse().join("/") + "/" + dateSplitted[2]
    );
  }
  return moment(date);
};
