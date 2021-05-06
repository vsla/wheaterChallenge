import * as moment from "moment";

export interface wheaterInterface {
  min: number;
  max: number;
  date: moment.Moment;
  temp: number;
}

export type wheaterWeekInterface = wheaterInterface[];

export type cityInterface = string;

export interface stateInterface extends wheaterInterface {
  // weeek: Array<wheaterInterface> | [];
  // city: cityInterface;
}
